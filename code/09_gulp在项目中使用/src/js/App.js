import React, { memo } from "react";
import { useRoutes } from "react-router-dom";

import router from "./router";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const App = memo(() => {
  return (
    <div>
      <Header></Header>
      {useRoutes(router)}
      <Footer></Footer>
    </div>
  );
});

export default App;
