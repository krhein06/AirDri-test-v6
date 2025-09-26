import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import CompactDRI from './routes/CompactDRI.jsx'
import PowerDRI from './routes/PowerDRI.jsx'
import ComfortDRI from './routes/ComfortDRI.jsx'
import SteraSpace from './routes/SteraSpace.jsx'
import Contact from './routes/Contact.jsx'

const router = createBrowserRouter([
  { element: <App />, children: [
    { path: '/', element: <Home /> },
    { path: '/compactdri', element: <CompactDRI /> },
    { path: '/powerdri', element: <PowerDRI /> },
    { path: '/comfortdri', element: <ComfortDRI /> },
    { path: '/steraspace', element: <SteraSpace /> },
    { path: '/contact', element: <Contact /> },
  ]}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
