import React, { useEffect } from 'react'
import PhpHero from './phpHero/PhpHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import PhpDevTeam from './phpDevTeam/PhpDevTeam'
import PhpDevLogoSlider from './phpDevLogoSlider/PhpDevLogoSlider'
import PhpDevelopersStandOut from './phpDevelopersStandOut/PhpDevelopersStandOut'
import CorporationModel from './corporationModel/CorporationModel'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Php = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <PhpHero />
      <OurPartener />
      <PhpDevTeam />
      <PhpDevLogoSlider/>
      <PhpDevelopersStandOut/>
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

export default Php