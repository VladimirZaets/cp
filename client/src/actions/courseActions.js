import api from '../api/mockCoursesAPI';
import { LOAD_COURSES_SUCCESS, LOAD_COURSE_SUCCESS } from '../constant/types';

export const loadCourses = () => dispatch =>
    api.getAllCourses()
        .then(courses => dispatch({
            type: LOAD_COURSES_SUCCESS,
            courses
        }))
        .catch(error => {
            throw error;
        });

export const loadCourse = id => dispatch =>
    api.getCourse(id)
        .then(course => dispatch({
            type: LOAD_COURSE_SUCCESS,
            course
        }))
        .catch(error => {
            throw error;
        });

export const saveCourse = () => {

};
