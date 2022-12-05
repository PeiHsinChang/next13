import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialiseStore } from "../store";
// import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

// function counter(state, action) {
//   if (typeof state === "undefined") {
//     return 0;
//   }

//   switch (action.type) {
//     case "INCREMENT":
//       console.log("INCREMENT", action);
//       return state + 1;
//     case "DECREMENT":
//       console.log("DECREMENT", action);

//       return state - 1;
//     default:
//       return state;
//   }
// }

// var store = configureStore(counter);

function Counter() {
  const dispatch = useDispatch();

  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
    dispatch({ type: "INCREMENT" });
  };

  // Action: code that causes an update to the state when something happens
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
    dispatch({ type: "DECREMENT" });
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

const Index = () => {
  return (
    <>
      <div>123</div>
      <Counter />
    </>
  );
};
export default Index;

export async function getServerSideProps(context) {
  console.log("getServerSideProps_index");
  const reduxStore = initialiseStore({});
  const { dispatch } = reduxStore;

  // const { store } = await context;

  // const dispatch = store.dispatch;
  // console.log("getServerSideProps_index_store", store);

  await fetch(
    "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        console.log("success");
        dispatch({ type: "SAVE_API_DATA", result });
        // this.setState({
        //   isLoaded: true,
        //   items: result.items,
        // });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("0000");
        console.log(error);
      }
    );

  return {
    props: {
      // ...context,
      initialReduxState: reduxStore.getState(),
    }, // will be passed to the page component as props
  };
}
