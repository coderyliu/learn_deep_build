// 1. 导入并使用markdown文件
import code from "./learn.md";

// 2. 导入并使用css文件
import "./style.css";

// 3. 导入并使用高亮文件
import "highlight.js/styles/default.css"

document.body.innerHTML = code;

const message = "hello webpack";

console.log(message);
export default message;

