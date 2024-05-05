import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DesktopAppDev from './Component/DesktopAppDev'
import OurDesktopApp from './Component/OurDesktopApp'
import PerkOfOurApplication from './Component/PerkOfOurApplication'
import SoftDevProcess from './Component/SoftDevProcess'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ'

const DeskTopApp = () => {
    return (
        <div>
            <Header />
            <OurPartener />
            <DesktopAppDev />
            <OurDesktopApp />
            <PerkOfOurApplication />
            <SoftDevProcess />
            <ReliableTools />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default DeskTopApp
