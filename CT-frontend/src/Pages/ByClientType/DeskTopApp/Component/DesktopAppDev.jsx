
import React, { useRef } from "react";
import Slider from "react-slick";

const DesktopAppDev = () => {
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
        <div className="w-[100vw] h-[auto] mt-[100px] mb-[60px]">
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Desktop Application Development Services  </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Software development for startups is aimed at helping young companies translate their disruptive ideas into market-ready software products.</p>
            </div>
            <div className="w-[85%] mx-auto">
                <h1 className="text-[23px] font-bold mt-[40px] mb-[20px]">
                    Meet ScienceSoft, Your Reliable Development Partner
                </h1>
            </div>

            <div className="flex items-center justify-center ">
                <button onClick={handlePrevSlide} className="btn-prev text-[80px]">
                    ‹
                </button>
                <div className="ml-7 mr-3 w-[80vw]  text-[white] sm:w-[50%] h-[100%]">
                    <Slider ref={sliderRef} {...settings}>
                        {ctReliableForAi.map((items, i) => (
                            <div>
                                <div
                                    className="w-[220px] h-[100px] flex justify-center items-center md:h-[70px]"
                                    key={i}
                                >
                                    <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px]">
                                        {/* <img src={items.logo} alt={items.name} /> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button onClick={handleNextSlide} className="btn-next text-[80px]">
                    ›
                </button>
            </div>

            <div className="paretndiv w-[85%] mx-auto mt-[60px] ">
                <div className="flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px]">Software development for startups is aimed at helping young companies translate their disruptive ideas into market-ready software products.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px]">
                        75+ test engineers having 8+ years of experience on average.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px] font-semibold">
                        SO 9001-certified mature quality management system to 100% meet our
                        clients’ highest quality needs and expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DesktopAppDev;

