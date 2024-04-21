import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter}from 'react-router-dom'
import { AuthProvider } from './context/auth.jsx'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
    <BrowserRouter>
     <StoreContextProvider>

     <App />

     </StoreContextProvider>
      

</BrowserRouter>

</AuthProvider>
  
  
)
