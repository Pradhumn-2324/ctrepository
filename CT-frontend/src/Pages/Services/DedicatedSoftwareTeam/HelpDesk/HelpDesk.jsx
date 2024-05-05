import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import WhyCt from './Component/WhyCt'
import ITHelpDesk from './Component/ITHelpDesk'
import OurOutSource from './Component/OurOutSource'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ/Faq'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
const HelpDesk = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <WhyCt/>
      <ITHelpDesk/>
      <OurOutSource/>
      <CaseStudies/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default HelpDesk
