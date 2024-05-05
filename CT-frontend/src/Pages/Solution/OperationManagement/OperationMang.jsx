import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import OpManFeature from './Components/OpManFeature'
import ServiceOpMang from './Components/ServiceOpMang'
import OpManCons from './Components/OpManCons'
import SoftImplementation from './Components/SoftImplementation'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import TechnologyTools from '../ERP/Components/Technology/TechnologyTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../ERP/Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const OperationMang = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <OpManFeature />
            <ServiceOpMang />
            <OpManCons />
            <SoftImplementation />
            <TechnologyHeading />
            <TechnologyTools />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default OperationMang
