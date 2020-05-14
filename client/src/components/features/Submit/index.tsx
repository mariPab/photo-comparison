import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './Submit.module.scss';
import { PhotoActions } from '../../../redux/photos/actions';
import { Button } from '../../common/Button';
import { convertValuesToString } from '../../../utils/utils';
const { submitPhotos } = PhotoActions;

interface MapDispatchToProps {
  submitPhotos: any;
}
type Props = MapDispatchToProps & RouteComponentProps

class Component extends React.Component<Props> {
  state = {
    photoData: {
      title: '',
      description: '',
      width: 640,
      height: 480,
      // images: {
      before: '',
      after: '',
      // },
    },
    isError: false,
  }
  updateInputValue = (e: KeyboardEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    const { photoData } = this.state;
    const { value, name } = target;
    this.setState({ photoData: { ...photoData, [name]: value } });
  }
  setImage = (e: MouseEvent): void => {
    const target = e.target as HTMLInputElement;
    const { name, files } = target;
    const { photoData } = this.state;

    if (files) this.setState({
      photoData: {
        ...photoData,
        // images: {
        //   ...photoData.images,
        [name]: files[0],
        // }
      },
    });
  }

  submit = (e: React.FormEvent): void => {
    const { photoData } = this.state;
    e.preventDefault();
    if (photoData.title && photoData.description) {
      const data = convertValuesToString(photoData);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      // for (let key of ['description', 'title', 'height', 'width']) {
      //   formData.append(key, photoData[key]);
      // }
      // formData.append('before', photoData.images.before);
      // formData.append('after', photoData.images.after);
      this.props.submitPhotos(formData);
      this.props.history.push('/admin');
    } else this.setState({ isError: true });

  };

  render(): React.ReactElement {
    const { updateInputValue, submit, setImage } = this;
    const { photoData } = this.state;

    return (
      <div className={styles.root}>
        <h2>Dodaj nowe porównanie zdjęć</h2>
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.elemWrapper}>
            <label htmlFor="title">
              Tytuł
            </label>
            <input
              id="title"
              name="title"
              onChange={() => updateInputValue}
              value={photoData.title}
              minLength={10}
              required
              type="text"
              placeholder="Tytuł"
            />
          </div>
          <textarea
            name="description"
            onChange={() => updateInputValue}
            value={photoData.description}
            rows={5}
            placeholder="Opis zdjęć"
          >
          </textarea>
          <div className={styles.elemWrapper}>
            <label htmlFor="before">Zdjęcie Przed</label>
            <input
              id="before"
              name="before"
              onChange={() => setImage}
              type="file"
            />
            <label htmlFor="after">Zdjęcie Po</label>
            <input
              id="after"
              name="after"
              onChange={() => setImage}
              type="file"
            />
          </div>
          <div className={styles.elemWrapper}>
            <label>
              Szerokość
              <input
                name="width"
                onChange={() => updateInputValue}
                value={photoData.width}
                type="number"
                min={100}
                max={800}
              />
              px
            </label>
            <label>
              Wysokość
              <input
                min={100}
                max={800}
                name="height"
                onChange={() => updateInputValue}
                value={photoData.height}
                type="number"
              />
              px
            </label>
          </div>
          <Button>
            Dodaj
          </Button>
        </form>
      </div >
    );
  }
}
const mapDispatchToProps: MapDispatchToProps = {
  submitPhotos,
};
const Container = connect(null, mapDispatchToProps)(withRouter(Component));
export {
  Container as Submit,
  Component as SubmitComponent,
};
