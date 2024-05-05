
import React, { useRef } from "react";
import Slider from "react-slick";

const WhyChooseCT = () => {
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
                <h1 className="text-[33px] font-bold mt-[40px] mb-[20px] md:text-[24px] md:text-[#3970F0]">
                    Why Choose CT as a QA and Software Testing Company</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>CT's Trusted Partnership: With a proven track record of expertise and dedication, we deliver innovative solutions, personalized support, and strategic insights, ensuring your success in the ever-evolving tech landscape.</p>
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

            <div className="w-[85%] py-[30px] md:py-[30px] md:px-2 mx-auto md:w-full">
                <div className="flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[15px] md:h-[15px] md:mt-[5px]"></div>
                    <p className="text-[16px]">34 years in software testing services.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[21px] md:h-[15px] md:mt-[7px]"></div>
                    <p className="text-[16px]">
                        75+ test engineers having 8+ years of experience on average.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[38px] md:h-[15px] md:mt-[7px]"></div>
                    <p className="text-[16px]">
                        SO 9001-certified mature quality management system to 100% meet our clients’ highest quality needs and expectations.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseCT;

