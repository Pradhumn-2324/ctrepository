import React from 'react'
import BankingHead from './bankingHead/BankingHead'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BankingServiceOffer from './bankingserviceOffer/BankingServiceOffer'
import BankingSlider from './bankingSlider/BankingSlider'
import BankingSoftSolution from './bankingSoftSolution/BankingSoftSolution'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Banking = () => {
    return (
        <div>
            <BankingHead />
            <OurPartener />
            <BankingSlider />
            <BankingSoftSolution />
            <BankingServiceOffer />
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

export default Banking