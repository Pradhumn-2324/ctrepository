
import React, { useRef } from "react";

const OurUIUX = () => {
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
            <div className="w-[85%] mx-auto md:w-[95%]">
                <h1 className="text-[23px] font-bold mt-[40px] mb-[20px] md:font-[24px]">
                    Our UI UX Design Services</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution. In each of its web design projects, ScienceSoft shrewdly balances the technology, visual aesthetics and business objectives, bringing you fast-loading, impactful and high-converting online experiences.</p>
            </div>
            <div className="w-[85%] mx-auto md:w-[95%]">
                <h1 className="text-[23px] font-bold mt-[40px] mb-[20px] md:font-[24px]">
                    Why Choose ScienceSoft as Your Web Design Company</h1>

            </div>

            <div className="paretndiv w-[85%] mx-auto mt-[60px] md:w-[95%]">
                <div className="flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[25px] md:mt-[7px]"></div>
                    <p className="text-[16px]">24 years in web development and design, 1,900+ web projects</p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-[16px]">
                        130+ testimonials from our valued clients.                    </p>
                </div>

                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[65px] md:mt-[7px]"></div>
                    <p className="text-[16px] font-semibold">
                        Tailoring web design to your business goals: we can deliver a solution that helps boost user engagement, increase brand awareness, or optimize web UX on mobile.
                    </p>
                </div>
                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:w-[48px] md:mt-[7px]"></div>
                    <p className="text-[16px] font-semibold">
                        Adhering to the WCAG 2.2 design principles and guidelines to build websites accessible to people with disabilities.
                    </p>
                </div>
                <div className="mt-[10px] flex gap-[10px]">
                    <div className="w-[18px] h-[18px] bg-violet-300 md:mt-[7px]"></div>
                    <p className="text-[16px] font-semibold">
                    Adjusting web design to your SEO requirements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurUIUX;

