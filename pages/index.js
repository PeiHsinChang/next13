import React, { useState } from "react";
import { createStore, applyMiddleware } from "redux";

function counter(state, action) {
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
    default:
      return state;
  }
}

var store = createStore(counter);

function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    store.dispatch({ type: "INCREMENT" });
  };

  // Action: code that causes an update to the state when something happens
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
    store.dispatch({ type: "DECREMENT" });
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default () => {
  return (
    <>
      <div>123</div>
      <Counter />
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("getServerSideProps_index");
  return {
    props: {}, // will be passed to the page component as props
  };
}
