import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Algebric from './components/routes/Algebric'
import Login from './components/routes/login/Login'
import Cadastro from './components/routes/login/Cadastro'
import Cartesian from './components/Cartesian'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CArtesian from './components/Cartesian'

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
    element: <Algebric/>
  },
  {
    path: '/cartesian',
    element: <Cartesian/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
