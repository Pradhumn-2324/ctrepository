import React from 'react'
import Header from './Components/Header'
import OurPartener from '../HomePage/Component/OurPartener/OurPartener'
import AIConsulting from './Components/AIConsulting'
import SoftWareAdvBussiness from './Components/SoftWareAdvBussiness'
import AISolutionWeCreate from './Components/AISolutionWeCreate'
import EndtoEndAIConsulting from './Components/EndToEndCunsolting'
import CaseStudies from '../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ'
import BookFreeConsultation from '../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../HomePage/Component/Footer/Footer'
import ChooseYourAiService from './Components/ChooseYourAiService'
import MLMethods from './Components/MLMethods'
import AiToolsHeader from './Components/AITechTools/AiToolsHeader'
import AITools from './Components/AITechTools/AITools'


const ArtificialIntelligence = () => {
  return (
    <div>
      <Header />
      <OurPartener />
      <AIConsulting />
      <SoftWareAdvBussiness />
      <AISolutionWeCreate />
      <EndtoEndAIConsulting />
      <ChooseYourAiService />
      <MLMethods />
      <AiToolsHeader/>
      <AITools/>
      <CaseStudies />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer />

    </div>
  )
}

export default ArtificialIntelligence
