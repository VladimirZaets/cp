import { combineReducers } from 'redux';
import courses from './reducers/courses';
import groups from './reducers/groups';

export default combineReducers({
    courses,
    groups
})