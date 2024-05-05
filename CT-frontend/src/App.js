import './App.css';
import React, { useState } from 'react';
import NavBar from './Pages/HomePage/Component/NavBar/NavBar';
import HomePage from './Pages/HomePage/homePage';
import CareerPage from './Pages/CareerPage/CareerPage';
import AgenciesDev from './Pages/ByClientType/AgenciesDev/AgenciesDev';
import EnterpriseService from './Pages/ByClientType/EnterpriseService/EnterpriseService';
import ArtificialIntelligence from './Pages/AI/ArtificialIntelligence';
import StartUpProductDev from './Pages/ByClientType/StartUpProductDev/StartUpProductDev';
import WebDevelopment from './Pages/ByClientType/WebDevelopment/WebDevelopment';
import MobileAppDev from './Pages/ByClientType/MobileAppDevelopment/MobileAppDev';
import DeskTopApp from './Pages/ByClientType/DeskTopApp/DeskTopApp';
import SaaSAppplication from './Pages/ByClientType/SaaSApplication/SaaSAppplication';
import DatabaseDevService from './Pages/ByClientType/DataBaseDevServ/DatabaseDevService';
import CustomAPIDev from './Pages/ByClientType/CustomAPIDev/CustomAPIDev';
import DigitalTransfomService from './Pages/ByClientType/DigitalTransService/DigitalTransfomService';
import DevOpsConsulting from './Pages/ByClientType/DevOpsConsulting/DevOpsConsulting';
import QaService from './Pages/Services/QA_Service/QaService';
import Ecommerse from './Pages/Services/ECommerse/Ecommerse';
import CloudComputing from './Pages/Services/CloudComputing/CloudComputing';
import UI_UXService from './Pages/Services/UI_UXService/UI_UXService';
import SoftwareConsulting from './Pages/Services/SoftwareDevService/SoftWareConsultingService/SoftwareConsulting';
import SoftDevHomePage from './Pages/Services/SoftwareDevService/SoftDevHomePage/SoftDevHomePage';
import CustomConsService from './Pages/Services/SoftwareDevService/CustomConsService/CustomConsService';
import Enterprise from './Pages/Services/SoftwareDevService/EnterpriseDev/EnterPrise';
import SoftwareProduct from './Pages/Services/SoftwareDevService/SoftwareProductDev/SoftwareProduct';
import CloudeApplication from './Pages/Services/SoftwareDevService/CloudApplication/CloudeApplication';
import LagencySoftModerization from './Pages/Services/SoftwareDevService/LagencySoftModerization/LagencySoftModerization';
import SoftSupportMaintainence from './Pages/Services/SoftwareDevService/SoftSupportMaintanace.jsx/SoftSupportMaintainence';
import MainDedicatedDevService from './Pages/Services/DedicatedSoftwareTeam/MainPage/Main';
import SoftwareDevelopment from './Pages/Services/DedicatedSoftwareTeam/SoftwareDevelopment/SoftwareDevelopment';
import SoftDevWebDevelopment from './Pages/Services/DedicatedSoftwareTeam/WebDevelopment/WebDevelopment';
import MobileDevelopment from './Pages/Services/DedicatedSoftwareTeam/MobileDevelopment/MobileDevelopment';
import DataAnalytics from './Pages/Services/DedicatedSoftwareTeam/DataAnalytics/DataAnalytics';
import Qa_Service from './Pages/Services/DedicatedSoftwareTeam/QAService/Qa_Service';
import ItSupport from './Pages/Services/DedicatedSoftwareTeam/ITSupport/ItSupport';
import CyberSecurity from './Pages/Services/DedicatedSoftwareTeam/CyberSecurity/CyberSecurity';
import HelpDesk from './Pages/Services/DedicatedSoftwareTeam/HelpDesk/HelpDesk';
import ERP from './Pages/Solution/ERP/ERP';
import OperationMang from './Pages/Solution/OperationManagement/OperationMang';
import FinancialManagement from './Pages/Solution/FinancialManagement/FinancialManagement';
import PaymentManageMent from './Pages/Solution/PaymentManagement/PaymentManageMent';
import SupplyChainManagement from './Pages/Solution/SupplyChainManagement/SupplyChainManagement';
import DataAnalystSolution from './Pages/Solution/DataAnalyst/DataAnalyst';
import AssetManagements from './Pages/Solution/AssetManagement/AssetManagements';
import FleetManagement from './Pages/Solution/FleetManagement.jsx/FleetManagement';
import HRSoftwareDevelopment from './Pages/Solution/HRSoftwareDevelopment/HRSoftwareDevelopment';
import Elearning from './Pages/Solution/ELearning/Elearning';
import DocumentManagement from './Pages/Solution/DocumentManagement/DocumentManagement';
import ProjectMang from './Pages/Solution/ProjectManagement/ProjectMang';
import CRMSoftware from './Pages/Solution/CRMServices/CRMSoftware';
import EcommerceServices from './Pages/Solution/EcommerceServices.jsx/EcommerceServices';
import MarketingAdvertising from './Pages/Solution/MarketingAdvertising.jsx/MarketingAdvertising';
import ContentManagement from './Pages/Solution/ContentManagement/ContentManagement';
import KioskSoftware from './Pages/Solution/KioskSoftware/KioskSoftware';
import WebPortal from './Pages/Solution/WebPortal/WebPortal';

