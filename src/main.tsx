import React from 'react'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
