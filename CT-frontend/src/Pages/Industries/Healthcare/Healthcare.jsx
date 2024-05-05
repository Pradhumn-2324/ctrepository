import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import MeetAllHealthcare from './Components/MeetAllHealthcare'
import WhyChooseCt from './Components/WhyChooseCt'
import ITSolution from './Components/ITSolution'
import TechTools from './Components/Technology/TechTools'
import TechnologyHeader from './Components/Technology/TechnologyHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const Healthcare = () => {
    return (
        <div>
            <Header />
            <OurPartener />
            <MeetAllHealthcare />
            <WhyChooseCt />
            <ITSolution />
            <TechnologyHeader />
            <TechTools />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Healthcare
