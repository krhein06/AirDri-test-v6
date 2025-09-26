import React from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
const LOGO = 'https://www.airdri.com/wp-content/uploads/2024/01/Airdri_Logo.png'
const BRAND = '#29265b'

export default function App(){
  const location = useLocation()
  React.useEffect(()=>{ window.scrollTo({ top:0, behavior:'smooth' }) },[location.pathname])
  const navLinkClass = ({ isActive }) => 'px-2 py-1 font-semibold text-sm ' + (isActive ? 'text-brand' : 'text-brand/80 hover:text-brand')
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm'>
        <div className='container py-4 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'><img src={LOGO} alt='Airdri' className='h-8 w-auto' /></Link>
          <nav className='hidden md:flex items-center gap-4'>
            <NavLink to='/compactdri' className={navLinkClass}>CompactDRI</NavLink>
            <NavLink to='/powerdri' className={navLinkClass}>PowerDRI</NavLink>
            <NavLink to='/comfortdri' className={navLinkClass}>ComfortDRI</NavLink>
            <NavLink to='/steraspace' className={navLinkClass}>SteraSpace</NavLink>
            <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className='bg-white text-gray-500 text-sm py-10 border-t border-gray-100 mt-10'>
        <div className='container flex flex-col md:flex-row items-center justify-between gap-6'>
          <img src={LOGO} alt='Airdri' className='h-8 w-auto' />
          <div>© {new Date().getFullYear()} Airdri. All rights reserved.</div>
        </div>
      </footer>
      <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className='fixed bottom-6 right-6 px-4 py-3 rounded-xl text-white shadow-lg hidden md:inline-flex' style={{ backgroundColor: BRAND }} aria-label='Back to top'>↑ Top</button>
    </div>
  )
}
