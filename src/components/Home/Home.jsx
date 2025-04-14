import React from 'react'
import AboutSection from '../About/About'
import HeroSection from '../Hero/Hero'
import CarClaimSection from '../Claim/Claim'
import CarServicePopup from '../PopUp/PopUp'
import ScholarshipPopup from '../PopUp/PopUp'


const Home = () => {
  return (
    <div>
     
        <HeroSection />
        <CarClaimSection />
        <AboutSection/>
        <CarServicePopup />
    </div>
  )
}

export default Home
