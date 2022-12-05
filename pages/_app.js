import { Provider, useStore } from "react-redux";
import store, { wrapper, initialiseStore } from "../store";
import withReduxSaga from "next-redux-saga";

function EZApp({ Component, pageProps }) {
  console.log('"EZApp"');
  console.log(pageProps);

  const reduxStore = initialiseStore(pageProps.initialReduxState);
  console.log("wwww", reduxStore.getState());

  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default EZApp;
// export default wrapper.withRedux(EZApp);
