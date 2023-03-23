import React, { memo } from "react";
// import { useRoutes } from "react-router-dom";

// import routes from "./router/index.jsx";
import Home from './views/home/index.jsx'

const App = memo(() => {
  return (
    <div>
      <div className="header"></div>
      <Home></Home>
      {/* {useRoutes(routes)} */}
      <div className="footer"></div>
    </div>
  );
});

export default App;
