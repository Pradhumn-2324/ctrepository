import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCt from './Components/WhyChooseCt'
import MeetingAll from './Components/MeetingAll'
import AdvancedCRM from './Components/AdvancedCRM'
import ExpectAfterTailored from './Components/ExpectAfterTailored'
import TechHeader from './Components/Technologies/TechHeader'
import Technology from './Components/Technologies/Technology'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const CRMSoftware = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <OurPartener />
      <WhyChooseCt />
      <MeetingAll />
      <AdvancedCRM />
      <ExpectAfterTailored />
      <TechHeader />
      <Technology />
      <CaseStudies />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default CRMSoftware
