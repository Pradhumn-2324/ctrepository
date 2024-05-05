import React, { useEffect } from 'react'
import NodeHero from './nodehero/NodeHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedNodeDevelopment from './dedicatedNodedevelopment/DedicatedNodeDevelopment'
import NodeApplication from './nodeApplication/NodeApplication'
import DevelopWithNode from './developwithnode/DevelopWithNode'
import IndustryExpertise from './industryExpertise/IndustryExpertise'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Node = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <NodeHero />
      <OurPartener />
      <DedicatedNodeDevelopment />
      <NodeApplication />
      <DevelopWithNode/>
      <IndustryExpertise/>
      <ReliableToolsHeading/>
      <ReliableTools/>
      <CaseStudies/>
      <Blog/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default Node