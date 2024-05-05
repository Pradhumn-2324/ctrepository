import React from 'react'
import LendingHead from './lendingHead/LendingHead'
import LendingSlider from './lendingSlider/LendingSlider'
import LendingIntegration from './lendingSoftIntegration/LendingIntegration'
import LendingSolutions from './lendingSolutions/LendingSolutions'
import LendingUSeCases from './lendingUseCases/LendingUSeCases'
import BenefitsOfLending from './benefitsOfLending/BenefitsOfLending'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'

const Lending = () => {
    return (
        <div>
            <LendingHead />
            <OurPartener/>
            <LendingSlider />
            <LendingUSeCases />
            <LendingSolutions />
            <LendingIntegration />
            <BenefitsOfLending />
            <CaseStudies />
            <Blog />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Lending