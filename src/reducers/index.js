import {SAVE_EMPLOYEES} from '../constants/action-type'


const initialState = {
   savedEmployees: ""
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case SAVE_EMPLOYEES:
            return Object.assign({}, state, {savedEmployees: action.payload})
        default:
            break;
    }
    
    return state;
}

export default rootReducer;