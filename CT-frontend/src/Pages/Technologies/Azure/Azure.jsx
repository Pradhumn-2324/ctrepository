import React, { useEffect } from 'react'
import AzureHero from './AzureHero/AzureHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import BenefitsOfAzure from './benefitsofAzure/BenefitsOfAzure'
import AzureConsulting from './azureOption/AzureConsulting'
import AzureServices from './azureServices/AzureServices'
import AzureLogoSlider from './azureLogoSlider/AzureLogoSlider'
const Azure = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AzureHero />
      <OurPartener />
      <AzureServices />
      <AzureLogoSlider />
      <BenefitsOfAzure />
      <AzureConsulting />
      <ReliableToolsHeading />
      <ReliableTools />
      <CaseStudies />
      <Blog />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default Azure