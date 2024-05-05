import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhatWebSolution from './Component/WhatWebSolution'
import PartnerUp from './Component/PartenerUp'
import FullScaleWebDevelopment from './Component/FullScaleWebDevelopment'
import EnsureSuccess from './Component/EnsureSuccess'
import TechTools from '../StartUpProductDev/Component/TechTools/TechTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Footer from '../../HomePage/Component/Footer/Footer'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import TechToolsHeader from '../StartUpProductDev/Component/TechTools/TechToolsHeader'
import Faq from './Component/WebDevFaq'
const WebDevelopment = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <WhatWebSolution/>
      <PartnerUp/>
      <FullScaleWebDevelopment/>
      <EnsureSuccess/>
      <TechToolsHeader/>  
      <TechTools/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default WebDevelopment
