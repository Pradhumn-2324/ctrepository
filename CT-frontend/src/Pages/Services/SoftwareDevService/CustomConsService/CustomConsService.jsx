import React, { useEffect } from 'react'
import Header from './Component/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import PartnerUp from './Component/PartenerUp'
import DiverseSkills from './Component/DiverseSkills'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ'

const CustomConsService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <PartnerUp />
            <DiverseSkills />
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

export default CustomConsService
