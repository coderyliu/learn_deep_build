import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';

import App from './App.js'

const root=ReactDOM.createRoot(document.querySelector('#content'))
root.render(
    <HashRouter>
     <App></App>
    </HashRouter>
)
