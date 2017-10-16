import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import CoursesListPage from './components/pages/courses/CoursesListPage';
import CoursesViewPage from './components/pages/courses/CoursesViewPage';
import CourseCreatePage from './components/pages/courses/CoursesCreatePage';
import GroupsListPage from './components/pages/groups/GroupsListPage';
import GroupsCreatePage from './components/pages/groups/GroupsCreatePage/index';
import GroupsEditPage from './components/pages/groups/GroupsEditPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/courses/create' component={CourseCreatePage}/>
        <Route exact path='/courses/:id' component={CoursesViewPage}/>
        <Route exact path='/courses' component={CoursesListPage}/>
        <Route exact path='/groups' component={GroupsListPage}/>
        <Route exact path='/groups/create' component={GroupsCreatePage}/>
        <Route exact path='/groups/:id' component={GroupsEditPage}/>
    </Switch>
)