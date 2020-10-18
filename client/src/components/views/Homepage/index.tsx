import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PhotoActions } from '../../../redux/photos/actions';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const { redirectToRandomPhoto } = PhotoActions;

interface MapDispatchToProps {
  redirectToRandomPhoto: (history: any) => void;
}

type Props = MapDispatchToProps & RouteComponentProps;

export const Homepage = (props: Props): React.ReactElement => {
  const redirect = () => {
    props.redirectToRandomPhoto(props.history);
  };
  useEffect(() => redirect(), []);
  return <></>;
};

const mapDispatchToProps: MapDispatchToProps = {
  redirectToRandomPhoto,
};
export default compose(
  connect(
    null,
    mapDispatchToProps),
  withRouter,
)(Homepage) as React.ComponentType<Props>;