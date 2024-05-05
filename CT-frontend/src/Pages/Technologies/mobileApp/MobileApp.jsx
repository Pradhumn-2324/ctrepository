import React, { useEffect } from 'react'
import MobileHero from './mobilehero/MobileHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import MobApplicationDev from './mobAppDevService/MobApplicationDev'
import PartnerUpWithCity from './partnerUpWithCity/PartnerUpWithCity'
import MObileAppsWeDev from './mobileWeDevelops/MObileAppsWeDev'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const MobileApp = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <MobileHero />
      <OurPartener />
      <MobApplicationDev />
      <PartnerUpWithCity />
      <MObileAppsWeDev />
      <ReliableToolsHeading/>
      <ReliableTools/>
      <CaseStudies/>
      <Blog/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default MobileApp