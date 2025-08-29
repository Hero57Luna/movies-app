import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegiesterPage from './pages/regiester.jsx'
import Error404 from './pages/error404.jsx'
import Movies from './pages/movies.jsx'
import Home from './pages/home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error404/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/regiester",
    element: <RegiesterPage/>
  },
  {
    path: "/movies",
    element: <Movies/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
