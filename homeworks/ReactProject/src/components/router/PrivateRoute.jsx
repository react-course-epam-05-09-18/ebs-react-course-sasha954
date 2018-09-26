import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null && token.length > 10;
}

export const PrivateRoute = ({component: Component, ...rest}) => {
    return(
    <Route {...rest} render={(props) => {
            return isAuthenticated() === true ? <Component {...props} /> : <Redirect to={{pathname:'/login'}} />
            }
        }/>
)
}