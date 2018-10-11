import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { GuestRoute } from './GuestRoute';

import { asyncComponent } from '../asyncComponent';

const importAsyncModule = (getModule) => {
  return asyncComponent(() => import('../../pages').then(getModule))
}

const LoginPage = importAsyncModule(module => module.LoginPage);
const CoursesPage = importAsyncModule(module => module.CoursesPage);
const CourseManipulatePage = importAsyncModule(module => module.CourseManipulatePage);
const PageNotFound = importAsyncModule(module => module.PageNotFound);
const TestPage = importAsyncModule(module => module.TestPage);

export const Pages = (props) => {
  return( <Switch>
      <PrivateRoute exact path="/" component={CoursesPage}/>
      <GuestRoute path="/login" component={LoginPage}/>
      <Route path="/test" component={TestPage}/>
      <PrivateRoute exact path="/courses"  component={CoursesPage}/>
      <PrivateRoute path="/courses/add" component={CourseManipulatePage}/>
      <PrivateRoute path="/courses/:id" component={CourseManipulatePage}/>
      <Route component={PageNotFound}/>
    </Switch>
  );
} 
