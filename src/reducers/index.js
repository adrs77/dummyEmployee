import {
  SAVE_EMPLOYEES,
  SAVE_IDS,
  NEW_USER,
} from "../constants/action-types";

const initialState = {
  savedEmployees: "",
  savedIds: "",
  initFetch: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_EMPLOYEES:
      return Object.assign({}, state, { savedEmployees: action.payload });
    case SAVE_IDS:
      return Object.assign({}, state, { savedIds: action.payload });
      case NEW_USER:
        return Object.assign({}, state, { initFetch: action.payload });
    default:
      break;
  }

  return state;
}

export default rootReducer;
