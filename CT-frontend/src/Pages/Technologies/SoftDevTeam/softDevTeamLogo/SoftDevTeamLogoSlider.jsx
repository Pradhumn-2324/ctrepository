import React, { useRef } from 'react'
import Slider from "react-slick";
const SoftDevTeamLogoSlider = () => {
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
                    autoplay: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
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
        <div className='w-[100vw]'>
            {/* Here we will add heading */}

            <h1 className="text-3xl font-bold mt-[40px] mb-[50px] mx-[110px] md:mx-[20px] md:text-[24px]">
                What Makes CT a Reliable AI Software Development Company
            </h1>

            <div className="flex items-center justify-between mx-[110px] md:mx-[20px]">
                <button onClick={handlePrevSlide} className="btn-prev text-[50px] font-normal md:hidden">
                    ‹
                </button>
                <div className="w-[75vw] text-[white] md:w-[85vw]">
                    <Slider ref={sliderRef} {...settings}>
                        {ctReliableForAi.map((items, i) => (
                            <div>
                                <div
                                    className="w-[200px] h-[100px] flex items-center md:w-[170px] md:h-[70px] md:ml-[10px]"
                                    key={i}
                                >
                                    <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center text-[black]">
                                        Company Logo
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

            <div className="paretndiv w-[85vw] md:w-[90vw] mx-auto mt-[60px] md:mx-[20px]">
                <div className="w-[100%] flex gap-[10px]">
                    <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                    <p className="w-[95%] text-[14px] md:text-[16px] font-semibold">34 years in software testing services.</p>
                </div>

                <div className="w-[100%] mt-[10px] flex gap-[10px]">
                    <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                    <p className="w-[95%] text-[14px] md:text-[16px] font-semibold">
                        75+ test engineers having 8+ years of experience on average.
                    </p>
                </div>

                <div className="w-[100%] mt-[10px] flex gap-[10px]">
                    <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                    <p className="w-[95%] text-[14px] font-semibold md:text-[16px]">
                        SO 9001-certified mature quality management system to 100% meet our
                        clients’ highest quality needs and expectations.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SoftDevTeamLogoSlider