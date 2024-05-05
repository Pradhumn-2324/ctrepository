import React, { useEffect } from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import AutomationSoftware from './Components/AutomationSoftware'
import IntegrationsDocumentation from './Components/IntegrationsDocumentation'
import DocumentationAutomation from './Components/DocumentationAutomation'
import SoftwareImplementation from './Components/SoftwareImplementation'
import Faq from './Components/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
const DocumentManagement = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Header/>
      <OurPartener/>
      <AutomationSoftware/>
      <IntegrationsDocumentation/>
      <DocumentationAutomation/>
      <SoftwareImplementation/>
      <Faq/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default DocumentManagement
