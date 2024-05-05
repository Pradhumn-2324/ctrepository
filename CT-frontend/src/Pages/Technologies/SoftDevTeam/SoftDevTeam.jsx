import React from 'react'
import SoftDevTeamHero from './SoftDevHero/SoftDevTeamHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedTeam from './dedicatedTeam/DedicatedTeam'
import SoftDevTeamLogoSlider from './softDevTeamLogo/SoftDevTeamLogoSlider'
import PartnerUp from './PartnerUp/PartnerUp'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AreaOfExpertise from './areaOfExpertise/AreaOfExpertise'
import ReasonstoOpt from './ReasonstoOpt/ReasonstoOpt'

const SoftDevTeam = () => {
  return (
    <div>
      <SoftDevTeamHero />
      <OurPartener />
      <DedicatedTeam />
      <SoftDevTeamLogoSlider />
      <PartnerUp/>
      <AreaOfExpertise/>
      <ReasonstoOpt/>
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

export default SoftDevTeam