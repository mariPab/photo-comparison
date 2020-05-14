import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './EditForm.module.scss';
import { PhotoActions } from '../../../redux/photos/actions';
import { Button } from '../../common/Button/Button';
import { getPhotoById } from '../../../redux/photos/reducer';

const { editComparison, getPhotoData } = PhotoActions;

class Component extends React.Component {
  state = {
    photoData: {
      title: this.props.photoData.title,
      description: this.props.photoData.description,
      width: this.props.photoData.dimensions ? this.props.photoData.dimensions.width : 100,
      height: this.props.photoData.dimensions ? this.props.photoData.dimensions.height : 100,
      images: {
        before: null,
        after: null,
      },
    },
    isError: false,
  }
  static propTypes = {
    history: PropTypes.object,
    editComparison: PropTypes.func,
    getPhotoData: PropTypes.func,
    photoData: PropTypes.object,
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
        ...photoData,
        images: {
          ...photoData.images,
          [name]: files[0]
        }
      }
    });
  }
  submit = async (e) => {
    const { photoData } = this.state;
    const { id } = this.props.match.params;
    console.log(photoData.images);
    e.preventDefault();
    if (photoData.title && photoData.description) {
      const formData = new FormData();
      for (let key of ['description', 'title', 'height', 'width']) {
        formData.append(key, photoData[key]);
      }
      if (photoData.images.before) formData.append('before', photoData.images.before);
      if (photoData.images.after) formData.append('after', photoData.images.after);
      this.props.editComparison(id, formData);
      this.props.history.push(`/photos/${id}`);
    } else this.setState({ isError: true });
  };
  render() {
    const { updateInputValue, submit, setImage } = this;
    const { photoData } = this.state;
    return (
      <div className={styles.root}>
        <h2>Edytuj dane do porównania zdjęć</h2>
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
              minLength="10"
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
          * Jeśli nie chcesz zmieniać wybranego zdjęcia - zostaw to pole puste
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
            Zaktualizuj
          </Button>
        </form>
      </div >
    );
  }
}
const mapStateToProps = (state, props) => ({
  photoData: getPhotoById(state, props.match.params.id),
});
const mapDispatchToProps = {
  editComparison,
  getPhotoData
};
const Container = connect(mapStateToProps, mapDispatchToProps)(withRouter(Component));
export {
  Container as EditForm,
  Component as EditFormComponent,
};
