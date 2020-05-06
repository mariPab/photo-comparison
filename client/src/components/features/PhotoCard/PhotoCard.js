import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './PhotoCard.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { IMAGES_URL } from '../../../config';
import { Button } from '../../common/Button/Button';
import { PhotoActions } from '../../../redux/photos/actions';

const { deleteComparison } = PhotoActions;

const Component = ({ photoData, deleteComparison }) => {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        <img
          src={`${IMAGES_URL}/${photoData.images.before}`}
          alt={photoData.title}
        />
      </div>
      <div className={styles.details} >
        <p>{photoData.title}</p>
        <NavLink exact to={`/admin/edit/${photoData._id}`}>
          <FontAwesomeIcon icon={faPen} />
        </NavLink>
        <Button variant='fab' onClick={() => deleteComparison(photoData._id)} >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div >
  );
};

Component.propTypes = {
  photoData: PropTypes.object,
  deleteComparison: PropTypes.func,
}

// const mapStateToProps = state => ({
//   photosList: getList(state),
// });

const mapDispatchToProps = {
  deleteComparison
};
const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as PhotoCard,
  Component as PhotoCardComponent,
};
