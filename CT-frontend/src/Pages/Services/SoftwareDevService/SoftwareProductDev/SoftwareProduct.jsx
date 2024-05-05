import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import Header from './Component/Header'
import FullScale from './Component/FullScale'
import SoftPartenerUp from './Component/SoftPartenerUp'
import Faq from './Component/FAQ'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../../HomePage/Component/ReliableTools/ReliableTools'
import ProductDevOutSourcing from './Component/ProductDevOutSourcing'

const SoftwareProduct = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header />
      <OurPartener />
      <FullScale />
      <SoftPartenerUp />
      <ProductDevOutSourcing />
      <ReliableToolsHeading />
      <ReliableTools />
      <Faq />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareProduct
