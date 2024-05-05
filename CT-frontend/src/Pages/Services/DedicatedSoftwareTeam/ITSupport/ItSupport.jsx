import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import GetWithITSupport from './Components/GetWithITSupport'
import Scope from './Components/Scope'
import CompitativeTraits from './Components/CompitativeTraits'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const ItSupport = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <Scope/>
      <GetWithITSupport/>
      <CompitativeTraits/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default ItSupport
