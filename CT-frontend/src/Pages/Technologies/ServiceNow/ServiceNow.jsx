import React, { useEffect } from 'react'
import ServiceNowHero from './ServiceNowHero/ServiceNowHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import ServiceNowService from './servicenowService/ServiceNowService'
import SNService from './snService/SNService'
import SNServiceSlider from './snServiceLogoSlider/SNServiceSlider'
const ServiceNow = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <ServiceNowHero />
      <OurPartener />
      <ServiceNowService />
      <SNService/>
      <SNServiceSlider/>
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

export default ServiceNow