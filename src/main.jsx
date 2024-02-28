import React from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Layout from './Layout'
import User from './components/User/User'
import Github from './components/Github/Github'
import { githubInfoLoader } from './components/Github/Github'
import Login from './components/Login/Login.jsx'
import StudyMaterialHomepage from './components/Home/MainHome'

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
        path: "github",
        element: <Github />,
        loader: githubInfoLoader, // Move this line inside the object
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
