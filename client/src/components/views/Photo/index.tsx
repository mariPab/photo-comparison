import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { getPhoto } from '../../../redux/photos/reducer';
import { PhotoPage } from './StyledPhoto.style';
import BeforeAfterSlider from 'react-before-after-slider';
import { PhotoActions } from '../../../redux/photos/actions';
import { IMAGES_URL } from '../../../config';
import { PhotoInterface } from '../../../interfaces/photos';
import { RootState } from '../../../redux/store';
import { GetPhotoData } from '../../../redux/photos/types';

const { getPhotoData } = PhotoActions;

interface MapStateToProps {
  photoData: PhotoInterface;
}
interface MapDispatchToProps {
  getPhotoData: (id: string) => GetPhotoData;
}
interface MatchProps {
  id: string;
}
type Props = MapStateToProps & MapDispatchToProps & RouteComponentProps<MatchProps>;

class Component extends React.Component<Props> {
  componentDidMount(): void {
    this.props.getPhotoData(this.props.match.params.id);
  }
  render(): React.ReactElement {
    const { photoData } = this.props;
    return (
      <PhotoPage>
        <h3>{photoData.title}</h3>
        <BeforeAfterSlider
          before={`${IMAGES_URL}/${photoData.images.before}`}
          after={`${IMAGES_URL}/${photoData.images.after}`}
          width={photoData.dimensions.width}
          height={photoData.dimensions.height}
        />
        <p>{photoData.description}</p>
      </PhotoPage>
    );
  }
}
const mapStateToProps = (state: RootState): MapStateToProps => ({
  photoData: getPhoto(state.Photos),
});
const mapDispatchToProps: MapDispatchToProps = {
  getPhotoData,
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps)(Component);
export {
  Container as Photo,
  Component as PhotoComponent,
};
