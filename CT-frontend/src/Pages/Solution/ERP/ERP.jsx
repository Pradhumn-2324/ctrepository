import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CustomErpSoft from './Components/CustomErpSoft'
import FunctionalERPModule from './Components/FunctionalERPModule'
import ERPDevService from './Components/ERPDevService'
import ERPDevSteps from './Components/ERPDevSteps'
import PerkOfERP from './Components/PerkOfERP'
import TechnologyHeading from './Components/Technology/TechnologyHeading'
import TechnologyTools from './Components/Technology/TechnologyTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const ERP = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <CustomErpSoft />
            <FunctionalERPModule />
            <ERPDevService />
            <ERPDevSteps />
            <PerkOfERP />
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

export default ERP
