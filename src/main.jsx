import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login/login'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Layout from './Layout'
import User from './components/User/User'
import Register from './components/Register/Register.jsx'
import Dashbord from './components/Home/Dashbord'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "about",
        element: <About />
      },
      {
        path: "contactus",
        element: <ContactUs />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "dashboard",
        element: <Dashbord />,

      },
      {
        path: "login",
        element: <Login />,

      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
