import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CTService from './Components/CTService'
import SolutionSpecilization from './Components/SolutionSpecilization'
import WhyChooseCt from './Components/WhyChooseCt'
import FinancialSoftCons from './Components/FinancialSoftCons'
import YourServiceOption from './Components/YourServiceOption'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import TechnologyTools from '../ERP/Components/Technology/TechnologyTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const FinancialManagement = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <CTService />
            <SolutionSpecilization />
            <WhyChooseCt />
            <FinancialSoftCons />
            <YourServiceOption />
            <TechnologyHeading />
            <TechnologyTools />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default FinancialManagement
