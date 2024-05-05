import React, { useEffect } from 'react'
import CPlusHero from './cPlusHero/CPlusHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import DedicatedCPlusTeam from './dedicatedCplusDevTeam/DedicatedCPlusTeam'
import CPlusLogoSlider from './cPlusLogoSlider/CPlusLogoSlider'
import SoftwareDesign from './softwareDesigned/SoftwareDesign'
import IndustryExpertise from './industryExpertise/IndustryExpertise'

const CPlus = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <CPlusHero/>
      <OurPartener/>
      <DedicatedCPlusTeam/>
      <CPlusLogoSlider/>
      <SoftwareDesign/>
      <IndustryExpertise/>
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

export default CPlus