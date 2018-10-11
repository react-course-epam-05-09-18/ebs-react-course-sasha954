import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export const PrivateRouteComponent = ({isAuthenticated, component: Component, ...rest}) => {
  return(
    <Route {...rest} render={(props) => {
        return isAuthenticated ? <Component {...props} /> : <Redirect to={{pathname:'/login'}} />
      }}/>
  )
}

PrivateRouteComponent.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.user.token
  }
} 

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);