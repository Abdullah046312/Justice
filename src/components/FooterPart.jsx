import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { FaEnvelope } from 'react-icons/fa'; // Email icon from react-icons

const FooterPart = () => {
  return (
    <section className='bg-[#111111] py-16 text-[#CFCFCF]'>
        <Container>
            <div className="flex flex-wrap justify-between">
                
                {/* Logo and Description */}
                <div className="w-full sm:w-[25%] mb-8 sm:mb-0">
                    <img src={logo} alt="Logo" />
                    <p className='text-[18px] font-Poppins font-normal mt-5'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                </div>

                {/* Useful Links */}
                <div className="w-full sm:w-[20%] mb-8 sm:mb-0">
                    <h2 className='text-[24px] text-[#FFFF] font-EB_Garamond font-semibold'>Useful Links</h2>
                    <h4 className='text-[16px] font-Poppins font-normal mt-5'>Home</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>About Us</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>Cases</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>Blog</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>Contact Us</h4>
                </div>

                {/* Contact Information */}
                <div className="w-full sm:w-[25%] mb-8 sm:mb-0">
                    <h2 className='text-[24px] text-[#FFFF] font-EB_Garamond font-semibold'>Contact Now</h2>
                    <h4 className='text-[16px] font-Poppins font-normal mt-5'>555 4th St NW, Washington</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>DC 20530, United States</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>+88 01750 000 000</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>+88 01750 000 000</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>info@gmail.com</h4>
                    <h4 className='text-[16px] font-Poppins font-normal mt-2'>info@gmail.com</h4>
                </div>

                {/* Subscribe Section */}
                <div className="w-full sm:w-[20%]">
                    <h2 className='text-[24px] text-[#FFFF] font-EB_Garamond font-semibold'>Subscribe</h2>
                    <h4 className='text-[16px] font-Poppins font-normal mt-5'>
                        Subscribe for our latest & Articles. We Won’t Give You Spam Mails
                    </h4>
                    <div className="relative mt-5">
                        <input
                            className='text-[16px] font-EB_Garamond font-semibold h-[50px] w-full sm:w-[250px] bg-[#FFFF] pl-12 pr-5 mt-2 outline-none rounded-lg'
                            type="text"
                            placeholder='Email Address'
                        />
                        <FaEnvelope className='absolute left-4 top-1/2 transform -translate-y-1/2 text-[#707070]' size={20} />
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default FooterPart;
