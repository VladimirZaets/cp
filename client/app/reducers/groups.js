import { LOAD_GROUPS_SUCCESS } from '../constant/types';
import defaultState from '../constant/defaultState';

export default function groups(state = defaultState.groups, action) {
    switch (action.type) {
        case LOAD_GROUPS_SUCCESS:
            return action.groups;
        default: return state;
    }
}