import React from 'react'
import Container from './Container'
import images9 from "../assets/images9.png"
import images10 from "../assets/images10.png"
import images11 from "../assets/images11.png"
import images12 from "../assets/images12.png"

const FourthPart = () => {
  return (
    <section className='py-10'>
      <Container>
        {/* Title and Description Section */}
        <div className="w-full sm:w-[50%] text-center mx-auto">
          <h2 className='text-[40px] text-[#262626] font-EB_Garamond font-extrabold'>
            Contact With Us
          </h2>
          <p className='text-[16px] text-[#707070] font-normal font-DMs'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

        {/* Flex Section for Address, Call, Email, and Working Hours */}
        <div className="flex flex-wrap justify-between mt-20">
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[48%] bg-[#F3F3F3] py-5">
            <div className="w-full flex justify-center gap-10 mx-auto text-center border-b-4">
              <div className="flex flex-col items-center border-r-4 pb-5 pr-10 h-[200px] w-[200px]">
                <img className='mt-10' src={images9} alt="" />
                <h2 className='text-[24px] text-[#262626] font-EB_Garamond font-bold mt-2'>Address</h2>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>A108 Adam Street,</p>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'> New York, NY 535022</p>
              </div>
              <div className="flex flex-col items-center h-[200px] w-[200px]">
                <img className='mt-10' src={images10} alt="" />
                <h2 className='text-[24px] text-[#262626] font-EB_Garamond font-bold mt-2'>Call Us</h2>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>+88 01750 00 00 00</p>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>+88 01750 00 00 00</p>
              </div>
            </div>
            <div className="w-full flex justify-center gap-10 mx-auto text-center mt-5">
              <div className="flex flex-col items-center border-r-4 pb-5 pr-10 h-[200px] w-[200px]">
                <img className='mt-10' src={images11} alt="" />
                <h2 className='text-[24px] text-[#262626] font-EB_Garamond font-bold mt-2'>Email Us</h2>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>info@gmail.com</p>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>info@gmail.com</p>
              </div>
              <div className="flex flex-col items-center h-[200px] w-[200px]">
                <img className='mt-10' src={images12} alt="" />
                <h2 className='text-[24px] text-[#262626] font-EB_Garamond font-bold mt-2'>Working Hours</h2>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>Mon-Fri: 9AM to 5PM</p>
                <p className='text-[16px] text-[#707070] font-Poppins font-normal'>Sunday: 9AM to 1 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full sm:w-[45%] mt-5 lg:mt-0 ">
            <input className='h-[72px] w-full text-[#707070] text-[16px] bg-[#F3F3f3] outline-none rounded-lg pl-5' type="text" placeholder='Your Name' />
            <input className='h-[72px] w-full text-[#707070] text-[16px] bg-[#F3F3f3] outline-none rounded-lg pl-5 mt-5' type="text" placeholder='Your Email' />
            <input className='h-[72px] w-full text-[#707070] text-[16px] bg-[#F3F3f3] outline-none rounded-lg pl-5 mt-5' type="text" placeholder='Subject' />
            <input className='h-[100px] w-full text-[#707070] text-[16px] bg-[#F3F3f3] outline-none rounded-lg pl-5 mt-5' type="text" placeholder='Your Message' />
            <button className='h-[72px] w-full text-[#FFFF] text-[20px] font-EB_Garamond font-bold bg-[#B68C5A] outline-none rounded-lg pl-5 mt-5 hover:bg-[#A57C4A]'>
              Send Message
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FourthPart;
