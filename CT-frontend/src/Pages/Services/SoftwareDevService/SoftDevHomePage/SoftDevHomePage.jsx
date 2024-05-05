import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import ExploreSoftDev from './Component/ExploreSoftDev'
import WhyChooseSoft from './Component/WhyChooseSoft'
import PartnerUp from './Component/PartenerUp'
import SoftAdvance from './Component/SoftAdvance'
import SoftDevSteps from './Component/SoftDevSteps'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ'
import CollabSenario from './Component/CollabSenario'

const SoftDevHomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <ExploreSoftDev />
            <WhyChooseSoft />
            <PartnerUp />
            <CollabSenario />
            <SoftAdvance />
            <SoftDevSteps />
            <ReliableToolsHeading />
            <ReliableTools />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default SoftDevHomePage
