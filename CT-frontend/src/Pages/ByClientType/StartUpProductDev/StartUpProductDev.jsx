import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SoftDevForStartups from './Component/SoftDevForStartups'
import SolutionsWeHelpStartups from './Component/SolutionsWeHelpStartups'
import SoftDevProcess from './Component/SoftDevProcess'
import TechTools from './Component/TechTools/TechTools'
import TechToolsHeader from './Component/TechTools/TechToolsHeader'
import OurSoftDevOption from './Component/OurSoftDevOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const StartUpProductDev = () => {
    return (
        <div>
            <Header />
            <OurPartener />
            <SoftDevForStartups />
            <SolutionsWeHelpStartups />
            <SoftDevProcess/>
            <TechToolsHeader/>
            <TechTools/>
            <OurSoftDevOption/>
            <CaseStudies/>
            <MeetOurClient/>
            <Faq/>
            <BookFreeConsultation/>
            <Footer/>
        </div>
    )
}

export default StartUpProductDev
