import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import CoursesListPage from './components/pages/courses/CoursesListPage';
import CoursesViewPage from './components/pages/courses/CoursesViewPage';
import CourseCreatePage from './components/pages/courses/CoursesCreatePage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/courses/create' component={CourseCreatePage}/>
        <Route exact path='/courses/:id' component={CoursesViewPage}/>
        <Route exact path='/courses' component={CoursesListPage}/>
    </Switch>
)