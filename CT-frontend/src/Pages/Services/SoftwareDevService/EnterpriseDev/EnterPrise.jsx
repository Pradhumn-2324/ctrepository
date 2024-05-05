import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import Header from './Component/Header'
import ScopeEnterprise from './Component/ScopeEnterprise'
import EntPartenerUP from './Component/EntPartenerUP'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ'

const Enterprise = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <ScopeEnterprise/>
      <EntPartenerUP/>
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

export default Enterprise
