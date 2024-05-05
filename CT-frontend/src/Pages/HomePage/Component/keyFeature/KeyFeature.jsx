import React, { useRef } from 'react';
import Slider from 'react-slick';
import developmemnt from '../assets/keyFeature/developement.png';
import deliveryService from '../assets/keyFeature/delivaryServices.png';
import services from '../assets/keyFeature/services.png';
import dedicatedIdea from '../assets/keyFeature/dedicatedIdea.png';
import leftArr from '../assets/keyFeature/leftArr.png';
import rightArr from '../assets/keyFeature/rightArr.png';
import prev from '../assets/keyFeature/prev.png'
import next from '../assets/keyFeature/next.png'
import "./keyfeature.css"
const KeyFeature = () => {
  const sliderRef = useRef(null);
  const keyFeatureData = [{
    image: developmemnt,
    title: "Development",
    point1: { name: "Enhancement", desc: "During Discovery, Designing and Development phases, our technical team is always there to provide suggestions and edits to improvise their product in the best possible manner." },
    point2: { name: "Client Centric Development", desc: "We craft the client's needs on web, mobile, and blockchain to tailor the solutions and enhance growth of the businesses." },
    point3: { name: "Agile Development", desc: "We follow the Agile Development process that helps us to deliver the project with utmost quality and solid product for reliable and scalable business." }
  }, {
    image: deliveryService,
    title: "Services",
    point1: { name: "Excellent Support", desc: "We are always there to assist our clients in every possible way to meet client's expectations and end needs." },
    point2: { name: "Data Backup", desc: "The backups are the best options and we carefully maintain our clients project backups to deal with misfortunes in the best manner." },
    point3: { name: "Data Protection", desc: "By signing an NDA, our company ensures the utmost safety of all your private data. We deliver best-rated products to maintain confidentiality." }
  }, {
    image: services,
    title: "Delivery Services",
    point1: { name: "Quality Deliverance", desc: "We believe in delivering quality products to our clients by assuring all their project specifications at the best industry competitive price." },
    point2: { name: "Analytics and Reporting", desc: "Generate reports on delivery performance, customer satisfaction, and other relevant metrics.Use data analytics to optimize routes and operations." },
    point3: { name: "User-Friendly Interface", desc: "Prioritize user needs for effective UI/UX design solutions." }
  }, {
    image: dedicatedIdea,
    title: "Dedicated Idea",
    point1: { name: "PM+ CTO Assistance", desc: "PM+ CTO Assistance delivers dedicated teams for project management and technology leadership, ensuring optimal collaboration and successful project outcomes." },
    point2: { name: "Excellent Support", desc: "We are always there to assist our clients in every possible way to meet client's expectations and end needs." },
    point3: { name: "Dedicated Development Team", desc: "Our skilled team leverage projects to provide best results.The team dedicates their every effort and does not look back until it's accomplished." }
  }];

  const settings = {
    dots:false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
<div className='w-[100vw] h-auto pt-[60px] md:pt-[30px] md:pb-[50px] relative box-border'>
    <div className='h-[90vh] md:h-auto'>
      <Slider {...settings} ref={sliderRef}>
        {keyFeatureData && keyFeatureData.map((item, i) => {
          return (
            <div key={i}>
              <div className='flex w-[100vw] h-[90vh] md:flex-col md:h-[80vh]'>
                <div className='w-[40%] h-[100%] md:hidden' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                </div>
                <div className='w-[60%] h-[100%] md:w-[100vw] md:h-[70%]'>
                  <div className='w-[90%] md:w-[100%] mx-auto h-[15%] flex md:mt-2 box-border pt-[10px] box-border'>
                    <div>
                      <h2 className='font-bold text-3xl md:text-xl md:ms-4 text-[#3970F0]'>Our Key Features</h2>
                      <p className='text-[16px] w-[90%] mt-1 md:text-[14px] md:mx-auto'>Services That We Deliver Makes Us Dignified As One of The Top Software Development Companies.</p>
                    </div>
                  </div>
                  <h2 className='font-semibold text-2xl ms-[50px] mt-[20px] md:ms-[20px] md:text-[18px] md:mt-[10px]'> {item.title} </h2>
                  <div className='hidden md:block w-[92%] h-[46%] mx-auto' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                  </div>
                  <div className='w-[90%] h-auto grid grid-cols-3 mx-auto md:flex flex-col gap-[30px] md:gap-[20px] md:ms-5 mt-[20px]'>
                    <div className='col-start-1 col-span-2 flex md:flex-1 md:w-[100%] h-fit'>
                      <h1 className='text-[#FF7E20] text-3xl md:text-[16px] font-semibold'> 01 </h1>
                      <div>
                        <h3 className='font-semibold text-xl ml-4 md:text-[16px]'>{item.point1.name}</h3>
                        <p className='w-3/4 ml-4 md:w-[96%] md:text-[12px] text-[14px]'>{item.point1.desc}</p>
                      </div>
                    </div>
                    <div className='col-start-2 col-span-2 flex md:flex-1 md:w-[100%] h-fit'>
                      <h1 className='text-[#FF7E20] text-3xl font-semibold md:text-[16px]'> 02 </h1>
                      <div>
                        <h3 className='font-semibold text-xl ml-4 md:text-[16px]'>{item.point2.name}</h3>
                        <p className='w-3/4 ml-4 md:w-[96%] md:text-[12px] text-[14px]'>{item.point2.desc}</p>
                      </div>
                    </div>
                    <div className='col-start-1 col-span-2 flex md:flex-1 md:w-[100%] h-fit'>
                      <h1 className='text-[#FF7E20] text-3xl font-semibold md:text-[16px]'> 03 </h1>
                      <div>
                        <h3 className='font-semibold text-xl ml-4 md:text-[16px]'>{item.point3.name}</h3>
                        <p className='w-3/4 ml-4 md:w-[96%] md:text-[12px] text-[14px]'>{item.point3.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
      <div className='flex gap-[20px] md:hidden block absolute top-[80px] right-[30px]'>
        <img
          src={rightArr}
          alt=""
          className={`w-[35px] h-[35px] hover-effect cursor-pointer scale-y-110 shadow-sm shadow-slate-900 active:bg-slate-800`}
          onClick={goToPrevSlide}
        />
        <img
          src={leftArr}
          alt=""
          className={`w-[35px] h-[35px] hover-effect cursor-pointer scale-y-110 shadow-sm shadow-slate-900 active:bg-slate-800`}
          onClick={goToNextSlide}
        />
      </div>
      <div className='hidden w-[100%] md:flex gap-[20px] text-black bg-white justify-end pe-[20px] box-border'>
        <button className="w-[80px] h-[45px] shadow-sm shadow-[grey] p-1" onClick={goToPrevSlide}>&#9666; {" "}<span>PREV</span></button>
        <button className="w-[80px] h-[45px] shadow-sm shadow-[grey] p-1" onClick={goToNextSlide}><span>NEXT</span>{" "}&#9656;</button>
      </div>
    </div>
    </div>
    
  )
}

export default KeyFeature;
