import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Components/WhyChooseCt'
import OperationSupportSystem from './Components/OperationSupportSystem'
import BussinessSupportSystem from './Components/BussinessSupportSystem'
import Faq from './Components/FAQ/Faq'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const Telicommunication = () => {
    return (
        <div>
            <Header />
            <OurPartener />
            <WhyChooseCT />
            <OperationSupportSystem />
            <BussinessSupportSystem />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Telicommunication
