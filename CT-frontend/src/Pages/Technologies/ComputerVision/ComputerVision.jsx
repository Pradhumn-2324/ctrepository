import React, { useEffect } from 'react'
import ComputerVisionHero from './ComputerVisionHero/ComputerVisionHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import CoreTask from './coreTask/CoreTask'
import ImageAnalysisService from './imageAnalysisService/ImageAnalysisService'
import CTApproaches from './ctApproaches/CTApproaches'
import ImageAnalysis from './imageAnalysis/ImageAnalysis'
import CVLogoSlider from './cvLogoSlider/CVLogoSlider'
import DevWorkflow from './developmentWorkflow/DevWorkflow'
const ComputerVision = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <ComputerVisionHero />
      <OurPartener />
      <CoreTask />
      <ImageAnalysis/>
      <CVLogoSlider/>
      <ImageAnalysisService />
      <CTApproaches />
      <DevWorkflow/>
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

export default ComputerVision