import api from '../api/mockGroupsAPI';
import { LOAD_GROUPS_SUCCESS } from '../constant/types';

export function loadGroups() {
    return dispatch => {
        return api.getAllGroups()
            .then(groups => {
                dispatch({
                    type: LOAD_GROUPS_SUCCESS,
                    groups
                });
            }).catch(error => {
                throw error;
            })
    }
}
