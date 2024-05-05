import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import WebSolutionWeNeed from './Components/WebSolutionWeNeed'
import PartnerUp from './Components/PartenerUp'
import FullScale from './Components/FullScale'
import WebDevprocess from './Components/WebDevprocess'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'

const SoftDevWebDevelopment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <WebSolutionWeNeed />
            <PartnerUp />
            <FullScale />
            <WebDevprocess />
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

export default SoftDevWebDevelopment
