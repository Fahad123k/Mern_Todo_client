import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { Providr } from "react-redux";
import { store } from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Providr store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providr>
  // </StrictMode>
)
