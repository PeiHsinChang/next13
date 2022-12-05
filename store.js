// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducer";
// import { print1, print2, print3 } from "./exampleAddons/middleware";

// const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// Pass enhancer as the second arg, since there's no preloadedState
// const store = createStore(rootReducer, middlewareEnhancer);

// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const INITIAL_STATE = {
  state: 0,
  data: {},
  // return {...state};
};

function counter(state = INITIAL_STATE, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      console.log("INCREMENT", action);
      return state + 1;
    case "DECREMENT":
      console.log("DECREMENT", action);
      return state - 1;
    case "SAVE_API_DATA":
      console.log("SAVE_API_DATA", action);
      const data = action.result;
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}

const saveApiData = (state, action) => {
  console.log("SAVE_API_DATA", action, "state", state);

  if (typeof state === "undefined") {
    return "";
  }
  switch (action.type) {
    case "SAVE_API_DATA":
      console.log("SAVE_API_DATA", action, "state", state);
      return state + 1;

    default:
      return state;
  }
};

const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counter: counter,
      // saveApiData: saveApiData
    },
    preloadedState,
  });
};

let store;
export const initialiseStore = (preloadedState) => {
  console.log("initialiseStore");
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

// const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
// export const wrapper = createWrapper(makeStore, { debug: true });

export default createStore;
