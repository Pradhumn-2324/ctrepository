import React, { useEffect } from 'react'
import PimcoreHero from './PimcoreHero/PimcoreHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import FeaturesAndProduct from './featuresAndProduct/FeaturesAndProduct'
import SalesForceService from './salesforceService/SalesForceService'
import PimeCoreLogoSlider from './pimeCorelogoSlider/PimeCoreLogoSlider'
const Pimcore = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <PimcoreHero />
      <OurPartener />
      <FeaturesAndProduct />
      <SalesForceService />
      <PimeCoreLogoSlider />
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

export default Pimcore