import React, { useEffect } from 'react'
import Header from './Components/Header'
import KeyFeaturesPM from './Components/KeyFeaturesPM'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ExtendedFeature from './Components/ExtendedFeature'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const ProjectMang = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <KeyFeaturesPM />
            <ExtendedFeature />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer/>
        </div>
    )
}

export default ProjectMang
