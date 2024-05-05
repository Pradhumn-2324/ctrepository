import React, { useEffect } from 'react'
import ReactNativeHero from './reactnativehero/ReactNativeHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedReactNativeTeam from './reactnativeDedicatedTeam/DedicatedReactNativeTeam'
import ReactNativeApplication from './reactnativeApplication/ReactNativeApplication'
import ReactNativeTalents from './reactNativeTalents/ReactNativeTalents'
import ReactNativeDevelopers from './reactNativeDevelopers/ReactNativeDevelopers'
import HireReactNativeDev from './hireReactNativeDev/HireReactNativeDev'
import QualityCooperation from './qualityCooperation/QualityCooperation'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const ReactNative = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <ReactNativeHero />
      <OurPartener />
      <DedicatedReactNativeTeam />
      <ReactNativeApplication />
      <ReactNativeTalents />
      <ReactNativeDevelopers />
      <HireReactNativeDev />
      <QualityCooperation />
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

export default ReactNative