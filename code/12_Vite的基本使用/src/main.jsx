// ?测试react jsx语法
import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./react/App.jsx";

const root = createRoot(document.querySelector("#root"));
root.render(<App></App>);
