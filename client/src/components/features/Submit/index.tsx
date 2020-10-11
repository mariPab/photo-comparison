import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { PhotoActions } from '../../../redux/photos/actions';
import { WithFormLogicHOC } from '../../../interfaces/global';
import { Button } from '../../UI/Button';
import { SubmitPhoto } from '../../../redux/photos/types';
import { FormContainer, FormElement, FlexContainer } from '../../../styles/Form.style';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faImages } from '@fortawesome/free-solid-svg-icons';
import { compose } from 'redux';
import withFormLogic from '../../../HOC/withFormLogic';
import { Input } from '../../UI/Input';
import { Label } from '../../UI/Input/Input.style';

const { submitPhotos } = PhotoActions;

interface MapDispatchToProps {
  submitPhotos: (data: globalThis.FormData) => SubmitPhoto;
}
type Props =
  MapDispatchToProps &
  RouteComponentProps &
  WithFormLogicHOC;

class Component extends React.Component<Props> {
  submit = (e: React.FormEvent): void => {
    const { formFillData } = this.props;
    e.preventDefault();
    if (formFillData.title && formFillData.description) {
      const data = this.props.convertToFormData(formFillData);
      this.props.submitPhotos(data);
      this.props.history.push('/admin');
    } else this.props.handleError();
  };
  render(): React.ReactElement {
    const { updateInputValue, setImage, formFillData } = this.props;
    return (
      <FormContainer>
        <NavLink exact to={`/admin`}>
          <FontAwesomeIcon icon={faArrowLeft} />
            Powrót do panelu administracyjnego
        </NavLink>
        <h2>Dodaj nowe porównanie zdjęć</h2>
        <FontAwesomeIcon
          className="icon__background"
          icon={faImages}
        />
        <FormElement onSubmit={this.submit}>
          <Input
            name="title"
            onChange={updateInputValue}
            value={formFillData.title}
            type="text"
          />
          <Label
            htmlFor="description"
          >
            Opis zdjęć
          </Label>
          <textarea
            name="description"
            onChange={updateInputValue}
            value={formFillData.description}
            rows={5}
            placeholder="Opis zdjęć"
          >
          </textarea>
          <h3>Wybierz zdjęcia do porównania</h3>
          <FlexContainer>
            <Input
              name="before"
              onChange={setImage}
              type="file"
            />
            <Input
              name="after"
              onChange={setImage}
              type="file"
            />
          </FlexContainer>
          <h3>Określ rozmiary zdjęć</h3>

          <FlexContainer>
            <Input
              name="width"
              onChange={updateInputValue}
              value={formFillData.width}
              type="number"
            />
            <Input
              name="height"
              onChange={updateInputValue}
              value={formFillData.height}
              type="number"
            />
          </FlexContainer>
          <Button>
            Dodaj
          </Button>
        </FormElement>
      </FormContainer>
    );
  }
}
const mapDispatchToProps: MapDispatchToProps = {
  submitPhotos,
};
const Container = compose<any>(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter,
  withFormLogic,
)(Component) as React.ComponentClass<Props>;

export {
  Container as Submit,
  Component as SubmitComponent,
};
