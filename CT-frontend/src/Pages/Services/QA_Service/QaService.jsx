import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import TypesOfSoftwareInCT from './Component/TypesOfSoftwareInCT'
import TestingType from './Component/TestingType'
import QASoftWareService from './Component/QASoftWareService'
import TechToolsHeader from './Component/TechTools/TechToolsHeader'
import TechTools from './Component/TechTools/TechTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../AI/Components/FAQ'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import WhyChooseCT from './Component/WhyChooseCT'

const QaService = () => {

    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <TypesOfSoftwareInCT/>
      <WhyChooseCT/>
      <TestingType/>
      <QASoftWareService/>
      <TechToolsHeader/>
      <TechTools/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default QaService
