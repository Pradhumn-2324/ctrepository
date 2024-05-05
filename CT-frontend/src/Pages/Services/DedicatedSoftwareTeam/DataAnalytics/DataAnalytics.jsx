import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import BuildingDataAnalytics from './Components/BuildingDataAnalytics'
import BenefitsFromCT from './Components/BenefitsFromCT'
import FlexibleService from './Components/FlexibleService'
import CTSolutions from './Components/CTSolutions'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import PartnerUp from './Components/PartenerUp'

const DataAnalytics = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <BuildingDataAnalytics />
            <PartnerUp/>
            <BenefitsFromCT/>
            <FlexibleService/>
            <CTSolutions/>
            <ReliableToolsHeading/>
            <ReliableTools/>
            <CaseStudies/>
            <MeetOurClient/>
            <Faq/>
            <BookFreeConsultation/>
            <Footer/>
        </div>
    )
}

export default DataAnalytics
