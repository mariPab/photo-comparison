import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Submit.module.scss';
import { PhotoActions } from '../../../redux/photos/actions';

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

  static propTypes = {
    history: PropTypes.object,
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
      // this.props.history.push('/my-posts');
      this.setState({
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
      });
    } else this.setState({ isError: true });

  };

  render() {
    const { updateInputValue, submit, setImage } = this;
    const { photoData } = this.state;

    return (
      <div className={styles.root}>
        <h2>Dodaj nowe porównanie zdjęć</h2>
        <form onSubmit={submit}>
          <div>
            <label>
              Tytuł
            <input
                className={styles.formElem}
                name="title"
                onChange={updateInputValue}
                value={photoData.title}
                minLength="10" required
                type="text"
                placeholder="Tytuł"
              />
            </label>
          </div>
          <div>
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
                className={styles.formElem}
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
          <div>

            <label>
              Zdjęcie Przed
            <input
                name="before"
                onChange={setImage}
                type="file"
              />
            </label>
            <label>
              Zdjęcie Po
            <input
                className={styles.formElem}

                name="after"
                onChange={setImage}
                type="file"
              />
            </label>
          </div>
          <textarea
            className={styles.formElem}
            name="description"
            onChange={updateInputValue}
            value={photoData.description}
            rows="5"
            placeholder="Opis zdjęć"
          >
          </textarea>
          <button
            className={`${styles.btn}`}
          >
            Dodaj
          </button>
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
  // Component as Submit,
  Container as Submit,
  Component as SubmitComponent,
};
