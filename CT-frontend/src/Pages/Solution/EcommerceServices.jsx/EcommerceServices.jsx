import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCt from './Components/WhyChooseCt'
import ConsultingService from './Components/ConsultingService'
import ECommerseDevService from './Components/ECommerseDevService'
import GrowthOptimization from './Components/GrowthOptimization'
import OurTechStack from './Components/OurTechStack/OurTechStack'
import TechStackHeader from './Components/OurTechStack/OurTechStackHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import SupportMaintainance from './Components/SupportMaintainance'

const EcommerceServices = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <Header />
            <OurPartener />
            <WhyChooseCt />
            <ConsultingService />
            <ECommerseDevService />
            <SupportMaintainance/>
            <GrowthOptimization />
            <TechStackHeader />
            <OurTechStack />
            <CaseStudies />
            <MeetOurClient />
            <Faq />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default EcommerceServices
