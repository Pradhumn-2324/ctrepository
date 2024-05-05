import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DesktopAppDev from '../DeskTopApp/Component/DesktopAppDev'
import DatabaseDevServ from './Component/DataBaseDevService'
import PerkOfOurApplication from './Component/WhatYouGet'
import Scope from './Component/Scope'
import DataBaseConsulting from './Component/DataBaseSoftDev&Cons'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Component/FAQ'

const DatabaseDevService = () => {
    return (
        <div>
            <Header />
            <OurPartener />
            <DatabaseDevServ />
            <PerkOfOurApplication />
            <Scope />
            <DataBaseConsulting />
            <ReliableToolsHeading />
            <ReliableTools />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default DatabaseDevService
