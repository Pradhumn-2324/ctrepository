import React from 'react'
import FinancialHead from './financialHead/FinancialHead'
import CustomerExperience from './customerExperience/CustomerExperience'
import FinancialLogoSlider from './financialLogoSlider/FinancialLogoSlider'
import FinancialService from './financialService/FinancialService'
import FinancialSerDomain from './financialServiceDomain/FinancialSerDomain'
import SuccessDrivenApproach from './successDriveApproach/SuccessDrivenApproach'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'

const Finance = () => {
    return (
        <div>
            <FinancialHead />
            <OurPartener/>
            <FinancialService />
            <FinancialLogoSlider />
            <FinancialSerDomain />
            <CustomerExperience />
            <SuccessDrivenApproach />
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

export default Finance