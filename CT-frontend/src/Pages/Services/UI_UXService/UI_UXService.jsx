import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import OurUIUX from './Component/OurUIUX'
import PerkOfWebDesign from './Component/PerkOfWebDesign'
import UI_UX_Option from './Component/UI_UXOption/UI_UX_Option'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from '../../AI/Components/FAQ'

const UI_UXService = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <OurUIUX />
            <PerkOfWebDesign />
            <UI_UX_Option />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default UI_UXService
