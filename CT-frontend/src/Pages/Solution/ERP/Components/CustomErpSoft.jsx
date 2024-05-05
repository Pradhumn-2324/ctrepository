
import React, { useRef } from "react";
import Slider from "react-slick";

const CustomErpSoft = () => {
    const sliderRef = useRef(null);

    const ctReliableForAi = [
        { name: "nissan", logo: "" },
        { name: "jpMorgan", logo: "" },
        { name: "cocaCola", logo: "" },
        { name: "royal", logo: "" },
        { name: "nissan", logo: "" },
        { name: "jpMorgan", logo: "" },
        { name: "cocaCola", logo: "" },
        { name: "royal", logo: "" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false, // Disable autoplay
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="w-[100vw] h-[auto] py-[60px] md:py-[30px]">
            <div className="w-[85%] mx-auto md:w-full md:px-3">
                <h1 className="text-[30px] font-bold mt-[40px] mb-[20px] md:text-[24px]">
                    Custom ERP Software Development Services</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Custom ERP is designed to provide tailor-made functionality to address an enterprise’s unique operational and strategic needs. ScienceSoft's custom ERP software development is aimed to build a scalable business-tailored system that integrates all business management functions and facilitates data-driven decision-making.</p>
            </div>

            <div className="w-[85%] mx-auto md:w-full md:px-3">
                <h1 className="text-[30px] font-bold mt-[40px] mb-[20px] md:text-[24px]">
                    What Makes CT a Reliable AI Software Development Company</h1>

            </div>

            <div className="w-[85%] flex items-center justify-around mx-[100px] md:w-[100vw] md:mx-auto">
                <button onClick={handlePrevSlide} className="btn-prev text-[80px] md:hidden">
                    ‹
                </button>
                <div className="w-[85%] md:w-[95%]">
                    <Slider ref={sliderRef} {...settings}>
                        {ctReliableForAi.map((items, i) => (
                            <div>
                                <div
                                    className="w-[210px] h-[100px] flex justify-center items-center md:h-[70px] md:w-[100%]"
                                    key={i}
                                >
                                    <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px] text-[black]">
                                        {/* <img src={items.logo} alt={items.name} /> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button onClick={handleNextSlide} className="btn-next text-[50px] font-normal md:hidden">
                    ›
                </button>
            </div>

            <div className="paretndiv w-[85%] mx-auto mt-[60px] md:w-[95%]">
                <div className="flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[36px] md:h-[12px] md:mt-2"></div>
                    <p className="text-[16px]">AI consultants and developers with 7–20 years of relevant experience and competencies in major ML technologies, frameworks, and libraries.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[36px] md:h-[12px] md:mt-2"></div>
                    <p className="text-[16px]">
                        Deep expertise in AI-associated services: since 2005 in business intelligence and data warehousing, since 2013 in big data and image analysis.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[30px] md:h-[12px] md:mt-2"></div>
                    <p className="text-[16px]">
                        Expertise in industry-specific standards (HIPAA, GAMP, PCI DSS, GLBA, etc.) to create compliant AI solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default CustomErpSoft;

