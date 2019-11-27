import { createStore } from "redux";
import rootReducer from "../reducers/index";

// Zostawiam narzędzia developerskie do wglądu

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

