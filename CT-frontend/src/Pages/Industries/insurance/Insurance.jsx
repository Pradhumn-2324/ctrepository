import React from 'react'
import InsuranceHead from './insuranceHead/InsuranceHead'
import InsuranceSlider from './insuranceSlider/InsuranceSlider'
import ITSolutions from './itSolution/ITSolutions'
import ITServices from './itServices/ITServices'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Insurance = () => {
    return (
        <div>
            <InsuranceHead />
            <InsuranceSlider />
            <ITSolutions />
            <ITServices />
            <CaseStudies />
            <Blog />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Insurance