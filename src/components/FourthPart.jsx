import React from 'react'
import Container from './Container'
import images9 from "../assets/images9.png"
import images10 from "../assets/images10.png"
import images11 from "../assets/images11.png"
import images12 from "../assets/images12.png"

const FourthPart = () => {
  return (
   <section>
    <Container>
    <div className="w-full sm:w-[50%] text-center mx-auto">
          <h2 className='text-[40px] text-[#262626] font-EB_Garamond font-extrabold'>
          Contact With Us
          </h2>
          <p className='text-[16px] text-[#707070] font-normal font-DMs'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>
        </div>

              <div className="flex p-20 justify-between">
                  <div className="w-[40%] text-center mx-auto  border-r-4  ">
                      <div className="bg-[#F3F3F3]  text-center border-b-4">
                          <div className="flex flex-col items-center justify-center p-6">
                              <img src={images9} alt="Address" className=" mx-auto mb-4" />
                              <h2 className="text-2xl font-semibold text-[#262626]">Address</h2>
                              <p className="text-lg text-[#707070]">
                                  A108 Adam Street,
                                  <br />
                                  New York, NY 535022
                              </p>
                          </div>
                      </div>
                      <div className="bg-[#F3F3F3]  text-center ">
                          <div className="flex flex-col items-center justify-center p-6  ">
                              <img src={images11} alt="Address" className=" mx-auto mb-4" />
                              <h2 className="text-2xl font-semibold text-[#262626]">Email Us</h2>
                              <p className="text-lg text-[#707070]">
                                  A108 Adam Street,
                                  <br />
                                  New York, NY 535022
                              </p>
                          </div>
                      </div>



                  </div>
                  <div className="w-[40%] ">
                      <div className="bg-[#F3F3F3]  text-center border-b-4">
                          <div className="flex flex-col items-center justify-center p-6">
                              <img src={images10} alt="Address" className=" mx-auto mb-4" />
                              <h2 className="text-2xl font-semibold text-[#262626]">Call Us</h2>
                              <p className="text-lg text-[#707070]">
                                  A108 Adam Street,
                                  <br />
                                  New York, NY 535022
                              </p>
                          </div>
                      </div>
                      <div className="bg-[#F3F3F3]  text-center">
                          <div className="flex flex-col items-center justify-center p-6">
                              <img src={images12} alt="Address" className=" mx-auto mb-4" />
                              <h2 className="text-2xl font-semibold text-[#262626]">Working Hours</h2>
                              <p className="text-lg text-[#707070]">
                                  A108 Adam Street,
                                  <br />
                                  New York, NY 535022
                              </p>
                          </div>
                      </div>

                  </div>


                  <div className="w-[45%]">
                      <input className='w-[80%] h-[50px] bg-[#F3F3F3]' type="text" placeholder='Your Name' />
                      <input className='w-[80%] h-[50px] bg-[#F3F3F3] mt-5' type="text" placeholder='Your Email' />
                      <input className='w-[80%] h-[50px] bg-[#F3F3F3] mt-5' type="text" placeholder='Your Subject' />
                      <input className='w-[80%] h-[250px] bg-[#F3F3F3] mt-5' type="text" placeholder='Your Message' />

                      <button className='w-full h-[50px] bg-[#B68C5A] '>Send Message</button>
                  </div>
              </div>
    </Container>
   </section>
  )
}

export default FourthPart
