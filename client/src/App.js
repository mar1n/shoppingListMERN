import React from "react";
import AppNavbar from "./components/AppNavbar";
import { Provider } from "react-redux";
import store from "./store";

import ShoppingList from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
