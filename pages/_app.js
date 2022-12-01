import { Provider } from "react-redux";
// import store from "../store";

export default function EZApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}
