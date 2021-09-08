import { combineReducers } from "redux";
import { createStore, applyMiddleware, Store } from "redux";
import reposReducer, { DispatchType } from "./reposReducer";
import { userReducer } from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  repos: reposReducer,
  user: userReducer,
});

export const store: Store & {
  dispatch: DispatchType
} = createStore(rootReducer, applyMiddleware(thunk));