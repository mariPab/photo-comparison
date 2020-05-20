import React from 'react';
import { connect } from 'react-redux';
import styles from './Admin.module.scss';
import { getList } from '../../../redux/photos/reducer';
import { Nav } from '../../layout/Nav';
import { PhotoActions } from '../../../redux/photos/actions';
import { NavLink } from 'react-router-dom';
import { PhotoCard } from '../../features/PhotoCard';
import { PhotoInterface } from '../../../interfaces/photos';
import { RootState } from '../../../redux/store';
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
    console.log(this.props);
    return (
      <div className={styles.root}>
        <Nav linksList={photosList} />
        <div className={styles.panel}>
          <NavLink exact to={`/admin/submit`}>
            Dodaj nowe porównanie
          </NavLink>
          <div className={styles.manageSection}>
            {photosList ? photosList.map(elem => (
              <PhotoCard key={elem._id} photoData={elem} />
            )) : null}
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = (state: RootState): MapStateToProps => ({
  photosList: getList(state.Photos),
});
const mapDispatchToProps: MapDispatchToProps = {
  getAllPhotos
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
export {
  Container as Admin,
  Component as AdminComponent,
};
