import React from 'react'
import Navbar from '../Pages/Navbar'
import Home from '../Pages/Home'
import Details from './Details'
import Detail1 from '../Pages/Detail1'
import Footer from './Footer'
import About from '../Pages/About'
import Testimonials from './Testimonials'

const Main = () => {
    return (
    <div>
        <Navbar/>
         <Home/>
         <About/>
        <Details/>
        <Testimonials/>
        <Footer/>
       
            </div>

    )
}

export default Main
