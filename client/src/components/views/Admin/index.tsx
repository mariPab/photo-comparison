import React from 'react';
import { connect } from 'react-redux';
import styles from './Admin.module.scss';
import { getList } from '../../../redux/photos/reducer';
import { Nav } from '../../layout/Nav';
import { PhotoActions } from '../../../redux/photos/actions';
import { NavLink } from 'react-router-dom';
import { PhotoCard } from '../../features/PhotoCard';
import { PhotoInterface } from '../../../interfaces/photos';
import { PhotoState } from '../../../redux/photos/types';
const { getAllPhotos } = PhotoActions;

interface MapStateToProps {
  photosList: Array<PhotoInterface>
}
interface MapDispatchToProps {
  getAllPhotos: any
}
type Props = MapStateToProps & MapDispatchToProps;

class Component extends React.Component<Props> {
  componentDidMount(): void {
    this.props.getAllPhotos();
  }
  render(): React.ReactElement {
    const { photosList } = this.props;
    return (
      <div className={styles.root}>
        <Nav linksList={photosList} />
        <div className={styles.panel}>
          <NavLink exact to={`/admin/submit`}>
            Dodaj nowe porównanie
          </NavLink>
          <div className={styles.manageSection}>
            {photosList.map(elem => (
              <PhotoCard key={elem._id} photoData={elem} />
            ))}
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = (state: PhotoState): MapStateToProps => ({
  photosList: getList(state),
});
const mapDispatchToProps: MapDispatchToProps = {
  getAllPhotos
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps)(Component);
export {
  Container as Admin,
  Component as AdminComponent,
};
