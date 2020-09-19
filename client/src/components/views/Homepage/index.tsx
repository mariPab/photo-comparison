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

const Component = (props: Props): React.ReactElement => {
  const redirect = () => {
    props.redirectToRandomPhoto(props.history);
  };
  useEffect(() => redirect(), []);
  return <></>;
};

const mapDispatchToProps: MapDispatchToProps = {
  redirectToRandomPhoto,
};
const Container = compose(
  connect(
    null,
    mapDispatchToProps),
  withRouter,
)(Component) as React.ComponentType<Props>;

export {
  Container as Homepage,
  Component as HomepageComponent,
};
