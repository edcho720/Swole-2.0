import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from "react-router-dom"

import css from './style.css';

// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <App />
//         </Router>
//     </React.StrictMode>
//     ,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </React.StrictMode>
)