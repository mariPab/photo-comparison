import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './EditForm.module.scss';
import { PhotoActions } from '../../../redux/photos/actions';
import { Button } from '../../common/Button';
import { getPhotoById } from '../../../redux/photos/reducer';
import { PhotoInterface } from '../../../interfaces/photos';
import { PhotoState } from '../../../redux/photos/types';
import { convertValuesToString } from '../../../utils/utils';

const { editComparison, getPhotoData } = PhotoActions;

interface MapStateToProps {
  photoData: PhotoInterface;
}
interface MapDispatchToProps {
  getPhotoData: any;
  editComparison: any;
}
interface MatchProps {
  id: string;
}
type Props = MapStateToProps & MapDispatchToProps & RouteComponentProps<MatchProps>;

class Component extends React.Component<Props> {
  state = {
    photoData: {
      title: this.props.photoData.title,
      description: this.props.photoData.description,
      width: this.props.photoData.dimensions.width,
      height: this.props.photoData.dimensions.height,
      before: this.props.photoData.images.before,
      after: this.props.photoData.images.before,
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
    const { id } = this.props.match.params;
    e.preventDefault();

    if (photoData.title && photoData.description) {
      const data = convertValuesToString(photoData);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      // for (let key of ['description', 'title', 'height', 'width', 'before', 'after']) {
      //   formData.append(key, JSON.stringify(photoData[key]));
      // }
      // formData.append('before', photoData.before);
      // formData.append('after', photoData.after);
      this.props.editComparison(id, formData);
      this.props.history.push(`/photos/${id}`);
    } else this.setState({ isError: true });
  };
  render(): React.ReactElement {
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
              onChange={() => updateInputValue}
              value={photoData.title}
              minLength={10}
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
          * Jeśli nie chcesz zmieniać wybranego zdjęcia - zostaw to pole puste
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
            Zaktualizuj
          </Button>
        </form>
      </div >
    );
  }
}
const mapStateToProps = (state: PhotoState, props: Props): MapStateToProps => ({
  photoData: getPhotoById(state, props.match.params.id),
});
const mapDispatchToProps: MapDispatchToProps = {
  editComparison,
  getPhotoData,
};
const Container = connect(mapStateToProps, mapDispatchToProps)(withRouter(Component));

export {
  Container as EditForm,
  Component as EditFormComponent,
};
