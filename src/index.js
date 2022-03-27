import ReactDOM from "react-dom";
import "./index.scss";

import { Provider } from "react-redux";
import store from "./store/index";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
