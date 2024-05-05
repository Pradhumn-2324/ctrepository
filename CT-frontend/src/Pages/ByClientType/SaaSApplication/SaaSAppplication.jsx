import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import HighTimetoTap from './Components/HighTimetoTap'
import ScopeofOurSaaSDev from './Components/ScopeofOurSaaSDev'
import BenefitFromSaaSDev from './Components/BenefitFromSaaSDev'
import TypeOfSaasApplication from './Components/TypeOfSaasApplication'
import TechTools from '../StartUpProductDev/Component/TechTools/TechTools'
import TechToolsHeader from '../StartUpProductDev/Component/TechTools/TechToolsHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const SaaSAppplication = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <HighTimetoTap/>
      <ScopeofOurSaaSDev/>
      <BenefitFromSaaSDev/>
      <TypeOfSaasApplication/>
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

export default SaaSAppplication
