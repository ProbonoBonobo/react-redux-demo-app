import { ACTIVATE_CHARACTER } from './actions';

const initialState = 0;

export default (state = initialState, action => {
    switch (action.type) {
        case ACTIVATE_CHARACTER:
            action.profile['active'] = true;
            return action.profile;
        default:
            action.profile['active'] = false;
            return state;
    }
});
/**
 * Created by kz on 4/29/17.
 */
