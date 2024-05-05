
import React, { useRef } from "react";
import Slider from "react-slick";

const Scope = () => {
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
            <div className="w-[85%] mx-auto py-[20px]">
                <h1 className="text-3xl font-bold md:text-[24px] md:text-[blue]">
                    Scope of IT Components We Tackle</h1>
                <p>ScienceSoft can take care of all your IT infrastructure components – from daily monitoring and management to long-term continuous optimization and evolution.</p>
            </div>

            <div className="w-[85%] mx-auto">
                <h1 className="text-3xl font-bold md:text-[24px] md:text-[blue] md:mt-5">
                    What Makes ScienceSoft a Reliable Tech Partner </h1>
                <p> CT's Trusted Partnership: With a proven track record of expertise and dedication, we deliver innovative solutions, personalized support, and strategic insights, ensuring your success in the ever-evolving tech landscape. </p>

            </div>

            <div className="w-[85%] flex items-center justify-around mx-[100px] md:w-[100%] md:mx-auto">
                <button onClick={handlePrevSlide} className="btn-prev text-[80px] md:hidden">
                    ‹
                </button>
                <div className="ml-7 mr-3 w-[80vw]  text-[white] md:w-[100%] md:m-0 h-[100%]">
                    <Slider ref={sliderRef} {...settings}>
                        {ctReliableForAi.map((items, i) => (
                            <div>
                                <div
                                    className="w-[210px] h-[100px] flex justify-center items-center md:h-[70px] md:mx-auto md:w-[95%]"
                                    key={i}
                                >
                                    <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px] text-[black]">
                                        <img src={items.logo} alt={items.name} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <button onClick={handleNextSlide} className="btn-next text-[80px] md:hidden">
                    ›
                </button>
            </div>

            <div className="paretndiv w-[85%] mx-auto mt-[60px] ">
                <div className="flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[37px] md:h-[14px] md:mt-[5px]"></div>
                    <p className="text-[16px]">Practical knowledge of 30+ industries, including healthcare, BFSI, retail, ecommerce, manufacturing, telecoms, oil & gas.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[43px] md:h-[14px] md:mt-[5px]"></div>
                    <p className="text-[16px]">
                        Deep expertise in AI-associated services: since 2005 in business intelligence and data warehousing, since 2013 in big data and image analysis.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[40px] md:h-[14px] md:mt-[5px]"></div>
                    <p className="text-[16px]">
                        Expertise in industry-specific standards (HIPAA, GAMP, PCI DSS, GLBA, etc.) to create compliant AI solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default Scope;

