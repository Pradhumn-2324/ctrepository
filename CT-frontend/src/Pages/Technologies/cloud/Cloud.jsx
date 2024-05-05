import React, { useEffect } from 'react'
import CloudHero from './cloudhero/CloudHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyCT from './whyCT/WhyCT'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import ScopeOfCTCloud from './scopeofCTCloud/ScopeOfCTCloud'
import AttributesOfOurApp from './attributes/AttributesOfOurApp'
const Cloud = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <CloudHero />
      <OurPartener />
      <WhyCT />
      <ScopeOfCTCloud />
      <AttributesOfOurApp />
      <ReliableToolsHeading />
      <ReliableTools />
      <CaseStudies />
      <Blog />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Cloud