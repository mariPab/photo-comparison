import React from 'react';
import { connect } from 'react-redux';
import { getList } from '../../../redux/photos/reducer';
import { Nav } from '../../layout/Nav';
import { PhotoActions } from '../../../redux/photos/actions';
import { PhotoCard } from '../../features/PhotoCard';
import { PhotoInterface } from '../../../interfaces/photos';
import { RootState } from '../../../redux/store';
import { GetPhotosList } from '../../../redux/photos/types';
import { AdminContainer, LinksPanel, ManageSection, NavLink } from './StyledAdmin.style';
const { getAllPhotos } = PhotoActions;

interface MapStateToProps {
  photosList: PhotoInterface[];
}
interface MapDispatchToProps {
  getAllPhotos: () => GetPhotosList;
}
type Props = MapStateToProps & MapDispatchToProps;

class Component extends React.Component<Props> {
  componentDidMount(): void {
    this.props.getAllPhotos();
  }
  render(): React.ReactElement {
    return (
      <AdminContainer>
        <Nav linksList={this.props.photosList} />
        <LinksPanel>
          <NavLink exact to={`/admin/submit`}>
            Dodaj nowe porównanie
          </NavLink>
          <ManageSection>
            {this.props.photosList.map(elem => (
              <PhotoCard key={elem._id} photoData={elem} />
            ))}
          </ManageSection>
        </LinksPanel>
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
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
export {
  Container as Admin,
  Component as AdminComponent,
};
