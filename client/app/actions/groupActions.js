import api from '../api/mockGroupsAPI';
import { 
    LOAD_GROUPS_SUCCESS,
    CREATE_GROUP_SUCCESS
} from '../constant/types';

export function loadGroups() {
    return dispatch => 
        api.getAllGroups()
            .then(groups => 
                dispatch({
                    type: LOAD_GROUPS_SUCCESS,
                    groups
                })
            ).catch(error => {
                throw error;
            });
}

export function createGroup(group) {
    return dispatch => 
        api.createGroup(group)
            .then(group => 
                dispatch({
                    type: CREATE_GROUP_SUCCESS,
                    group
                })
            ).catch(error => {
                throw error;
            });
}
