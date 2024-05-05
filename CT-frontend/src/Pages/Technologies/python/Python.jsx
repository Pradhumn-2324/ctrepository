import React, { useEffect } from 'react'
import PythonHero from './pythonHero/PythonHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DedicatedPythonDevTeam from './dedicatedDevTeam/DedicatedPythonDevTeam'
import PythonAppDev from './pythonAppDev/PythonAppDev'
import TypeofApp from './typeOfApp/TypeofApp'
import InHouseVSOutsource from './inhouseVsoutsource/InHouseVSOutsource'
import HirePythonDevelopers from './hirePythonDevelopers/HirePythonDevelopers'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const Python = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <PythonHero />
      <OurPartener />
      <DedicatedPythonDevTeam />
      <PythonAppDev />
      <TypeofApp />
      <InHouseVSOutsource />
      <HirePythonDevelopers/>
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

export default Python