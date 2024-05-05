import React, { useEffect } from 'react'
import DataScienceHero from './datasciencehero/DataScienceHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import DataScienceMarket from './DataScienceMarket/DataScienceMarket'
import DataScienceSer from './dataScienceService/DataScienceSer'
import Complementry from './complementery/Complementry'
import UseCases from './usecases/UseCases'
import BenefitsOfCR from './benefitsCR/BenefitsOfCR'
import DSProcess from './dataScienceProcess/DSProcess'
const DataScience = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <DataScienceHero />
      <OurPartener />
      <DataScienceMarket />
      <DataScienceSer />
      <Complementry />
      <DSProcess />
      <UseCases />
      <BenefitsOfCR />
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

export default DataScience