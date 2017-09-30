import api from '../api/mockCoursesAPI';
import { LOAD_COURSES_SUCCESS } from '../constant/types';
import { LOAD_COURSE_SUCCESS } from '../constant/types';
import { ADD_COURSE_PLAN_ITEM } from '../constant/types';

export function loadCourses() {
    return dispatch => {
        return api.getAllCourses()
            .then(courses => {
                dispatch({
                    type: LOAD_COURSES_SUCCESS,
                    courses
                });
            }).catch(error => {
                throw error;
            })
    }
}

export function loadCourse (id) {
    return dispatch => {
        return api.getCourse(id)
            .then(course => {
                dispatch({
                    type: LOAD_COURSE_SUCCESS,
                    course
                });
            }).catch(error => {
                throw error;
            })
    }
}

export function saveCourse() {
    
}