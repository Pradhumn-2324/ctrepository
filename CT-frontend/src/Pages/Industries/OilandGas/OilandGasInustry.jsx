import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Components/WhyChooseCt'
import ITSolution from './Components/ITSolution'
import Exploration from './Components/Exploration'
import ServiceOption from './Components/ServiceOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const OilandGasInustry = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <WhyChooseCT/>
      <ITSolution/>
      <Exploration/>
      <ServiceOption/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default OilandGasInustry
