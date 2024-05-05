
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
        <div className="w-[100vw] h-[auto] py-[10px] md:py-[10px]">
            <div className="w-[85%] mx-auto md:w-full md:px-3">
                <h1 className="text-[33px] font-bold mt-[40px] mb-[20px] md:text-[24px]">
                Why Choose Conscience Tech for Your Cloud Computing services</h1>
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
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[43px] md:mt-[7px]"></div>
                    <p className="text-[16px]">Practical knowledge of 30+ industries, including healthcare, BFSI, retail, ecommerce, manufacturing, telecoms, oil & gas.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[46px] md:mt-[7px]"></div>
                    <p className="text-[16px]">
                        Deep expertise in AI-associated services: since 2005 in business intelligence and data warehousing, since 2013 in big data and image analysis.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[43px] md:mt-[7px]"></div>
                    <p className="text-[16px]">
                        Expertise in industry-specific standards (HIPAA, GAMP, PCI DSS, GLBA, etc.) to create compliant AI solutions.                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseCT;

