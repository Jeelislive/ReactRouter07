import React from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Layout from './Layout'
import User from './components/User/User'

import Login from './components/Register/Register.jsx'
import StudyMaterialHomepage from './components/Home/Dashbord'

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
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element: <StudyMaterialHomepage />,

      }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
