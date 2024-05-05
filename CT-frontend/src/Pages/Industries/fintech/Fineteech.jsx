import React from 'react'
import Head from './fintechHead/Head'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import Solutions from './finetechSolutions/Solutions'
import Benefits from './finetechBenefits/Benefits'
import Specialised from './finetechspecialised/Specialised'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Slider1 from './finetechSlider/Slider'

const Fineteech = () => {
    return (
        <div>
            <Head />
            <OurPartener />
            <Slider1 />
            <Solutions />
            <Benefits />
            <Specialised />
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

export default Fineteech