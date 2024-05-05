import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import KeyFeatureOfELearning from './Component/KeyFeatureOfELearning'
import BenefitsFromPartenerShip from './Component/BenefitsFromPartenerShip'
import ChooseYourService from './Component/ChooseYourService'
import TechnologyHeader from '../HRSoftwareDevelopment/Components/TechnologyStack/TechnologyHeader'
import Technologies from '../HRSoftwareDevelopment/Components/TechnologyStack/Technologies'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ/Faq'
const Elearning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <KeyFeatureOfELearning />
            <BenefitsFromPartenerShip />
            <ChooseYourService />
            <TechnologyHeader />
            <Technologies />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Elearning
