import { createStore, compose } from "redux";
import reducers from "./Reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageState = localStorage.getItem("state");
const persistedState = JSON.parse(localStorageState ? localStorageState : "{}");

const store = createStore(reducers, persistedState, composeEnhancers());

localStorage.setItem("state", JSON.stringify(store.getState()));
store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

// Read Store State
// store.getState();

//Write to store state
// store.dispatch(action(data));

export default store;
