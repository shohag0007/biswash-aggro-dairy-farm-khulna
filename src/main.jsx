import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './components/Home/Home.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import SellItems from './SellItems/SellItems.jsx';
import Visitors from './components/Visitors/Visitors.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
     },
     {
      path: "/home",
      element: <Home></Home>,
     },
    
     {
      path: "/about",
      element: <About></About>,
     },
     {
      path: "/contact",
      element: <Contact></Contact>,
     },
     {
      path: "/sellItems",
      element: <SellItems></SellItems>,
     },
     {
      path: "/visitors",
      element: <Visitors></Visitors>,
      
     }

    
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
