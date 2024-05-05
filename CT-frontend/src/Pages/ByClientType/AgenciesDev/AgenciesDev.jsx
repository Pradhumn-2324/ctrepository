import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import AgenciesSoftDev from './Component/AgenciesSoftDev'
import AgenciesSoftService from './Component/AgenciesSoftService'
import BusinessValue from './Component/BusinessValue'
import ChooseServiceOption from './Component/ChooseServiceOption'
import TechToolsHeader from './Component/TechTools/TechToolsHeader'
import TechTools from '../StartUpProductDev/Component/TechTools/TechTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const AgenciesDev = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <AgenciesSoftDev/>
      <AgenciesSoftService/>
      <BusinessValue/>
      <ChooseServiceOption/>
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

export default AgenciesDev
