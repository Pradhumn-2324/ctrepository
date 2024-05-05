import React, { useEffect } from 'react'
import AiHero from './artificialhero/AiHero'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import AILogoSlider from './aiLogoSlider/AILogoSlider'
import AIConsulting from './aiConsulting/AIConsulting'
import SoftForAdv from './softwareForAdvance/SoftForAdv'
import AISolution from './aiSolution/AISolution'
import AiConsultingService from './aiconsultingService/AiConsultingService'
import AIServiceOption from './aiServiceOption/AIServiceOption'
import MLMethods from './mlMethods/MLMethods'
const ArtififcialIntelligence = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AiHero />
      <OurPartener />
      <AIConsulting />
      <AILogoSlider />
      <SoftForAdv />
      <AISolution />
      <AiConsultingService />
      <AIServiceOption />
      <MLMethods />
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

export default ArtififcialIntelligence