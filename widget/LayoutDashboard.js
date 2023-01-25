import React from 'react'
import Footer from '../components/Footer'
import NavLogin from '../components/NavLogin'

export default function LayoutDashboard({children}) {
  return (
    <>
        <NavLogin/>
          {children}
        <Footer/>        
    </>
  )
}
