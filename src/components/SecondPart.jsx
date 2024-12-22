import React, { useRef } from 'react';
import Container from './Container';
import images7 from "../assets/images7.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SecondPart = () => {
  // Create a ref for the slick slider instance
  const sliderRef = useRef(null);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 slide on default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Custom arrows will be used instead of default arrows
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // 2 slides on tablets
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to go to the previous slide
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Function to go to the next slide
  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section>
      <Container>
        <div className="w-full sm:w-[50%] text-center mx-auto">
          <h2 className='text-[40px] text-[#262626] font-EB_Garamond font-extrabold'>
            What Our Client Say
          </h2>
          <p className='text-[16px] text-[#707070] font-normal font-DMs'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        <div className="mt-10 relative">
          {/* Pass the ref to the slider component */}
          <Slider {...settings} ref={sliderRef}>
            <div className="relative">
              <img src={images7} alt="Client 1" className="w-full h-[700px] object-cover rounded-lg" />
              {/* Custom previous arrow */}
              <div className="absolute left-[20px] top-[50%] translate-y-[-50%] z-10">
                <div
                  className="h-[50px] w-[50px] rounded-full bg-[#00000033] cursor-pointer text-center leading-[45px]"
                  onClick={handlePrevClick}
                >
                  <FaLongArrowAltLeft className='inline-block text-[30px] text-white font-bold' />
                </div>
              </div>
              {/* Custom next arrow */}
              <div className="absolute right-[20px] top-[50%] translate-y-[-50%] z-10">
                <div
                  className="h-[50px] w-[50px] rounded-full bg-[#00000033] cursor-pointer text-center leading-[45px]"
                  onClick={handleNextClick}
                >
                  <FaLongArrowAltRight className='inline-block text-[30px] text-white font-bold' />
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={images7} alt="Client 2" className="w-full h-[700px] object-cover rounded-lg" />
              <div className="absolute left-[20px] top-[50%] translate-y-[-50%] z-10">
                <div
                  className="h-[50px] w-[50px] rounded-full bg-[#00000033] cursor-pointer text-center leading-[45px]"
                  onClick={handlePrevClick}
                >
                  <FaLongArrowAltLeft className='inline-block text-[30px] text-white font-bold' />
                </div>
              </div>
              <div className="absolute right-[20px] top-[50%] translate-y-[-50%] z-10">
                <div
                  className="h-[50px] w-[50px] rounded-full bg-[#00000033] cursor-pointer text-center leading-[45px]"
                  onClick={handleNextClick}
                >
                  <FaLongArrowAltRight className='inline-block text-[30px] text-white font-bold' />
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={images7} alt="Client 3" className="w-full h-[700px] object-cover rounded-lg" />
              <div className="absolute left-[20px] top-[50%] translate-y-[-50%] z-10">
                <div
                  className="h-[50px] w-[50px] rounded-full bg-[#00000033] cursor-pointer text-center leading-[45px]"
                  onClick={handlePrevClick}
                >
                  <FaLongArrowAltLeft className='inline-block text-[30px] text-white font-bold' />
                </div>
              </div>
              <div className="absolute right-[20px] top-[50%] translate-y-[-50%] z-10">
                <div
                  className="h-[50px] w-[50px] rounded-full bg-[#00000033] cursor-pointer text-center leading-[45px]"
                  onClick={handleNextClick}
                >
                  <FaLongArrowAltRight className='inline-block text-[30px] text-white font-bold' />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default SecondPart;
