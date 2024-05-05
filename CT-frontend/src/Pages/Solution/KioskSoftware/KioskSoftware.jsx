import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyCt from './Components/WhyChooseCT'
import Architecture from './Components/Architecture'
import KeyFeatureOfKiskok from './Components/KeyFeatureOfKiskok'
import KioskSoftService from './Components/KioskSoftService'
import SecurityMaintainance from './Components/SecurityMaintainance'
import SuccessFactor from './Components/SuccessFactor'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const KioskSoftware = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <WhyCt />
            <Architecture />
            <KeyFeatureOfKiskok />
            <KioskSoftService />
            <SecurityMaintainance />
            <SuccessFactor />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default KioskSoftware
