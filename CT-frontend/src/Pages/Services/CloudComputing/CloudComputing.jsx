import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CloudServiceDev from './Component/CloudServiceDev'
import Deployment from './Component/Deployment'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ/Faq'
import BenefitsFromCloud from './Component/BenefitsFromCloud'
import WhatGetFromCloud from './Component/WhatGetFRomCloud'
import GoForCloud from './Component/GoForCloud'
import WhyChooseCT from './Component/WhyChooseCloud'

const CloudComputing = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <WhyChooseCT/>
            <CloudServiceDev />
            <Deployment />
            <BenefitsFromCloud />
            <GoForCloud />
            <WhatGetFromCloud />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default CloudComputing
