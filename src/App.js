import React from "react";
import Home from "./pages/home";

// 倒入我们的 store
import store from "./store";

import { Provider } from "react-redux";

import ComA from "./pages/ComA";
import ComB from "./pages/ComB";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
        <ComA/>
        <ComB zhao="zhao"/>
      </div>
    </Provider>
  );
}

export default App;
