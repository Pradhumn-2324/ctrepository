import React, { useEffect } from 'react'
import BigDataHero from './bigdatahero/BigDataHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import BigDataMarket from './bigDataMarket/BigDataMarket'
import BigDataService from './bigDataService/BigDataService'
import BenefitsBD from './benefitOfBigData/BenefitsBD'
import BigDataUsesCases from './bigDataUseCases/BigDataUsesCases'
import AdvBigData from './advBigData/AdvBigData'
import BigDataFactor from './bigDataFactor/BigDataFactor'
const BigData = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <BigDataHero />
      <OurPartener />
      <BigDataMarket />
      <BigDataService />
      <BenefitsBD />
      <BigDataUsesCases />
      <AdvBigData />
      <BigDataFactor />
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

export default BigData