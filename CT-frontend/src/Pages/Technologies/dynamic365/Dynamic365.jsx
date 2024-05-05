import React, { useEffect } from 'react'
import Dynamic365Hero from './dynamic365hero/Dynamic365Hero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import BusinessProcess from './transformBusiness/BusinessProcess'
import LaunchImproveFix from './launchImproveFix/LaunchImproveFix'
const Dynamic365 = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Dynamic365Hero />
      <OurPartener />
      <BusinessProcess />
      <LaunchImproveFix />
      <ReliableToolsHeading />
      <ReliableTools />
      <CaseStudies />
      <Blog />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default Dynamic365