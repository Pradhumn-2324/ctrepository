import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import OurServiceScope from './Component/OurServiceScope'
import SoftConPartenerUp from './Component/SoftConPartenerUp'
import SoftDevProjectMan from './Component/SoftDevProjectMan'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ/Faq'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
const SoftwareConsulting = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <OurPartener />
      <OurServiceScope />
      <SoftConPartenerUp />
      <SoftDevProjectMan />
      <ReliableToolsHeading />
      <ReliableTools />
      <CaseStudies />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareConsulting
