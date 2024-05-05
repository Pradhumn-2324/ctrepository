import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import OurSoftDevOffer from './Components/OurSoftDevOffer'
import WhyChooseSoft from './Components/WhyChooseCt'
import PartnerUp from './Components/PartenerUp'
import DiffCollabration from './Components/DiffCollabration'
import SoftAdvance from './Components/SoftBussinessTask'
import SoftDevSteps from './Components/SoftDevSteps'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'

const SoftwareDevelopment = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <OurPartener />
      <OurSoftDevOffer />
      <WhyChooseSoft />
      <PartnerUp />
      <DiffCollabration />
      <SoftAdvance />
      <SoftDevSteps />
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

export default SoftwareDevelopment
