import { LOAD_COURSES_SUCCESS, LOAD_COURSE_SUCCESS } from '../constant/types';
import defaultState from '../constant/defaultState';

export default function courses(state = defaultState.courses, action) {
    switch (action.type) {
        case LOAD_COURSE_SUCCESS:
            return state.findIndex(item => item.id === action.course.id) > -1 ?
                state.map(
                    item => item.id === action.course.id ?
                        action.course :
                        item
                ) :
                [
                    ...state,
                    action.course
                ];
        case LOAD_COURSES_SUCCESS:
            return action.courses;
        default: return state;
    }
}