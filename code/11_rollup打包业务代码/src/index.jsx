import {createRoot} from 'react-dom/client'
// import { HashRouter } from 'react-router-dom'

import App from './App.jsx'

import './assets/css/index.css'

const root=createRoot(document.querySelector('#root'))
root.render(
    // <HashRouter>
     <App></App>
    // </HashRouter>
)