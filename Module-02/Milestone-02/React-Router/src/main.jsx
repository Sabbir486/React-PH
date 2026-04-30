import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/hello",
    element: <div>Hello World</div>,
  },

  {
    path: "about",
    element: <div>About me here</div>
  },

  {
    path: "blogs",
    element: <div>All Blogs are available here</div>
  },

  {
    path: 'app',
    Component: App
  },

  {
    path: 'app2',
    element: <App></App>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
