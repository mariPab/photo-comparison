import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { PhotoActions } from '../../../redux/photos/actions';
import { WithFormLogicHOC } from '../../../interfaces/global';
import { Button } from '../../common/Button';
import { SubmitPhoto } from '../../../redux/photos/types';
import { FormContainer, FormElement } from '../../../styles/StyledForm';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faImages } from '@fortawesome/free-solid-svg-icons';
import { compose } from 'redux';
import withFormLogic from '../../../HOC/withFormLogic';

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
          <label htmlFor="title">
            Tytuł
          </label>
          <input
            id="title"
            name="title"
            onChange={updateInputValue}
            autoComplete="off"
            value={formFillData.title}
            minLength={10}
            required
            type="text"
            placeholder="Tytuł"
          />
          <label
            htmlFor="description"
          >
            Opis zdjęć
          </label>
          <textarea
            name="description"
            onChange={updateInputValue}
            value={formFillData.description}
            rows={5}
            placeholder="Opis zdjęć"
          >
          </textarea>
          <h3>Wybierz zdjęcia do porównania</h3>
          <div className="flexContainer">
            <label>Zdjęcie Przed
              <input
                id="before"
                name="before"
                onChange={setImage}
                type="file"
              />
            </label>
            <label>
              Zdjęcie Po
              <input
                id="after"
                name="after"
                onChange={setImage}
                type="file"
              />
            </label>
          </div>
          <h3>Określ rozmiary zdjęć</h3>
          <div className="flexContainer">
            <label className="label__dimensions">
              Szerokość
              <input
                name="width"
                onChange={updateInputValue}
                value={formFillData.width}
                type="number"
                min={100}
                max={800}
              />
              px
            </label>
            <label className="label__dimensions">
              Wysokość
              <input
                min={100}
                max={800}
                name="height"
                onChange={updateInputValue}
                value={formFillData.height}
                type="number"
              />
              px
            </label>
          </div>
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
