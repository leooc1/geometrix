import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Algebric from './components/routes/Algebric'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/routes/login/Login'
import Cadastro from './components/routes/login/Cadastro'
import Newton from './components/Newton'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/cadastro',
    element: <Cadastro/>
  },
  {
    path: '/newto',
    element: <Newton/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
