import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPhoto } from '../../../redux/photos/reducer';
import styles from './Photo.module.scss';
import BeforeAfterSlider from 'react-before-after-slider';
import { PhotoActions } from '../../../redux/photos/actions';
import { IMAGES_URL } from '../../../config';

const { getPhotoData } = PhotoActions;

class Component extends React.Component {

  static propTypes = {
    photoData: PropTypes.object,
    loadPhotoDataRequest: PropTypes.func,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }
  componentDidMount() {
    this.props.getPhotoData(this.props.match.params.id);
  }

  render() {
    const { photoData } = this.props;
    return (
      photoData && photoData._id ? (
        <div className={styles.wrapper}>
          <h3>{photoData.title}</h3>
          <BeforeAfterSlider
            before={`${IMAGES_URL}/${photoData.images.before}`}
            after={`${IMAGES_URL}/${photoData.images.after}`}
            width={photoData.dimensions.width}
            height={photoData.dimensions.height}
          />
          <p>{photoData.description}</p>
        </div>
      ) : null
    );
  }
}

const mapStateToProps = state => ({
  photoData: getPhoto(state),
});

const mapDispatchToProps = {
  getPhotoData
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Photo,
  Container as Photo,
  Component as PhotoComponent,
};
