import React, { useEffect } from 'react'
import PowerBiConsultingHero from './powerBiConsultingHero/PowerBiConsultingHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import PowerBILogoSlider from './powerBILogoSliders/PowerBILogoSlider'
import Highlights from './highLightsOfPowerBI/Highlights'
import PowerBIOptions from './powerBIServiceOptions/PowerBIOptions'
import MSPowerBIServices from './msPowerBIService/MSPowerBIServices'
const PowerBiConsulting = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <PowerBiConsultingHero />
      <OurPartener />
      <MSPowerBIServices/>
      <PowerBILogoSlider />
      <Highlights />
      <PowerBIOptions/>
      <ReliableToolsHeading />
      <ReliableTools />
      <CaseStudies />
      <Blog />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default PowerBiConsulting