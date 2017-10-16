import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CoursesListPage from './pages/courses/list/CoursesListPage';
import CoursesViewPage from './pages/courses/view/CoursesViewPage';
import CourseCreatePage from './pages/courses/create/CoursesCreatePage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/courses/create' component={CourseCreatePage}/>
        <Route exact path='/courses/:id' component={CoursesViewPage}/>
        <Route exact path='/courses' component={CoursesListPage}/>
    </Switch>
)