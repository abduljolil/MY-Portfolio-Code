import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout';
import About from './Pages/Home/About';
import Home from './Pages/Home';
import Contact from './Pages/Home/Contact';
import MySkills from './Pages/Home/MySkills';
import MyProjects from './Pages/Home/MyProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
      path:'contact',
      element:<Contact></Contact>
      },
      {
        path:'skills',
        element:<MySkills></MySkills>
      },
      {
        path:'projects',
        element:<MyProjects></MyProjects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
