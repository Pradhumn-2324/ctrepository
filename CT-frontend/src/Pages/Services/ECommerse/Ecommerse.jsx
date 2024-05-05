import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ExploreConsuting from './Component/ExploreConsuting'
import WhyChooseCT from './Component/WhyChooseCT'
import EcommerseDevService from './Component/EcommerseDevService'
import OurTechHeader from './Component/OurTech/OurTechHeader'
import OurTech from './Component/OurTech/OurTech'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Ecommerse = () => {

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <ExploreConsuting/>
      <WhyChooseCT/>
      <EcommerseDevService/>
      <OurTechHeader/>
      <OurTech/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>

    </div>
  )
}

export default Ecommerse
