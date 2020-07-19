import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { IMAGES_URL } from '../../../config';
import { Button } from '../../UI/Button';
import { PhotoActions } from '../../../redux/photos/actions';
import { PhotoInterface } from '../../../interfaces/photos';
import { DeleteComparison } from '../../../redux/photos/types';
import { PhotoCardRoot, ImageWrapper, InfoWrapper } from './StyledPhotoCard.style';
const { deleteComparison } = PhotoActions;

interface MapDispatchToProps {
  deleteComparison: (id: string) => DeleteComparison;
}
interface Props extends MapDispatchToProps {
  photoData: PhotoInterface;
}
const Component = ({ photoData, deleteComparison }: Props): React.ReactElement => (
  <PhotoCardRoot>
    <ImageWrapper>
      <img
        src={`${IMAGES_URL}/${photoData.images.before}`}
        alt={photoData.title}
      />
    </ImageWrapper>
    <InfoWrapper>
      <p>{photoData.title}</p>
      <NavLink exact to={`/admin/edit/${photoData._id}`}>
        <FontAwesomeIcon icon={faPen} />
      </NavLink>
      <Button
        variant='fab'
        onClick={deleteComparison.bind(null, photoData._id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </InfoWrapper>
  </PhotoCardRoot>
);
const mapDispatchToProps = {
  deleteComparison,
};
const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export {
  Container as PhotoCard,
  Component as PhotoCardComponent,
};
