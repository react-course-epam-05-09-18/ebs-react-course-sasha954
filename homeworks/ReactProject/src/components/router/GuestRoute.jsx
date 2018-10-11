import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const GuestRouteComponent = ({ isAuthenticated, component: Component, ...rest }) => {
  return <Route { ...rest } render={ props => !isAuthenticated ? <Component { ...props } /> : <Redirect to="/courses" />}/>
}

GuestRouteComponent.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.user.token
  }
}

export const GuestRoute = connect(mapStateToProps)(GuestRouteComponent);