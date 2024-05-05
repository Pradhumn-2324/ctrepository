import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BuildingDataAnalyst from './Components/BuildingDataAnalyst'
import WhatMakeCT from './Components/WhatMakeCT'
import BenefitsFromCt from './Components/BenefitsFromCt'
import FlexibleServiceApp from './Components/FlexibleServiceApp'
import CTSolution from './Components/CTSolution'
import ReliableToolsHeading  from '../../../Pages/HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../Pages/HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const DataAnalystSolution = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <BuildingDataAnalyst/>
      <WhatMakeCT/>
      <BenefitsFromCt/>
      <FlexibleServiceApp/>
      <CTSolution/>
      <ReliableToolsHeading/>
      <ReliableTools/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default DataAnalystSolution
