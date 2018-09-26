import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';

import {PrivateRoute} from './PrivateRoute';
import {LoginPage, 
        CoursesPageWithData,
        CourseManipulatePage, 
        PageNotFound} from '../../pages';

export const Pages = (props) => {
    return( <Switch>
                <PrivateRoute path="/" component={CoursesPageWithData}/>
                <Route path="/login" component={LoginPage}/>
                <PrivateRoute exact path="/courses"  component={CoursesPageWithData}/>
                <PrivateRoute path="/courses/add" component={CourseManipulatePage}/>
                <PrivateRoute path="/courses/:id" component={CourseManipulatePage}/>
                <Route component={PageNotFound}/>
            </Switch>
    );
} 
