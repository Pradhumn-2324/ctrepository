import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import DedicatedDevTeam from './Components/DedicatedDevTeam'
import PartnerUp from './Components/PartenerUp'
import AreaOfExperties from './Components/AreaOfExperties'
import ReasonForDedicatedTeam from './Components/ReasonForDedicatedTeam'
import TechnologyHeader from './Components/Technology/TechnologyHeader'
import Technology from './Components/Technology/Technology'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'

const MainDedicatedDevService = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <DedicatedDevTeam/>
      <PartnerUp/>
      <AreaOfExperties/>
      <ReasonForDedicatedTeam/>
      <TechnologyHeader/>
      <Technology/>
      <CaseStudies/>
      <Blog/>
      <MeetOurClient/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default MainDedicatedDevService
