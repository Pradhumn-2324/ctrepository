import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalityModule from './Components/FunctionalityModule'
import WhyChooseCT from './Components/WhyChooseCT'
import EAMServices from './Components/EAMServices'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import TechnologyTools from '../ERP/Components/Technology/TechnologyTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const AssetManagements = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <OurPartener />
      <FunctionalityModule />
      <WhyChooseCT />
      <EAMServices />
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

export default AssetManagements
