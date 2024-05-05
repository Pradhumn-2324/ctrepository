import React from 'react'
import InvestmentsHead from './investmentHead/InvestmentsHead'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import InvestmentSlider from './investmentSlider/InvestmentSlider'
import MeetWhereWe from './meetWhereWeAre/MeetWhereWe'
import InvestmentSoftware from './investmentSoftware/InvestmentSoftware'
import InvestmentAspects from './investmentAspects/InvestmentAspects'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Investment = () => {
    return (
        <div>
            <InvestmentsHead />
            <OurPartener />
            <InvestmentSlider />
            <MeetWhereWe />
            <InvestmentSoftware />
            <InvestmentAspects />
            <ReliableToolsHeading />
            <ReliableTools />
            <CaseStudies />
            <Blog />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Investment