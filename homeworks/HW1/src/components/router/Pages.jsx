import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';

import { LoginPage } from '../../pages/loginPage/LoginPage'
import { CoursesPage } from '../../pages/coursePage/CoursesPage'
import { CourseManipulatePage } from '../../pages/editCoursePage/CourseManipulatePage'

export const Pages = (props) => {
    return( <Switch>
                <Route exact path="/" component={CoursesPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/courses" component={CoursesPage}/>
                <Route exact path="/courses/add" component={CourseManipulatePage}/>
                <Route exact path="/courses/:id" component={CourseManipulatePage}/>
            </Switch>
          );
} 