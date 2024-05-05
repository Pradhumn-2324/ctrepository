import React, { useEffect } from 'react'
import GoLangHero from './golanghero/GoLangHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedTeamGolang from './dedicatedTeamGolang/DedicatedTeamGolang'
import GolangLogoSlider from './golangLogoSlider/GolangLogoSlider'
import DevelopWithGoLang from './developwithGolang/DevelopWithGoLang'
import ApproachToGolang from './approachtoGolang/ApproachToGolang'
import ServiceOptions from './serviceOptions/ServiceOptions'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Golang = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <GoLangHero />
      <OurPartener />
      <DedicatedTeamGolang/>
      <GolangLogoSlider/>
      <DevelopWithGoLang/>
      <ApproachToGolang/>
      <ServiceOptions/>
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

export default Golang