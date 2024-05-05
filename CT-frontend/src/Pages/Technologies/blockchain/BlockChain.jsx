import React, { useEffect } from 'react'
import BlockChainHero from './blockchainhero/BlockChainHero'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BusinessTask from './businessTask/BusinessTask'
import BlockChainUseCases from './useCases/BlockChainUseCases'
import AdvancedTech from './advancedTech/AdvancedTech'
import PerksOfBlockchain from './perksOfBlockChain/PerksOfBlockchain'
import BlockChainDevStep from './blockchainDevSteps/BlockChainDevStep'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Faq from '../../HomePage/Component/FAQ/Faq'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const BlockChain = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <BlockChainHero />
      <OurPartener />
      <BusinessTask />
      <BlockChainUseCases />
      <PerksOfBlockchain />
      <BlockChainDevStep />
      <AdvancedTech />
      <ReliableToolsHeading />
      <ReliableTools />
      <CaseStudies />
      <Blog />
      <MeetOurClient />
      <Faq />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default BlockChain