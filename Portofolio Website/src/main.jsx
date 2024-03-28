import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Matrix from './Matrix.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('top')).render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('matrix')).render(
  <React.StrictMode>
    <Matrix></Matrix>
  </React.StrictMode>,
)