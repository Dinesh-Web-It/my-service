import React from 'react'
import './Home.css'
import FrontContent from '../Components/FrontContent.jsx'
import ServiceImage from '../Components/ServiceImage.jsx'
import ServiceContent from '../Components/ServiceContent.jsx'
import Footer from '../Components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <FrontContent />
      <ServiceImage />
      <ServiceContent />
      <Footer />
    </div>
  )
}

export default Home