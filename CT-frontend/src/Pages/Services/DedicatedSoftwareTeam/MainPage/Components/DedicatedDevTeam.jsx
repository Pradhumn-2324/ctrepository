
import React, { useRef } from "react";
import Slider from "react-slick";

const DedicatedDevTeam = () => {
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
        <div className="w-[100vw] h-[auto] mt-[100px] mb-[60px] md:mt-[30px] md:hidden">
            <div className="w-[85%] mx-auto md:w-[100%] md:p-2">
                <h1 className="text-[30px] font-bold mt-[40px] mb-[20px] md:text-[24px]">
                DedicatedDevTeam</h1>
                <p>Dedicated development team model is aimed to help businesses speed up their development initiatives and achieve significant cost savings by hiring a reliable team of pre-vetted IT talents. A mature tech partner with 34 years in IT, ScienceSoft assembles tailored dedicated teams that efficiently address skill gaps and deliver high-quality results with no delays or collaboration issues.</p>
            </div>

            <div className="w-[85%] mx-auto md:w-[90%]">
                <h1 className="text-[30px] font-bold mt-[40px] mb-[20px] md:text-[24px]">
                What Makes CT a Reliable AI Software Development Company </h1>

            </div>

            <div className="flex items-center justify-center ">
                <button onClick={handlePrevSlide} className="btn-prev text-[80px]">
                    ‹
                </button>
                <div className="ml-7 mr-7 w-[80vw] text-[white] sm:w-[50%] h-[100%] mx-auto">
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

            <div className="paretndiv w-[85%] mx-auto mt-[60px] md:w-[90%]">
                <div className="flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px]">AI consultants and developers with 7–20 years of relevant experience and competencies in major ML technologies, frameworks, and libraries.</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px]">
                    Deep expertise in AI-associated services: since 2005 in business intelligence and data warehousing, since 2013 in big data and image analysis.
                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px]">
                    Expertise in industry-specific standards (HIPAA, GAMP, PCI DSS, GLBA, etc.) to create compliant AI solutions.</p>
                </div>
            </div>

            {/* <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px] font-bold">
                    Knowing the peculiarities of major public cloud platforms, including <span className="font-bold"> Amazon Web Services, Microsoft Azure, and Google Cloud Platform inside out. </span> 
                    </p>
                </div> */}

        </div>
    );
};

export default DedicatedDevTeam;

