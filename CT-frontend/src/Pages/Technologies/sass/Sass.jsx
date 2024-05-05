import React, { useEffect } from 'react'
import SassHero from './sasshero/SassHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import SassMarket from './sassMarket/SassMarket'
import SassDevSer from './sassDevSer/SassDevSer'
import BenefitFromSass from './benefitOfSass/BenefitFromSass'
import SassIndustryExpert from './sassIndustryExpertise/SassIndustryExpert'
import SassAppDev from './sassAppDev/SassAppDev'
import ServiceOptions from './serviceOptions/ServiceOptions'
const Sass = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <SassHero />
      <OurPartener />
      <SassMarket />
      <SassDevSer />
      <BenefitFromSass />
      <SassIndustryExpert />
      <SassAppDev />
      <ServiceOptions />
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

export default Sass