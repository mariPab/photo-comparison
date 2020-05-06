import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Admin.module.scss';
import { getList } from '../../../redux/photos/reducer';
import { Nav } from '../../layout/Nav/Nav';
import { PhotoActions } from '../../../redux/photos/actions';
import { NavLink } from 'react-router-dom';
import { PhotoCard } from '../../features/PhotoCard/PhotoCard';
const { getAllPhotos } = PhotoActions;

class Component extends React.Component {
  static propTypes = {
    getAllPhotos: PropTypes.func,
    photosList: PropTypes.arrayOf(PropTypes.object)
  }
  componentDidMount() {
    this.props.getAllPhotos();
  }

  render() {
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

const mapStateToProps = state => ({
  photosList: getList(state),
});

const mapDispatchToProps = {
  getAllPhotos
};

const Container = connect(mapStateToProps, mapDispatchToProps)(withRouter(Component));

export {
  // Component as Admin,
  Container as Admin,
  Component as AdminComponent,
};
