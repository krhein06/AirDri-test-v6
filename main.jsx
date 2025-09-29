import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import AppLayout from './routes/AppLayout'
import HomePage from './routes/HomePage'
import CompactDRI from './routes/CompactDRI'
import PowerDRI from './routes/PowerDRI'
import ComfortDRI from './routes/ComfortDRI'
import SteraSpace from './routes/SteraSpace'
import Contact from './routes/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/compactdri' element={<CompactDRI />} />
          <Route path='/powerdri' element={<PowerDRI />} />
          <Route path='/comfortdri' element={<ComfortDRI />} />
          <Route path='/steraspace' element={<SteraSpace />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
