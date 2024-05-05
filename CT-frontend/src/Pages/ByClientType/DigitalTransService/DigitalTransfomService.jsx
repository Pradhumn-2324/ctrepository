import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DigitalTranService from './Component/DigitalTranService'
import IndustryService from './Component/IndustryService'
import UnfoldDigitalTrans from './Component/UnfoldDigitalTrans'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const DigitalTransfomService = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <DigitalTranService/>
      <IndustryService/>
      <UnfoldDigitalTrans/>
      <ReliableToolsHeading/>
      <ReliableTools/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default DigitalTransfomService
