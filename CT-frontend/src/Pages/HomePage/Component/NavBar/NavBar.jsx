import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ctlogo from '../assets/heroSectionImg/CTLogo1@2x-8.png';
import clientby from '../assets/serviceWeOffer/clientby.png';
import searchIcon from '../assets/serviceWeOffer/searchicon.png'
import "./navBar.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = ({ hideNavbar, setHideNavbar, serviceDD, setServiceDD, solutionsDD, setSolutionsDD, techDD, setTechDD, industryDD, setIndustryDD }) => {
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("");
  const [industries, setIndustries] = useState([])
  const [services, setServices] = useState([])
  const [solution, setSolution] = useState([])
  const [service, setService] = useState(false)
  const [solutions, setSolutions] = useState(false)
  const [technology, setTechnology] = useState(false)
  const [industry, setIndustry] = useState(false)
  const navigate = useNavigate()


  const getIndustries = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-industries-data")
      if (response.status === 200) {
        setIndustries(response.data.getData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIndustries()
  }, [])


const fetchServiceData = async () => {
    try {
        const response = await axios.get("http://localhost:8080/get-service-data");
        setServices(response.data.getData);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
  fetchServiceData();
}, []);


const getSolutionDataFunc = async () => {
  try {
      const response = await axios.get("http://localhost:8080/get-solution-we-offer-data")
      console.log(response.data.getData)
      setSolution(response.data.getData)

  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  getSolutionDataFunc()
}, [])

  const technologiesDropdown = [{ title: "Hire Developers" }, { title: ".NET" }, { title: "JAVA" }, { title: "Python" }, { title: "PHP" }, { title: "Golang" }, { title: "C++" }, { title: "Node" }, { title: "JavaScript" }, { title: "React Native" }, { title: "Mobile" }, { title: "All Technologies" }, { title: "Cloud" }, { title: "SaaS Development Services" }, { title: "Internet of Things" }, { title: "Big Data" }, { title: "Data Science" }, { title: "Machine Learning" }, { title: "Artificial Intelligence" }, { title: "Blockchain" }, { title: "Virtual Reality" }, { title: "Augmented Reality" }, { title: "Computer Vision" }, { title: "Microsoft" }, { title: "Azure" }, { title: "Power Apps" }, { title: "Dynamics 365" }, { title: "SharePoint and Office 365" }, { title: "Power BI Consulting" }, { title: "Amazon Web services" }, { title: "Adobe Commerce" }, { title: "ServiceNow@" }, { title: "Pimcore" }];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setHideNavbar(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, setHideNavbar]);

  const handleDropdownToggle = (dropdown) => {
    if (activeItem === dropdown) {
      setActiveItem("");
      switch (dropdown) {
        case 'Services':
          setServiceDD(false);
          break;
        case 'Solutions':
          setSolutionsDD(false);
          break;
        case 'Technologies':
          setTechDD(false);
          break;
        case 'Industries':
          setIndustryDD(false);
          break;
        default:
          break;
      }
    } else {
      setActiveItem(dropdown);
      switch (dropdown) {
        case 'Services':
          setServiceDD(true);
          setSolutionsDD(false);
          setTechDD(false);
          setIndustryDD(false);
          break;
        case 'Solutions':
          setSolutionsDD(true);
          setServiceDD(false);
          setTechDD(false);
          setIndustryDD(false);
          break;
        case 'Technologies':
          setTechDD(true);
          setServiceDD(false);
          setSolutionsDD(false);
          setIndustryDD(false);
          break;
        case 'Industries':
          setIndustryDD(true);
          setServiceDD(false);
          setSolutionsDD(false);
          setTechDD(false);
          break;
        default:
          break;
      }
    }
  };


  const handleToggle = () => {
    setToggle(!toggle);
    setActiveItem(null);
  };

  return (
    <nav className={`navbar ${visible && !hideNavbar ? 'active' : 'hidden'} w-full p-1 z-50 box-border fixed top-0 md:p-2 ${visible && prevScrollPos > 10 ? 'bg-black opacity-[0.8]' : 'transparent opacity-[1]'} md:bg-black md:opacity-100`}>
      <div className={`p-[10px] w-[80vw] overflow-y-auto absolute top-[50px] left-[12vw] duration-1000 transition-height ease-in-out ${serviceDD ? 'h-auto opacity-100 dropdown' : 'h-0 opacity-0 pointer-events-none'}`} onMouseLeave={() => { setActiveItem(""); setServiceDD(false) }}>
        <div className="w-[95%] flex flex-wrap gap-[15px] mx-auto">
          {
            services.map((item, index) => (
              <div key={index} className='hover:text-[#FFA843] hover:border-b hover:border-[#FFA843] transition-border h-[25px] w-[18%] text-[12px] text-white flex justify-between items-center mb-[10px] font-normal cursor-pointer' onClick={() => { setActiveItem(""); setServiceDD(false); navigate(`service/${item.title}`) }}>
                <h4>{item.title}</h4> <h4 className='text-[20px]'></h4>
              </div>
            ))
          }
        </div>
        <div className='flex w-[95%] h-[200px] mx-auto text-white pt-[20px]'>
          <div className='w-[70%] h-[80%]'>
            <h2>By Client Type</h2>
            <div className='w-[90%] flex flex-wrap mt-[20px] ml-[30px] justify-between'>
              <div className='w-[30%]'>
                <button className='flex justify-between items-center bg-[#2C2C2C] h-[40px] px-[20px] hover:text-[#FFA843]'><span className='mr-[10px]' onClick={() => { navigate("/start-up-product-development"); setActiveItem(""); setServiceDD(false) }}>For Startup</span><span>{">"}</span></button>
                <p className='text-[14px] font-normal mt-[20px]'>Custom Software for Bussiness Goals</p>
              </div>
              <div className='w-[30%]'>
                <button className='flex justify-between items-center bg-[#2C2C2C] h-[40px] px-[20px] hover:text-[#FFA843]'><span className='mr-[10px]' onClick={() => { navigate("/enterprise"); setActiveItem(""); setServiceDD(false) }}>For Enterprises</span><span>{">"}</span></button>
                <p className='text-[14px] font-normal mt-[20px]'>End-to-end Automation Solution</p>
              </div>
              <div className='w-[30%]'>
                <button className='flex justify-between items-center bg-[#2C2C2C] h-[40px] px-[20px] hover:text-[#FFA843]'><span className='mr-[10px]' onClick={() => { navigate("/agencies"); setActiveItem(""); setServiceDD(false) }}>For Agencies</span><span>{">"}</span></button>
                <p className='text-[14px] font-normal mt-[20px]'>Expand with White-label Services</p>
              </div>
            </div>
          </div>
          <div className='w-[30%] flex flex-col justify-between'>
            <h2>What services do you want?</h2>
            <div className='flex items-center justify-around w-[100%] h-[30px] border-[1px] border-white'><input type="text" className='w-[80%] transperent bg-[#1E1E1E] outline-none' placeholder='eg. software development teams...' /> |
              <img src={searchIcon} alt="search" className='w-[10px] h-[10px]' />
            </div>
            <img src={clientby} alt="client by" />
          </div>
        </div>
      </div>
      <div className={`w-[80vw] overflow-y-auto absolute top-[50px] left-[12vw] py-[30px] pl-[20px] duration-1000 transition-height ease-in-out ${solutionsDD ? 'h-auto opacity-100 dropdown' : 'h-0 opacity-0 pointer-events-none'}`} onMouseLeave={() => { setActiveItem(""); setSolutionsDD(false) }}>
        <div className="w-[95%] flex flex-wrap gap-[15px] mx-auto">
          {
            solution.map((item, index) => (
              <div key={index} className='hover:border-b hover:border-[#FFA843] transition-border hover:text-[#FFA843] h-[25px] w-[18%] text-[12px] text-white flex justify-between items-center mb-[10px] font-normal cursor-pointer' onClick={() => { setActiveItem(""); setSolutionsDD(false); navigate(`solution/${item.title}`) }}>
                <h4>{item.title}</h4><h4 className='text-[20px]'>›</h4>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`w-[80vw] overflow-y-auto absolute top-[50px] left-[12vw] py-[30px] pl-[20px] duration-1000 transition-height ease-in-out ${techDD ? 'h-auto opacity-100 dropdown' : 'h-0 opacity-0 pointer-events-none'}`} onMouseLeave={() => { setActiveItem(""); setTechDD(false) }}>
        <div className="w-[95%] flex flex-wrap gap-[15px] mx-auto">
          {
            technologiesDropdown.map((item, index) => (
              <div key={index} className='hover:border-b hover:border-[#FFA843] transition-border hover:text-[#FFA843] h-[25px] w-[18%] text-[12px] text-white flex justify-between items-center mb-[10px] font-normal cursor-pointer' onClick={() => { setActiveItem(""); setTechDD(false); navigate(`technologies/${item.title}`) }}>
                <h4>{item.title}</h4><h4 className='text-[20px]'>›</h4>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`w-[80vw] overflow-y-auto absolute top-[50px] left-[12vw]  py-[30px] pl-[20px] duration-1000 transition-height ease-in-out ${industryDD ? 'h-auto opacity-100 dropdown' : 'h-0 opacity-0 pointer-events-none'}`} onMouseLeave={() => { setActiveItem(""); setIndustryDD(false) }}>
        <div className="w-[95%] flex flex-wrap gap-[15px] mx-auto">
          {
            industries.map((item, index) => (
              <div key={index} className='hover:border-b hover:border-[#FFA843] transition-border hover:text-[#FFA843] h-[25px] w-[18%] text-[12px] text-white flex justify-between items-center mb-[10px] font-normal cursor-pointer' onClick={() => { setActiveItem(""); setIndustryDD(false); navigate(`industries/${item.title}`) }}>
                <h4>{item.title}</h4><h4 className='text-[20px]'>›</h4>
              </div>
            ))
          }
        </div>
      </div>

      <div className='w-[100%] py-[2px] mx-auto flex justify-between items-center'>
        <div>
          <img src={ctlogo} alt='logo' className='h-[40px] md:h-[50px] cursor-pointer' onClick={() => navigate("/")} />
        </div>
        <div className='hidden md:block me-[20px]'>
          {toggle ? (
            <AiOutlineClose onClick={handleToggle} className='text-4xl text-white' />
          ) : (
            <AiOutlineMenu onClick={handleToggle} className='text-4xl text-white' />
          )}
        </div>
        <ul className='flex gap-10 text-white text-[14px] md:hidden'>
          <li className={`cursor-pointer ${activeItem === 'Services' ? 'active2' : ''} hover:text-[#FFA843]`} onClick={() => handleDropdownToggle('Services')}>Services</li>
          <li className={`cursor-pointer ${activeItem === 'Solutions' ? 'active2' : ''} hover:text-[#FFA843]`} onClick={() => handleDropdownToggle('Solutions')}>Solutions</li>
          <li className={`cursor-pointer ${activeItem === 'Technologies' ? 'active2' : ''} hover:text-[#FFA843]`} onClick={() => handleDropdownToggle('Technologies')}>Technologies</li>
          <li className={`cursor-pointer ${activeItem === 'Industries' ? 'active2' : ''} hover:text-[#FFA843]`} onClick={() => handleDropdownToggle('Industries')}>Industries</li>
          <li className={`cursor-pointer ${activeItem === 'Company' ? 'active2' : ''} hover:text-[#FFA843]`} onClick={() => setActiveItem('Company')}>Company</li>
        </ul>
        <div className='block md:hidden cursor-pointer relative overflow-hidden text-white border border-current px-3 py-1 group'>
          <span className='absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0'></span>
          <span className='relative z-10 text-white'>Get Started<span className='font-bold ml-[10px]'>&rarr;</span></span>
        </div>
        <ul className={`hidden md:block duration-1000 w-[100vw] h-[100vh] overflow-y-auto text-white fixed top-[70px] box-border p-5 ${toggle ? 'left-[0%] opacity-100 dark-bg' : 'left-[-100%] opacity-0 pointer-events-none'}`}>

          <li className='h-[50px] border-t border-[#FFA843] flex justify-between items-center' onClick={() => { setService(!service); setSolutions(false); setTechnology(false); setIndustry(false) }}><span>Services</span><span className='text-[20px]'>⌵</span></li>
          <ul className={`duration-1000 transition-height ease-in-out ${service ? "h-[40vh] overflow-y-auto" : "hidden"}`}>
            {services.map((item, index) => {
              return (
                <li key={index} className='h-[50px] border-t border-[white] flex justify-between items-center' onClick={()=>{setService(false);  navigate(`service/${item.title}`); setToggle(false)}}><span>{item.title}</span><span className='text-[20px]'>›</span></li>
              )
            })}
          </ul>
          <li className='h-[50px] border-t border-[#FFA843] flex justify-between items-center' onClick={() => { setService(false); setSolutions(!solutions); setTechnology(false); setIndustry(false) }}><span>Solutions</span><span className='text-[20px]'>⌵</span></li>
          <ul className={`duration-1000 transition-height ease-in-out ${solutions ? "h-[40vh] overflow-y-auto" : "hidden"}`}>
            {solution.map((item, index) => {
              return (
                <li key={index} className='h-[50px] border-t border-[white] flex justify-between items-center' onClick={()=>{setSolutions(false);  navigate(`solution/${item.title}`); setToggle(false)}}><span>{item.title}</span><span className='text-[20px]'>›</span></li>
              )
            })}
          </ul>
          <li className='h-[50px] border-t border-[#FFA843] flex justify-between items-center' onClick={() => { setService(false); setSolutions(false); setTechnology(!technology); setIndustry(false) }}><span>Technologies</span><span className='text-[20px]'>⌵</span></li>
          <ul className={`duration-1000 transition-height ease-in-out ${technology ? "h-[40vh] overflow-y-auto" : "hidden"}`}>
            {technologiesDropdown.map((item, index) => {
              return (
                <li key={index} className='h-[50px] border-t border-[white] flex justify-between items-center' onClick={()=>{setTechnology(false);  navigate(`technologies/${item.title}`); setToggle(false)}}><span>{item.title}</span><span className='text-[20px]'>›</span></li>
              )
            })}
          </ul>
          <li className='h-[50px] border-t border-[#FFA843] flex justify-between items-center' onClick={() => { setIndustry(false); setSolutions(false); setTechnology(false); setIndustry(!industry) }}><span>Industries</span><span className='text-[20px]'>⌵</span></li>
          <ul className={`duration-1000 transition-height ease-in-out ${industry ? "h-[40vh] overflow-y-auto" : "hidden"}`}>
            {industries.map((item, index) => {
              return (
                <li key={index} className='h-[50px] border-t border-[white] flex justify-between items-center' onClick={()=>{setService(false);  navigate(`industries/${item.title}`); setToggle(false)}}><span>{item.title}</span><span className='text-[20px]'>›</span></li>
              )
            })}
          </ul>
          <li className='h-[50px] border-t border-[#FFA843] flex justify-between items-center'><span>Company</span><span className='text-[20px]'>⌵</span></li>
          <li className='h-[50px] border-y border-[#FFA843] flex justify-between items-center'><span>By Client Type</span><span className='text-[20px]'>⌵</span></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
