import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { FirebaseContext,AuthContext} from "./store/Context";
import firebase from "./Firebase/Config";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
