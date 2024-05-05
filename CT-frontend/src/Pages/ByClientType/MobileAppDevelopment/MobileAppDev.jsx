import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener.jsx'
import OurMobAppDev from './Component/OurMobAppDev.jsx'
import WhyPartnerUp from './Component/WhyPartenerUp.jsx'
import MobileAppWeDeveloped from './Component/MobileAppWeDeveloped.jsx'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools.jsx'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading.jsx'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies.jsx'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient.jsx'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation.jsx'
import Footer from '../../HomePage/Component/Footer/Footer.jsx'
import Faq from './Component/MobileDevFAQ.jsx'

const MobileAppDev = () => {
  return (
    <div>
      <Header />
      <OurPartener />
      <OurMobAppDev />
      <WhyPartnerUp />
      <MobileAppWeDeveloped />
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

export default MobileAppDev
