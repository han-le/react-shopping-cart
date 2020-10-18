import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//=====Bootstrap
// css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// js
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";
import "../node_modules/popper.js/dist/umd/popper.min";

//=====REDUX
import { createStore } from "redux"; //Tao store from redux
import { Provider } from "react-redux"; //Cai nay de ket noi react va redux lai voi nhau. Provider se wrap <App/>
import rootReducer from "./redux/reducers";

//Tao 1 Store, dat ten bien gi cung duoc
const store = createStore(
  //Ham nay vua moi import vao
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //for Chrome extension: https://github.com/zalmoxisus/redux-devtools-extension
);
//=====end of redux

ReactDOM.render(
  // nội dung in ra html
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  // vị trí in ra html
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
