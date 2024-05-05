import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import TypeOfSoft from './Components/TypeOfSoft'
import TestingType from './Components/TestingType'
import WhyChooseCT from './Components/WhyChooseCT'
import QASoftTesingService from './Components/QASoftTesingService'
import TechToolsHeader from '../../QA_Service/Component/TechTools/TechToolsHeader'
import TechTools from '../../QA_Service/Component/TechTools/TechTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'

const Qa_Service = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <TypeOfSoft />
            <TestingType/>
            <WhyChooseCT/>
            <QASoftTesingService/>
            <TechToolsHeader/>
            <TechTools/>
            <CaseStudies/>
            <MeetOurClient/>
            <Faq/>
            <BookFreeConsultation/>
            <Footer/>

        </div>
    )
}

export default Qa_Service
