import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
import HomePage from './pages/HomePage/HomePage'
import JobsPage from './pages/JobsPage/JobsPage'
import ApprenticeshipsPage from './pages/ApprenticeshipsPage/ApprenticeshipsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/', 
    element: <HomePage/>,
    errorElement: <ErrorPage/>, 
    children: [
      {
        path: 'en/about',
        element: <AboutPage/>
      }, 
      {
        path: 'en/jobs',
        element: <JobsPage/>
      },
      {
        path: 'en/ausbuilding/', 
        element: <ApprenticeshipsPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
