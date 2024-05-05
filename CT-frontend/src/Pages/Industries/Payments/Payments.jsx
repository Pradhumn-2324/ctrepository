import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Components/WhyChooseCt'
import WhoWeServe from './Components/WhoWeServe'
import FeatureWeRecomded from './Components/FeatureWeRecomded'
import ValueDrivenApproach from './Components/ValueDrivenApproach'
import FieldofExpertise from './Components/FieldofExpertise'
import TechnologyHeader from './Components/TechnologyPlatform/TechnologyHeader'
import TechnologyPlatform from './Components/TechnologyPlatform/TechnologyPlatform'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const Payments = () => {
    return (
        <div>
            <Header />
            <OurPartener />
            <WhyChooseCT />
            <WhoWeServe />
            <FieldofExpertise />
            <FeatureWeRecomded />
            <ValueDrivenApproach />
            <TechnologyHeader />
            <TechnologyPlatform />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Payments
