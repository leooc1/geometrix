import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Algebric from './components/routes/Algebric'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/routes/Login'

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
    path: '/newto',
    element: <Algebric/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
