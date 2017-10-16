import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import CoursesListPage from './pages/courses/list/CoursesListPage';
import CoursesViewPage from './pages/courses/view/CoursesViewPage';
import CourseCreatePage from './pages/courses/create/CoursesCreatePage';
import GroupsListPage from './pages/groups/list/GroupsListPage';
import GroupsCreatePage from './pages/groups/create/GroupsCreatePage';
import GroupsEditPage from './pages/groups/edit/GroupsEditPage';

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