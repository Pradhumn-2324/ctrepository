import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ScopeOfEnterPrise from './Component/ScopeOfEnterPrise'
import AtoZEnterprise from './Component/AtoZEnterprise'
import WhyPartnerUp from './Component/WhyPartenerUp'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ'

const EnterpriseService = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <ScopeOfEnterPrise/>
      <AtoZEnterprise/>
      <WhyPartnerUp/>
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

export default EnterpriseService
