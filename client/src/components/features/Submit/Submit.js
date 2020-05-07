import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Submit.module.scss';
import { PhotoActions } from '../../../redux/photos/actions';
import { Button } from '../../common/Button';
const { submitPhotos } = PhotoActions;

class Component extends React.Component {

  state = {
    photoData: {
      title: '',
      description: '',
      width: 640,
      height: 480,
      images: {
        before: null,
        after: null
      },
    },
    isError: false,
  }
  updateInputValue = ({ target }) => {
    const { photoData } = this.state;
    const { value, name } = target;

    this.setState({ photoData: { ...photoData, [name]: value } });
  }

  setImage = ({ target }) => {
    const { name, files } = target;
    const { photoData } = this.state;

    if (files) this.setState({
      photoData: {
        ...photoData, images: {
          ...photoData.images,
          [name]: files[0]
        }
      }
    });
  }

  submit = async (e) => {
    const { photoData } = this.state;
    e.preventDefault();
    if (photoData.title && photoData.description) {
      const formData = new FormData();
      for (let key of ['description', 'title', 'height', 'width']) {
        formData.append(key, photoData[key]);
      }
      formData.append('before', photoData.images.before);
      formData.append('after', photoData.images.after);
      this.props.submitPhotos(formData);
      this.props.history.push('/admin');
    } else this.setState({ isError: true });

  };

  render() {
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
              onChange={updateInputValue}
              value={photoData.title}
              minLength="10" required
              type="text"
              placeholder="Tytuł"
            />
          </div>
          <textarea
            name="description"
            onChange={updateInputValue}
            value={photoData.description}
            rows="5"
            placeholder="Opis zdjęć"
          >
          </textarea>
          <div className={styles.elemWrapper}>
            <label htmlFor="before">Zdjęcie Przed</label>
            <input
              id="before"
              name="before"
              onChange={setImage}
              type="file"
            />
            <label htmlFor="after">Zdjęcie Po</label>
            <input
              id="after"
              name="after"
              onChange={setImage}
              type="file"
            />
          </div>
          <div className={styles.elemWrapper}>
            <label>
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
            <label>
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
        </form>
      </div >
    );
  }
}

const mapDispatchToProps = {
  submitPhotos
};

const Container = connect(null, mapDispatchToProps)(withRouter(Component));

export {
  Container as Submit,
  Component as SubmitComponent,
};