// industries Routes
import OilandGasInustry from './Pages/Industries/OilandGas/OilandGasInustry';
import Telicommunication from './Pages/Industries/Telecommunications/Telicommunication';
import TransportationandLogistics from './Pages/Industries/TransportationandLogistics/TransportationandLogistics';
import ProfessionalServices from './Pages/Industries/ProfessionalServices/ProfessionalServices';
import Manufacturing from './Pages/Industries/Manufacturing/Manufacturing';
import Healthcare from './Pages/Industries/Healthcare/Healthcare';
import Retail from './Pages/Industries/Retail/Retail';
import Payments from './Pages/Industries/Payments/Payments';
import { Route, Routes } from 'react-router-dom';
import SoftDevServMain from './Pages/SoftDevServices/SoftDevServMain';
import Finance from './Pages/Industries/financialSoftware/Finance';
import Banking from './Pages/Industries/banking/Banking';
import Insurance from './Pages/Industries/insurance/Insurance';
import Lending from './Pages/Industries/lending/Lending';
import Investment from './Pages/Industries/investment/Investment';
import Fineteech from './Pages/Industries/fintech/Fineteech';

import SoftDevTeam from '../src/Pages/Technologies/SoftDevTeam/SoftDevTeam';
import DotNet from './Pages/Technologies/NetPage/DotNet';
import Java from './Pages/Technologies/java/Java';
import Python from './Pages/Technologies/python/Python';
import Php from './Pages/Technologies/php/Php';
import Golang from './Pages/Technologies/golang/Golang';
import CPlus from './Pages/Technologies/cPlus/CPlus';
import Node from './Pages/Technologies/Node/Node';
import JavaScript from './Pages/Technologies/javascript/JavaScript';
import ReactNative from './Pages/Technologies/reactnative/ReactNative';
import MobileApp from './Pages/Technologies/mobileApp/MobileApp';
import AllTechnology from './Pages/Technologies/allTechnology/AllTechnology';
import Cloud from './Pages/Technologies/cloud/Cloud';
import Sass from './Pages/Technologies/sass/Sass';
import Internet from './Pages/Technologies/internet/Internet';
import DataScience from './Pages/Technologies/datascience/DataScience';
import MachineLearning from './Pages/Technologies/machinelearning/MachineLearning';
import ArtififcialIntelligence from './Pages/Technologies/artificialintelligence/ArtififcialIntelligence';
import BlockChain from './Pages/Technologies/blockchain/BlockChain';
import VirtualReality from './Pages/Technologies/virtualreality/VirtualReality';
import AugmentedReality from './Pages/Technologies/augmentedReality/AugmentedReality';
import ComputerVision from './Pages/Technologies/ComputerVision/ComputerVision';
import Microsoft from './Pages/Technologies/Microsoft/Microsoft';
import Azure from './Pages/Technologies/Azure/Azure';
import PowerApps from './Pages/Technologies/PowerApps/PowerApps';
import Dynamic365 from './Pages/Technologies/dynamic365/Dynamic365';
import SharePoint from './Pages/Technologies/sharePoint/SharePoint';
import PowerBiConsulting from './Pages/Technologies/powerBiConsulting/PowerBiConsulting';
import Amazon from './Pages/Technologies/amazon/Amazon';
import Adobe from './Pages/Technologies/adobe/Adobe';
import ServiceNow from './Pages/Technologies/ServiceNow/ServiceNow';
import Pimcore from './Pages/Technologies/Pimcore/Pimcore';
import BigData from './Pages/Technologies/bigdata/BigData';

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  const [serviceDD, setServiceDD] = useState(false);
  const [solutionsDD, setSolutionsDD] = useState(false);
  const [techDD, setTechDD] = useState(false);
  const [industryDD, setIndustryDD] = useState(false);
  return (
    <div className="relative md:overflow-x-hidden bg-white font-medium">
      <NavBar serviceDD={serviceDD} setServiceDD={setServiceDD} setSolutionsDD={setSolutionsDD} setTechDD={setTechDD} setIndustryDD={setIndustryDD} solutionsDD={solutionsDD} techDD={techDD} industryDD={industryDD} hideNavbar={hideNavbar} setHideNavbar={setHideNavbar} activeSubNav={activeSubNav} /> {/* Pass hideNavbar, setHideNavbar, and activeSubNav as props */}
      {/* <HomePage setHideNavbar={setHideNavbar} setActiveSubNav={setActiveSubNav} /> */}
      <Routes>
        <Route path='/' element={<HomePage setHideNavbar={setHideNavbar} setActiveSubNav={setActiveSubNav} serviceDD={serviceDD} solutionsDD={solutionsDD} techDD={techDD} industryDD={industryDD} />} />
        <Route path='/career-page' element={<CareerPage />} />

        {/* <Route path='/by-client' element={<ByClientType />} /> */}
        <Route path='/by-client/Enterprises' element={<AgenciesDev />} />
        <Route path='/by-client/Agencies' element={<EnterpriseService />} />

        {/* service Routes */}
        <Route path='service/Artificial Intelligence (AI) Services' element={<ArtificialIntelligence />} />
        <Route path='service/QA & Services' element={<QaService />} />
        <Route path='service/Ecommerce Services' element={<Ecommerse />} />
        <Route path='service/UI/UX Design' element={<UI_UXService />} />
        <Route path='service/Cloud Computing Services' element={<CloudComputing />} />

        {/* software consulting service  */}
        <Route path='service/Software Development Services' element={<SoftDevHomePage />} />
        <Route path='service/Software Development Service/Software consulting' element={<SoftwareConsulting />} />
        <Route path='service/Software Development Service/Custom software development' element={<CustomConsService />} />
        <Route path='service/Software Development Service/Enterprise software' element={<Enterprise />} />
        <Route path='service/Software Development Service/Software product' element={<SoftwareProduct />} />
        <Route path='service/Software Development Service/Cloud application' element={<CloudeApplication />} />
        <Route path='service/Software Development Service/Legacy software' element={<LagencySoftModerization />} />
        <Route path='service/Software Development Service/Software support' element={<SoftSupportMaintainence />} />
        <Route path='service/Software Development Service/maintenance' element={<SoftSupportMaintainence />} />

        {/* Dedicated Development Team */}
        <Route path='service/Dedicated Software Team' element={<MainDedicatedDevService />} />
        <Route path='service/Dedicated Software Team/Software Development' element={<SoftwareDevelopment />} />
        <Route path='service/Dedicated Software Team/Web Development' element={<SoftDevWebDevelopment />} />
        <Route path='service/Dedicated Software Team/Mobile Development' element={<MobileDevelopment />} />
        <Route path='service/Dedicated Software Team/Data analytics' element={<DataAnalytics />} />
        <Route path='service/Dedicated Software Team/QA & Testing' element={<Qa_Service />} />
        <Route path='service/Dedicated Software Team/IT support' element={<ItSupport />} />
        <Route path='service/Dedicated Software Team/Cybersecurity' element={<CyberSecurity />} />
        <Route path='service/Dedicated Software Team/Help desk' element={<HelpDesk />} />

        {/* Solution Routes */}
        <Route path='solution/ERP' element={<ERP />} />
        <Route path='solution/Operations Management' element={<OperationMang />} />
        <Route path='solution/Financial Management' element={<FinancialManagement />} />
        <Route path='/solution/Payment Management' element={<PaymentManageMent />} />
        <Route path='solution/Supply Chain Management' element={<SupplyChainManagement />} />
        <Route path='solution/Data Analytics' element={<DataAnalystSolution />} />
        <Route path='solution/Asset Management' element={<AssetManagements />} />
        <Route path='solution/Fleet Management' element={<FleetManagement />} />
        <Route path='solution/HR Software Development Services' element={<HRSoftwareDevelopment />} />
        <Route path='solution/eLearning' element={<Elearning />} />
        <Route path='solution/Document Management' element={<DocumentManagement />} />
        <Route path='solution/Project Management' element={<ProjectMang />} />
        <Route path='solution/CRM Services' element={<CRMSoftware />} />
        <Route path='solution/Ecommerce Services' element={<EcommerceServices />} />
        <Route path='solution/Marketing & advertising' element={<MarketingAdvertising />} />
        <Route path='solution/Content Management' element={<ContentManagement />} />
        <Route path='solution/Kiosk Software' element={<KioskSoftware />} />
        <Route path='solution/Web Portal' element={<WebPortal />} />

        {/* Industries pages routes */}
        <Route path='/industries/Oil and Gas' element={<OilandGasInustry />} />
        <Route path='/industries/Telecommunications' element={<Telicommunication />} />
        <Route path='/industries/Transportation and Logistics' element={<TransportationandLogistics />} />
        <Route path='/industries/Professional Services' element={<ProfessionalServices />} />
        <Route path='/industries/Manufacturing' element={<Manufacturing />} />
        <Route path='/industries/Health & Care' element={<Healthcare />} />
        <Route path='/industries/Retail & E-Commerce' element={<Retail />} />
        <Route path='/industries/Payments' element={<Payments />} />
        <Route path='/industries/Financial Services' element={<Finance />} />
        <Route path='/industries/Banking' element={<Banking />} />
        <Route path='/industries/Insurance' element={<Insurance />} />
        <Route path='/industries/Lending' element={<Lending />} />
        <Route path='/industries/Investment' element={<Investment />} />
        <Route path='/industries/FinTech' element={<Fineteech />} />
        {/* by client routes */}
        <Route path='/by-client/Start Up' element={<StartUpProductDev />} />
        <Route path='/start-up-product-development/Web Application' element={<WebDevelopment />} />
        <Route path='/start-up-product-development/Mobile Application' element={<MobileAppDev />} />
        <Route path='/start-up-product-development/Desktop Application' element={<DeskTopApp />} />
        <Route path='/start-up-product-development/SaaS Application' element={<SaaSAppplication />} />
        <Route path='/start-up-product-development/Databases' element={<DatabaseDevService />} />
        <Route path='/start-up-product-development/Integration Solution' element={<CustomAPIDev />} />
        <Route path='/start-up-product-development/Digital Transformation' element={<DigitalTransfomService />} />
        <Route path='/start-up-product-development/DevOps' element={<DevOpsConsulting />} />
        <Route path='/' element={<HomePage setHideNavbar={setHideNavbar} setActiveSubNav={setActiveSubNav} />} />
        {/* technologies */}
        <Route path='/technologies/Software Development services' element={<SoftDevServMain />} />
        <Route path='/technologies/Hire Developers' element={<SoftDevTeam />} />
        <Route path='/technologies/.NET' element={<DotNet />} />
        <Route path='/technologies/JAVA' element={<Java />} />
        <Route path='/technologies/Python' element={<Python />} />
        <Route path='/technologies/PHP' element={<Php />} />
        <Route path='/technologies/Golang' element={<Golang />} />
        <Route path='/technologies/C++' element={<CPlus />} />
        <Route path='/technologies/Node' element={<Node />} />
        <Route path='/technologies/JavaScript' element={<JavaScript />} />
        <Route path='/technologies/React Native' element={<ReactNative />} />
        <Route path='/technologies/Mobile' element={<MobileApp />} />
        <Route path='/technologies/All Technologies' element={<AllTechnology />} />
        <Route path='/technologies/Cloud' element={<Cloud />} />
        <Route path='/technologies/SaaS Development Services' element={<Sass />} />
        <Route path='/technologies/Internet of Things' element={<Internet />} />
        <Route path='/technologies/Big Data' element={<BigData />} />
        <Route path='/technologies/Data Science' element={<DataScience />} />
        <Route path='/technologies/Machine Learning' element={<MachineLearning />} />
        <Route path='/technologies/Artificial Intelligence' element={<ArtififcialIntelligence />} />
        <Route path='/technologies/Blockchain' element={<BlockChain />} />
        <Route path='/technologies/Virtual Reality' element={<VirtualReality />} />
        <Route path='/technologies/Augmented Reality' element={<AugmentedReality />} />
        <Route path='/technologies/Computer Vision' element={<ComputerVision />} />
        <Route path='/technologies/Microsoft' element={<Microsoft />} />
        <Route path='/technologies/Azure' element={<Azure />} />
        <Route path='/technologies/Power Apps' element={<PowerApps />} />
        <Route path='/technologies/Dynamics 365' element={<Dynamic365 />} />
        <Route path='/technologies/SharePoint and Office 365' element={<SharePoint />} />
        <Route path='/technologies/Power BI Consulting' element={<PowerBiConsulting />} />
        <Route path='/technologies/Amazon Web services' element={<Amazon />} />
        <Route path='/technologies/Adobe Commerce' element={<Adobe />} />
        <Route path='/technologies/ServiceNow@' element={<ServiceNow />} />
        <Route path='/technologies/Pimcore' element={<Pimcore />} />
      </Routes>
    </div>
  );
}

export default App;

