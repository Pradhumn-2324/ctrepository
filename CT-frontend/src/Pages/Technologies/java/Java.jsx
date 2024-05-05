import React, { useEffect } from 'react'
import JavaHero from './javaHero/JavaHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedJavaDevTeam from './dedicatedDevTeam/DedicatedJavaDevTeam'
import JavaLogoSlider from './javaLogoSlider/JavaLogoSlider'
import JavaDevService from './javaDevService/JavaDevService'
import ServiceOptions from './serviceOptions/ServiceOptions'
import JavaDeveloper from './javaDeveloper/JavaDeveloper'
import JavaCodeQuality from './javaCodeQuality/JavaCodeQuality'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Java = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div>
      <JavaHero />
      <OurPartener />
      <DedicatedJavaDevTeam />
      <JavaLogoSlider />
      <JavaDevService />
      <ServiceOptions />
      <JavaDeveloper />
      <JavaCodeQuality />
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

export default Java