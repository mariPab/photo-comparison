import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../../redux/photos/reducer';
import { PhotoActions } from '../../../redux/photos/actions';
import PhotoCard from '../../features/PhotoCard';
import { Button } from '../../UI/Button';
import { PhotoInterface } from '../../../interfaces/photos';
import { RootState } from '../../../redux/store';
import { GetPhotosList } from '../../../redux/photos/types';
import { AdminContainer, ManageSection, NavLink, ActionsContainer } from './Admin.style';
const { getAllPhotos } = PhotoActions;

interface MapStateToProps {
  photosList: PhotoInterface[];
}
interface MapDispatchToProps {
  getAllPhotos: () => GetPhotosList;
}
type Props = MapStateToProps & MapDispatchToProps;

export class Admin extends React.Component<Props> {
  componentDidMount(): void {
    this.props.getAllPhotos();
  }
  render(): React.ReactElement {
    return (
      <AdminContainer>
        <ManageSection>
          {this.props.photosList.map(elem => (
            <PhotoCard key={elem._id} photoData={elem} />
          ))}
        </ManageSection>
        <ActionsContainer>
          <NavLink exact to={`/admin/submit`}>
            <Button>
              Dodaj nowe porównanie
            </Button>
          </NavLink>
        </ActionsContainer>
      </AdminContainer>
    );
  }
}
const mapStateToProps = (state: RootState): MapStateToProps => ({
  photosList: getList(state.Photos),
});
const mapDispatchToProps: MapDispatchToProps = {
  getAllPhotos,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
