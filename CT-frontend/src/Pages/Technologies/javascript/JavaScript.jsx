import React, { useEffect } from 'react'
import JavaScriptHero from './javaScriptHero/JavaScriptHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import JsDedicatedDevTeam from './jsDedicatedDevTeam/JsDedicatedDevTeam'
import JsApplication from './jsApplication/JsApplication'
import DevelopmentAreas from './developmentAreas/DevelopmentAreas'
import JsServices from './jsServices/JsServices'
import JsDevProject from './jsDevProject/JsDevProject'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const JavaScript = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <JavaScriptHero />
      <OurPartener />
      <JsDedicatedDevTeam />
      <JsApplication />
      <DevelopmentAreas />
      <JsServices />
      <JsDevProject />
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

export default JavaScript