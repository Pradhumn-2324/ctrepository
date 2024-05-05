 import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Components/WhyCT'
import AppWeSupport from './Components/AppWeSupport'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from './Components/FAQ'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import ApplicationMaintainace from './Components/ApplicationMaintainace'
 
 const SoftSupportMaintainence = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

   return (
     <div>
       <Header/>
       <OurPartener/>
       <WhyChooseCT/>
       <AppWeSupport/>
       <ApplicationMaintainace/>
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
 
 export default SoftSupportMaintainence
 