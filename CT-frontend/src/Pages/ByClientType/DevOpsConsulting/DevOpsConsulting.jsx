import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DevopsServ from './Component/DevopsServ'
import DevopsServiceByCt from './Component/DevopsServiceByCt'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Component/FAQ'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const DevOpsConsulting = () => {
  return (
    <div>
     <Header/> 
     <OurPartener/>
     <DevopsServ/>
     <DevopsServiceByCt/>
     <ReliableToolsHeading/>
     <ReliableTools/>
     <CaseStudies/>
     <MeetOurClient/>
     <Faq/>
     <BookFreeConsultation/>
     <Footer/>
    </div>
  )
}

export default DevOpsConsulting
