import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default function Layout({children, home}) {
  return (
    <div className='container mx-auto flex-row justify-around px-20'>
    <Navigation/> 
        {home && <Banner /> }
        <div className='container mx-auto '>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
