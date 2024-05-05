import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import APIDevServices from './Component/APIDevServices'
import WhatWebSolution from '../WebDevelopment/Component/WhatWebSolution'
import PerkOfOurApplication from './Component/WhatMakesOurAPI'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import APIDevIntegration from './Component/APIDevAndIntegration'

const CustomAPIDev = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <APIDevServices/>
      <PerkOfOurApplication/>
      <APIDevIntegration/>
      <ReliableToolsHeading/>
      <ReliableTools/>
      <CaseStudies/>
      <MeetOurClient/>

      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default CustomAPIDev
