import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { PhotoActions } from '../../../redux/photos/actions';
import { Button } from '../../UI/Button';
import { getPhotoById } from '../../../redux/photos/reducer';
import { PhotoInterface } from '../../../interfaces/photos';
import { WithFormLogicHOC } from '../../../interfaces/global';
import { RootState } from '../../../redux/store';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faImages } from '@fortawesome/free-solid-svg-icons';
import withFormLogic from '../../../HOC/withFormLogic';
import {
  GetPhotoData,
  EditComparison,
} from '../../../redux/photos/types';
import { FormContainer, FormElement, FlexContainer } from '../../../styles/Form.style';
import { Label } from '../../UI/Input/Input.style';
import { Input } from '../../UI/Input';

const { editComparison, getPhotoData } = PhotoActions;

interface MapStateToProps {
  photoData: PhotoInterface;
}
interface MapDispatchToProps {
  getPhotoData: (id: string) => GetPhotoData;
  editComparison: (id: string, data: globalThis.FormData) => EditComparison;
}
interface MatchProps {
  id: string;
}
type Props =
  MapStateToProps &
  MapDispatchToProps &
  RouteComponentProps<MatchProps> &
  WithFormLogicHOC;

class Component extends React.Component<Props> {
  componentDidMount(): void {
    if (this.props.photoData) {
      this.props.updateFormFill(this.props.photoData);
    } else {
      this.props.getPhotoData(this.props.match.params.id);
    }
  }
  submit = (e: React.FormEvent): void => {
    const { formFillData } = this.props;
    const { id } = this.props.match.params;
    e.preventDefault();
    if (formFillData.title && formFillData.description) {
      const data = this.props.convertToFormData(formFillData);
      this.props.editComparison(id, data);
      this.props.history.push(`/photos/${id}`);
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
        <h2>Edytuj dane</h2>
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
            Zaktualizuj
          </Button>
        </FormElement>
      </FormContainer>
    );
  }
}
const mapStateToProps = (state: RootState, props: Props): MapStateToProps => ({
  photoData: getPhotoById(state.Photos, props.match.params.id),
});
const mapDispatchToProps: MapDispatchToProps = {
  editComparison,
  getPhotoData,
};
const Container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withFormLogic,
)(Component) as React.ComponentClass<Props>;

export {
  Container as EditForm,
  Component as EditFormComponent,
};