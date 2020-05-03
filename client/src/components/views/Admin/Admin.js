import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './Admin.module.scss';
import { getList } from '../../../redux/photos/reducer';
import { Nav } from '../../layout/Nav/Nav';
import { Submit } from '../../features/Submit/Submit';
import { PhotoActions } from '../../../redux/photos/actions';

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
        {photosList && photosList.length ? <Nav linksList={photosList} /> : null}
        <Submit />
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
