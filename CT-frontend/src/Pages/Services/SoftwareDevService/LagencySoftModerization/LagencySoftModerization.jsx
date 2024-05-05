import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Component/WhyCT'
import AttributeOfOurApp from './Component/AttributeOfOurApp'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'

const LagencySoftModerization = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
    return (
        <div>
            <Header />
            <OurPartener />
            <WhyChooseCT />
            <AttributeOfOurApp />
            <ReliableToolsHeading />
            <ReliableTools />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default LagencySoftModerization
