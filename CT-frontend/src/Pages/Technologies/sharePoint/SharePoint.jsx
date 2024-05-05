import React, { useEffect } from 'react'
import SharePointHero from './sharePoinHero/SharePointHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Functionality from './functionality/Functionality'
import KeyIntegration from './keyIntegration/KeyIntegration'
import Customization from './customization/Customization'
import SharePointUseCases from './useCases/SharePointUseCases'
const SharePoint = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <SharePointHero />
      <OurPartener />
      <Functionality />
      <KeyIntegration />
      <Customization />
      <SharePointUseCases />
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

export default SharePoint