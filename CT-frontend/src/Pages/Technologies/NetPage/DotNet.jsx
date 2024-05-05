import React, { useEffect } from 'react'
import DotNetHero from './DotNetHero/DotNetHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedTeamOfNet from './dedicatedTeam/DedicatedTeam'
import DotNetTeamLogoSlider from './dotNetLogoSlider/DotNetLogoSlider'
import SoftDevwithDotNet from './softwareDevWithDotNet/SoftDevwithDotNet'
import CustomNet from './CustomNET/CustomNet'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import CorporationModel from './corporationmodel/CorporationModel'

const DotNet = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <DotNetHero />
      <OurPartener />
      <DedicatedTeamOfNet />
      <DotNetTeamLogoSlider />
      <SoftDevwithDotNet />
      <CustomNet/>
      <CorporationModel/>
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

export default DotNet