import React, { useRef } from 'react'
import Slider from "react-slick";

const InsuranceSlider = () => {
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
                    slidesToShow: 5,
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
        <div className='w-[100vw] py-[60px]'>
            {/* Here we will add heading */}

            <h1 className="text-3xl font-bold mb-[50px] mx-[110px]">
                Why Choose CT as a QA and Software Testing Company
            </h1>

            <div className="flex items-center justify-center ">
                <button onClick={handlePrevSlide} className="btn-prev text-[50px] font-normal">
                    ‹
                </button>
                <div className="ml-7 mr-3 w-[80vw] text-[white] sm:w-[50%]">
                    <Slider ref={sliderRef} {...settings}>
                        {ctReliableForAi.map((items, i) => (
                            <div>
                                <div
                                    className="w-[200px] h-[100px] flex justify-center items-center md:h-[70px]"
                                    key={i}
                                >
                                    <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px] text-[black]">
                                        Company Logo
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button onClick={handleNextSlide} className="btn-next text-[50px] font-normal">
                    ›
                </button>
            </div>

            <div className="paretndiv w-[85vw] mx-auto mt-[60px]">
                <div className="flex gap-[10px]">
                    <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                    <p className="text-[14px]">34 years in software testing services.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                    <p className="text-[14px]">
                        75+ test engineers having 8+ years of experience on average.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                    <p className="text-[14px] font-semibold">
                        ISO 9001-certified mature quality management system to 100% meet our clients’ highest quality needs and expectations.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InsuranceSlider