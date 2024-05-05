import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalModule from './Components/FunctionalModule'
import WhyChooseCT from './Components/WhyChooseCT'
import KeyCooperation from './Components/KeyCooperation'
import HRSoftService from './Components/HRSoftService'
import TechnologyHeader from './Components/TechnologyStack/TechnologyHeader'
import Technologies from './Components/TechnologyStack/Technologies'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const HRSoftwareDevelopment = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <FunctionalModule/>
      <WhyChooseCT/>
      <KeyCooperation/>
      <HRSoftService/>
      <TechnologyHeader/>
      <Technologies/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default HRSoftwareDevelopment
