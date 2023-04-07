import { createContext, useReducer } from "react";
import { SET_USER_INFO } from "./ActionTypes";

//initial state
const initialState = {
  user: [],
};

// create context
const Context = createContext({});

// create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    default:
      return state;
  }
};

// create Provider component (High order component)
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
