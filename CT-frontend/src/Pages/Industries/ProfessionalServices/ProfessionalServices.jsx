import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCt from './Components/WhyChooseCt'
import StreamlineOperations from './Components/StreamlineOperations'
import Footer from '../../HomePage/Component/Footer/Footer'
import Faq from './Components/FAQ/Faq'
const ProfessionalServices = () => {
  return (
    <div>
      <Header />
      <OurPartener />
      <WhyChooseCt />
      <StreamlineOperations/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default ProfessionalServices
