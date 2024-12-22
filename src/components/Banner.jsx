import React from 'react'
import Container from './Container'

const Banner = () => {
  return (
    <section>
      <Container>
        <div className="bg-bannerimg w-full h-[700px] bg-no-repeat bg-cover">
          <h2 className="text-[48px] sm:text-[72px] font-EB_Garamond font-extrabold text-center text-[#FFF] pt-[104px] px-[20px] sm:px-[100px]">
            We Provide Effective
          </h2>
          <h2 className="text-[48px] sm:text-[72px] font-EB_Garamond font-extrabold text-center text-[#FFF] px-[20px] sm:px-[100px]">
            Legal Solutions
          </h2>
          <p className="text-[18px] sm:text-[22px] font-DMs font-normal text-center text-[#E7E7E7] px-[20px] sm:px-[300px]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>

          <div className="flex justify-center gap-5 mt-10 px-[20px] sm:px-0">
            <input
              className="w-full sm:w-[500px] h-[64px] rounded-lg px-5 border-none outline-none focus:ring-0"
              type="text"
              placeholder="Search your services"
            />
            <input
              className="w-full sm:w-[150px] h-[64px] rounded-lg text-center bg-[#B68C5A] text-[#262626] border-none outline-none focus:ring-0 placeholder-white font-bold"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner
