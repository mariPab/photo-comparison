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
  useEffect(() => props.redirectToRandomPhoto(props.history), []);
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
