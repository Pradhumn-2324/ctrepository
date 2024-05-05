import React, { useEffect } from 'react'
import MachineLearningHero from './machinelearninghero/MachineLearningHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import MLearningMarket from './machineLearningMarket/MLearningMarket'
import MLUseCases from './mLUseCases/MLUseCases'
import ScopeMLService from './scopeOfMLService/ScopeMLService'
import MLServiceOptions from './mlServiceOption/MLServiceOptions'
const MachineLearning = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <MachineLearningHero />
      <OurPartener />
      <MLearningMarket />
      <MLUseCases />
      <ScopeMLService />
      <MLServiceOptions />
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

export default MachineLearning