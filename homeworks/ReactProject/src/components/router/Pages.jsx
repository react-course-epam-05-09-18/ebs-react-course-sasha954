import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';

import { LoginPage } from '../../pages/loginPage/LoginPage'
import { CoursesPage } from '../../pages/coursePage/CoursesPage'
import { CourseManipulatePage } from '../../pages/editCoursePage/CourseManipulatePage'
import { PageNotFound } from '../../pages/notFoundPage/PageNotFound'
import PrivateCourses from '../hoc/PrivateCourses'

export default () => {
    return( <Switch>
                <Route exact path="/" component={CoursesPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route exact path="/courses" component={PrivateCourses(CoursesPage)}/>
                    <Route path="/courses/add" component={CourseManipulatePage}/>
                    <Route path="/courses/:id" component={CourseManipulatePage}/>
                <Route component={PageNotFound}/>
            </Switch>
    );
} 

