import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { PhotoActions } from '../../../redux/photos/actions';
import { FormState } from '../../../interfaces/photos';
import { Button } from '../../common/Button';
import { convertToFormData } from '../../../utils/utils';
import { SubmitPhoto } from '../../../redux/photos/types';
import { FormContainer, FormElement } from '../../../styles/StyledForm';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faImages } from '@fortawesome/free-solid-svg-icons';

const { submitPhotos } = PhotoActions;

interface MapDispatchToProps {
  submitPhotos: (data: globalThis.FormData) => SubmitPhoto;
}
type Props = MapDispatchToProps & RouteComponentProps

class Component extends React.Component<Props, FormState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      photoData: {
        title: '',
        description: '',
        width: 640,
        height: 480,
        before: '',
        after: '',
      },
      isError: false,
    } as FormState;
  }
  updateInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value, name } = e.target;
    this.setState({ photoData: { ...this.state.photoData, [name]: value } });
  }
  setImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, files } = e.target;
    if (files) this.setState({
      photoData: {
        ...this.state.photoData,
        [name]: files[0],
      },
    });
  }
  submit = (e: React.FormEvent): void => {
    const { photoData } = this.state;
    e.preventDefault();
    if (photoData.title && photoData.description) {
      const data = convertToFormData(photoData);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      this.props.submitPhotos(formData);
      this.props.history.push('/admin');
    } else this.setState({ isError: true });
  };
  render(): React.ReactElement {
    const { updateInputValue, submit, setImage } = this;
    const { photoData } = this.state;
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
        <FormElement onSubmit={submit}>
          <label htmlFor="title">
            Tytuł
          </label>
          <input
            id="title"
            name="title"
            onChange={updateInputValue}
            autoComplete="off"
            value={photoData.title}
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
            value={photoData.description}
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
                value={photoData.width}
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
                value={photoData.height}
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
const Container = connect(
  null,
  mapDispatchToProps
)(
  withRouter(
    Component
  ));
export {
  Container as Submit,
  Component as SubmitComponent,
};
