import React from 'react'
import Container from './Container'
import images1 from "../assets/images1.png"
import images2 from "../assets/images2.png"
import images3 from "../assets/images3.png"
import images4 from "../assets/images4.png"
import images5 from "../assets/images5.png"
import images6 from "../assets/images6.png"
import { FaCircleArrowRight } from "react-icons/fa6";

const FirstPart = () => {
  return (
    <section className='py-20'>
        <Container>
        <div className="w-full sm:w-[50%] text-center mx-auto">
    <h2 className='text-[40px] text-[#262626] font-EB_Garamond font-extrabold'>
        The Legal Practice Area
    </h2>
    <p className='text-[16px] text-[#707070] font-normal font-DMs'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
    </p>
</div>


            {/* First Row of Legal Areas */}
            <div className="flex flex-wrap justify-between mt-10">
                <div className="w-full sm:w-[48%] md:w-[32%] text-center flex flex-col items-center justify-center border-r border-b pb-5 hover:bg-[#f7f7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={images1} alt="Business Law" className="mx-auto hover:scale-110 transition-all duration-300 ease-in-out" />
                    <h2 className='text-[32px] text-[#262626] font-EB_Garamond font-bold mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        Business Law
                    </h2>
                    <p className='text-[16px] text-[#767676] font-DMs px-8 mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <h4 className='text-[#B68C5A] text-[30px] mt-5 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        <FaCircleArrowRight />
                    </h4>
                </div>

                <div className="w-full sm:w-[48%] md:w-[32%] text-center flex flex-col items-center justify-center border-r border-b pb-5 hover:bg-[#f7f7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={images2} alt="Criminal Law" className="mx-auto hover:scale-110 transition-all duration-300 ease-in-out" />
                    <h2 className='text-[32px] text-[#262626] font-EB_Garamond font-bold mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        Criminal Law
                    </h2>
                    <p className='text-[16px] text-[#767676] font-DMs px-8 mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <h4 className='text-[#B68C5A] text-[30px] mt-5 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        <FaCircleArrowRight />
                    </h4>
                </div>

                <div className="w-full sm:w-[48%] md:w-[32%] text-center flex flex-col items-center justify-center border-r border-b pb-5 hover:bg-[#f7f7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={images3} alt="Child Support" className="mx-auto hover:scale-110 transition-all duration-300 ease-in-out" />
                    <h2 className='text-[32px] text-[#262626] font-EB_Garamond font-bold mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        Child Support
                    </h2>
                    <p className='text-[16px] text-[#767676] font-DMs px-8 mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <h4 className='text-[#B68C5A] text-[30px] mt-5 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        <FaCircleArrowRight />
                    </h4>
                </div>
            </div>

            {/* Second Row of Legal Areas */}
            <div className="flex flex-wrap justify-between mt-10">
                <div className="w-full sm:w-[48%] md:w-[32%] text-center flex flex-col items-center justify-center border-r border-b pb-5 hover:bg-[#f7f7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={images4} alt="Education Law" className="mx-auto pt-10 hover:scale-110 transition-all duration-300 ease-in-out" />
                    <h2 className='text-[32px] text-[#262626] font-EB_Garamond font-bold mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        Education Law
                    </h2>
                    <p className='text-[16px] text-[#767676] font-DMs px-8 mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <h4 className='text-[#B68C5A] text-[30px] mt-5 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        <FaCircleArrowRight />
                    </h4>
                </div>

                <div className="w-full sm:w-[48%] md:w-[32%] text-center flex flex-col items-center justify-center border-r border-b pb-5 hover:bg-[#f7f7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={images5} alt="Divorce Law" className="mx-auto pt-10 hover:scale-110 transition-all duration-300 ease-in-out" />
                    <h2 className='text-[32px] text-[#262626] font-EB_Garamond font-bold mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        Divorce Law
                    </h2>
                    <p className='text-[16px] text-[#767676] font-DMs px-8 mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <h4 className='text-[#B68C5A] text-[30px] mt-5 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        <FaCircleArrowRight />
                    </h4>
                </div>

                <div className="w-full sm:w-[48%] md:w-[32%] text-center flex flex-col items-center justify-center border-r border-b pb-5 hover:bg-[#f7f7f7] hover:scale-105 transition-all duration-300 ease-in-out">
                    <img src={images6} alt="Tax Law" className="mx-auto pt-10 hover:scale-110 transition-all duration-300 ease-in-out" />
                    <h2 className='text-[32px] text-[#262626] font-EB_Garamond font-bold mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        Tax Law
                    </h2>
                    <p className='text-[16px] text-[#767676] font-DMs px-8 mt-2 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <h4 className='text-[#B68C5A] text-[30px] mt-5 hover:text-[#B68C5A] transition-all duration-300 ease-in-out'>
                        <FaCircleArrowRight />
                    </h4>
                </div>
            </div>

        </Container>
    </section>
  )
}

export default FirstPart;
