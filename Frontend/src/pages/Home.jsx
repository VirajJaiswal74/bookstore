import React from 'react'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Freebook } from '../components/Freebook'

export const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
  )
}
