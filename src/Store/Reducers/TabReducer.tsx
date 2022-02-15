import { Action } from "../../Utils/GlobalTypes";

const defaultState = 0;

const TabReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case "SET_TAB":
      return action.payload;
    default:
      return state;
  }
};

export default TabReducer;
