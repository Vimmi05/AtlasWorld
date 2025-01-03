import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './Components/Layout/AppLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import ErrorPage from './Pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/country",
        element: <Country/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      }
  ]}
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
