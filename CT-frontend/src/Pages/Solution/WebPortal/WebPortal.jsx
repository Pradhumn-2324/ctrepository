import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCt from './Components/WhyChooseCT'
import WebPortalWeCreated from './Components/WebPortalWeCreated'
import BringingInnovation from './Components/BringingInnovation'
import LayingtheFoundation from './Components/LayingtheFoundation'
import WebDevSteps from './Components/WebDevSteps'
import TechnologyPlatform from '../ContentManagement/Components/TechnologyPlatform/TechnologyPlatform'
import TechPlatformHeader from '../ContentManagement/Components/TechnologyPlatform/TechPlatformHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const WebPortal = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <OurPartener />
      <WhyChooseCt />
      <WebPortalWeCreated />
      <BringingInnovation />
      <LayingtheFoundation />
      <WebDevSteps />
      <TechPlatformHeader />
      <TechnologyPlatform />
      <CaseStudies />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default WebPortal
