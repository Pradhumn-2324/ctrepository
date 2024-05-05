import React, { useEffect } from 'react'
import AugmentedRealityHero from './augmentedrealityhero/AugmentedRealityHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Function from './function/Function'
import HighestImpact from './highestImpact/HighestImpact'
import ARApplication from './arApplication/ARApplication'
import ARServices from './arServices/ARServices'
import ARLogoSlider from './arLogoSlider/ARLogoSlider'
import ARSolutions from './arSolutions/ARSolutions'
const AugmentedReality = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AugmentedRealityHero />
      <OurPartener />
      <ARServices />
      <ARLogoSlider />
      <Function />
      <HighestImpact />
      <ARSolutions />
      <ARApplication />
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

export default AugmentedReality