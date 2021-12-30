import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
