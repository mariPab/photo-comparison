import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
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
export const PhotoCard = ({ photoData, deleteComparison }: Props): React.ReactElement => (
  <PhotoCardRoot>
    <ImageWrapper>
      {photoData.images.before ?
        <img
          src={`data:${photoData.images.before.contentType};base64, ${photoData.images.before.data}`}
          alt={photoData.title}
        /> : null}
    </ImageWrapper>
    <InfoWrapper>
      <NavLink className="title" exact to={`/photos/${photoData._id}`}>
        {photoData.title}
      </NavLink>
      <NavLink className="fab" exact to={`/admin/edit/${photoData._id}`}>
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
const mapDispatchToProps: MapDispatchToProps = {
  deleteComparison,
};
export default connect(
  null,
  mapDispatchToProps
)(PhotoCard);
