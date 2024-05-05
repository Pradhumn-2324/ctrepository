import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCt from './Components/WhyChooseCT'
import CMSKeyFeatures from './Components/CMSKeyFeatures'
import WhatYouWillGet from './Components/WhatYouWillGet'
import MeetYouWhere from './Components/MeetYouWhere'
import TechPlatformHeader from './Components/TechnologyPlatform/TechPlatformHeader'
import TechnologyPlatform from './Components/TechnologyPlatform/TechnologyPlatform'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const ContentManagement = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
    return (
        <div>
            <Header />
            <OurPartener />
            <WhyChooseCt />
            <CMSKeyFeatures />
            <WhatYouWillGet />
            <MeetYouWhere />
            <TechPlatformHeader />
            <TechnologyPlatform />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default ContentManagement
