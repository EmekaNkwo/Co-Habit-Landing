import React from "react";
import { motion } from "framer-motion";
import Left from "../../assets/left.svg"
import Right from "../../assets/right.svg"
import HeroImage from "../../assets/hero-image.png"
import Search from "../../assets/Search.svg"
import Location from "../../assets/Location.svg"
import StyledRectangle from "../../assets/curved-edge rectangle.svg"
import SmallStyledRectangle from "../../assets/small-styled-rectangle.svg"
import LocationPin from "../../assets/u_location-pin-alt.svg"
import MoneyStack from "../../assets/u_money-stack.svg"
import Users from "../../assets/u_users-alt.svg"
import ArrowUp from "../../assets/Arrow up.svg"
import ArrowDown from "../../assets/Arrow down.svg"
import Bungalow1 from "../../assets/bungalow-1.png"
import Bungalow2 from "../../assets/bungalow-2.png"
import Bungalow3 from "../../assets/bungalow-3.png"
import BathIcon from "../../assets/u_bath.svg"
import BedIcon from "../../assets/u_bed-double.svg"
import Slideshow from "../Slideshow/Slideshow";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  return (
    <section className="">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >

        <div className="hero min-h-screen bg-[#f8f8fd]">
          {/* hero section */}
          <div className="hero-content text-center mt-10 laptop:mt-auto laptop:mx-[8rem]">
            <div className="w-auto laptop:mt-[5rem]">
              <h1 className="laptop:text-[3.125rem] text-[2.125rem] laptop:leading-[3.4375rem] font-bold uppercase text-[#25324B]">
                FIND YOUR PERFECT
              </h1>
              <span className="laptop:flex">
                {/* <span className="laptop:flex gap-[30.7rem] mt-2 ml-[4rem] absolute hidden">
                  <img src={Left} className=" w-[25%]" alt="left" />
                  <img src={Right} className="w-[25%]" alt="right" />
                </span> */}
                <h1 className="mx-auto laptop:text-[3rem] text-[2rem] font-bold laptop:leading-[3.4375rem] text-[#010886]">
                  SHARED APARTMENT
                </h1>
              </span>

              <div className="laptop:flex mt-8">
                <span className="">
                  <img src={HeroImage} className="laptop:max-w-[75rem] laptop:mb-8 z-10 w-full mx-auto" alt="Hero Image" />
                </span>

                {/* full search bar */}
                {/* search */}
                <div className="laptop:absolute w-auto mt-12 laptop:-mt-8 laptop:flex laptop:mx-[5rem] laptop:w-[65%] rounded-md bg-white px-2 py-2 border-none">
                  <span className="flex">
                    <img src={Search} className="laptop:w-[13%] p-1 mr-1" alt="search" />
                    <input type="text"
                      className="border-b-[#7C8493] laptop:w-auto w-[77%] mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                      placeholder="Apartment/Workspace" autoComplete="true"
                    />
                  </span>

                  {/* location */}
                  <span className="flex">
                    <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" />
                    <select className="laptop:w-full w-[78%] p-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
                      name="Location">
                      <option className="py-4" value='Apartment/Workspace'>
                        Lagos/Abuja
                      </option>
                      <option value='Apartment/Workspace'>
                        Ogun/Abuja
                      </option>
                      <option value='Apartment/Workspace'>
                        Port-Harcourt/Abuja
                      </option>
                      <option value='Apartment/Workspace'>
                        Ibadan/Abuja
                      </option>
                    </select>
                  </span>

                  {/* search button */}
                  <button
                    className="btn laptop:ml-4 -ml-4 rounded-none w-[80%] mt-3 laptop:w-auto laptop:mt-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
                    Search
                  </button>
                </div>
                {/* end of search */}

              </div>

              {/* <img src={Ellipse} className="mx-auto z-[2] -mt-12 w-[8%]" alt="Ellipse" /> */}

            </div>
          </div>
          {/* end of hero section */}
        </div>

        {/* how it works */}
        <div className="w-full bg-white my-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            {/* heading */}
            <h1 className="text-[1.5rem] pt-6 text-center mb-4 font-bold">How It Works ?</h1>
            <p className="text-center laptop:mb-[2.5rem] laptop:w-auto">
              We build and maintain transparency, professionalism, and integrity throughout these processes to build trust with our clients and establish a <br className="laptop:flex hidden" />
              positive reputation in the industry
            </p>

            {/* text-in-shapes */}
            <div className="laptop:flex">
              {/* gap-16 */}
              {/* styled rectangle 1 */}
              <div className="">
                <p className="absolute w-[68%] ml-[3.5rem] mt-[9rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                  The apartment appeared to be well-cared- <br className="laptop:flex hidden" />
                  for and professionally managed. The <br className="laptop:flex hidden" />
                  overall maintenance of the house and the <br className="laptop:flex hidden" />
                  surrounding landscape reflected a high <br className="laptop:flex hidden" />
                  level of attention to detail.
                </p>
                <h2 className="absolute w-auto ml-[3.5rem] mt-[6.7rem] laptop:ml-[1.1rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                  List your property
                </h2>
                <p className="absolute text-[1rem] font-medium ml-[18.45rem] mt-[1.9rem] laptop:ml-[16.5rem] z-10 laptop:mt-[1.6rem]">
                  1
                </p>
                <img src={LocationPin} className="absolute laptop:w-[3rem] w-[10%] ml-[3rem] mt-[3.5rem] laptop:ml-[.5rem] laptop:mt-[3.5rem]" alt="location-pin" />
                <img src={SmallStyledRectangle} className="absolute w-[17%] laptop:w-[4.5%] ml-[16.8rem] mt-[0.06rem] laptop:ml-[15rem] laptop:mt-[0.08rem]" alt="small-styled-rectangle" />
                <img src={StyledRectangle} className="laptop:w-[20rem] w-[80%] mx-auto my-4 laptop:my-auto" alt="styled-rectangle" />
              </div>
              {/* end of styled rectangle 1 */}

              {/* arrow up */}
              <img src={ArrowUp} className="-my-3 mx-auto" alt="arrow-up" />

              {/* styled rectangle 2 */}
              <div className="">
                <p className="absolute w-[68%] ml-[3.5rem] mt-[9rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                  The apartment appeared to be well-cared- <br className="laptop:flex hidden" />
                  for and professionally managed. The <br className="laptop:flex hidden" />
                  overall maintenance of the house and the <br className="laptop:flex hidden" />
                  surrounding landscape reflected a high <br className="laptop:flex hidden" />
                  level of attention to detail.
                </p>
                <h2 className="absolute w-auto ml-[3.5rem] mt-[6.7rem] laptop:ml-[1.1rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                  Find Your Flatmate
                </h2>
                <p className="absolute text-[1rem] font-medium ml-[18.45rem] mt-[1.9rem] laptop:ml-[16.5rem] z-10 laptop:mt-[1.6rem]">
                  2
                </p>
                <img src={Users} className="absolute laptop:w-[3rem] w-[10%] ml-[3.5rem] mt-[3.5rem] laptop:ml-[1rem] laptop:mt-[3.5rem]" alt="location-pin" />
                <img src={SmallStyledRectangle} className="absolute w-[17%] laptop:w-[4.5%] ml-[16.8rem] mt-[0.06rem] laptop:ml-[15rem] laptop:mt-[0.08rem]" alt="small-styled-rectangle" />
                <img src={StyledRectangle} className="laptop:w-[20rem] w-[80%] mx-auto my-4 laptop:my-auto" alt="styled-rectangle" />
              </div>

              {/* arrow up */}
              <img src={ArrowDown} className="-my-3 mx-auto" alt="arrow-down" />

              {/* styled rectangle 3 */}
              <div className="">
                <p className="absolute w-[68%] ml-[3.5rem] mt-[9rem] laptop:ml-[1.1rem] laptop:mt-[10.5rem] text-[0.875rem] font-medium">
                  The apartment appeared to be well-cared- <br className="laptop:flex hidden" />
                  for and professionally managed. The <br className="laptop:flex hidden" />
                  overall maintenance of the house and the <br className="laptop:flex hidden" />
                  surrounding landscape reflected a high <br className="laptop:flex hidden" />
                  level of attention to detail.
                </p>
                <h2 className="absolute w-auto ml-[3.5rem] mt-[6.7rem] laptop:ml-[1.1rem] laptop:mt-[8rem] text-[1.125rem] font-medium">
                  Close The Deal
                </h2>
                <p className="absolute text-[1rem] font-medium ml-[18.45rem] mt-[1.9rem] laptop:ml-[16.5rem] z-10 laptop:mt-[1.6rem]">
                  3
                </p>
                <img src={MoneyStack} className="absolute laptop:w-[3rem] w-[10%] ml-[3.5rem] mt-[3.5rem] laptop:ml-[1rem] laptop:mt-[3.5rem]" alt="location-pin" />
                <img src={SmallStyledRectangle} className="absolute w-[17%] laptop:w-[4.5%] ml-[16.8rem] mt-[0.06rem] laptop:ml-[15rem] laptop:mt-[0.08rem]" alt="small-styled-rectangle" />
                <img src={StyledRectangle} className="laptop:w-[20rem] w-[80%] mx-auto my-4 laptop:my-auto" alt="styled-rectangle" />
              </div>
            </div>

          </div>

        </div>
        {/* end of 'how it works' */}


        {/* 'recently uploaded' */}
        <div className="w-auto bg-[#f8f8fd] my-8 mx-2 pb-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] pt-6 text-center mb-4 font-bold">
              Recently Uploaded
            </h1>
            <p className="text-center laptop:mb-[2.5rem] laptop:w-full">
              Take a deep dive and browse apartment for rent, original neighborhood photos, resident reviews and local insights to <br className="laptop:flex hidden" />
              find what is right for you.
            </p>

            {/* mobile slideshow */}
            <Slideshow />
            {/* end of mobile slideshow */}

            {/* wider screen */}
            <div className="laptop:flex hidden gap-8">
              <div>
                <img src={Bungalow1} className="laptop:w-[21.875] w-[90%]" alt="bungalow-1" />
              </div>

              <div>
                <img src={Bungalow2} className="laptop:w-[21.875] w-[90%]" alt="bungalow-2" />
              </div>

              <div>
                <img src={Bungalow3} className="laptop:w-[21.875] w-[90%]" alt="bungalow-3" />
              </div>

            </div>
            {/* end of wide screen */}

          </div>
        </div>
        {/* end of 'recently uploaded' */}




        {/* find by location */}
        <div className="w-full bg-white">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] pt-6 text-center mb-4 font-bold">
              Find By Location
            </h1>
            <p className="text-center laptop:mb-[2.5rem] laptop:w-auto">
              Take a deep dive and browse apartment for rent, original neighborhood photos, resident reviews and local insights to <br className="laptop:flex hidden" />
              find what is right for you.
            </p>

            <div className="laptop:flex gap-8">
              <div>
                {/* <img src={Bungalow1} className="laptop:w-[21.875] w-[90%]" alt="bungalow-1" /> */}
              </div>

              <div>
                {/* <img src={Bungalow2} className="laptop:w-[21.875] w-[90%]" alt="bungalow-2" /> */}
              </div>

              <div>
                {/* <img src={Bungalow3} className="laptop:w-[21.875] w-[90%]" alt="bungalow-3" /> */}
              </div>

            </div>

          </div>
        </div>
        {/* end of 'find by location' */}

        {/* good reviews by customers */}
        <div className="w-auto bg-[#DF802633] mt-8 pb-8">
          <div className="laptop:mx-[8rem] mx-2 mt-8 text-[#25324B]">
            <h1 className="text-[1.5rem] pt-6 text-center mb-4 font-bold">
              Good Reviews By Customers
            </h1>
            <p className="text-center laptop:mb-[2.5rem] laptop:w-auto">
              Customer reviews play a crucial role in today's interconnected world, influencing the decisions of consumers and <br className="laptop:flex hidden" />
              shaping the reputation of businesses.
            </p>

            <div className="laptop:flex gap-8">
              <div>
                {/* <img src={Bungalow1} className="laptop:w-[21.875] w-[90%]" alt="bungalow-1" /> */}
              </div>

              <div>
                {/* <img src={Bungalow2} className="laptop:w-[21.875] w-[90%]" alt="bungalow-2" /> */}
              </div>

              <div>
                {/* <img src={Bungalow3} className="laptop:w-[21.875] w-[90%]" alt="bungalow-3" /> */}
              </div>

            </div>

          </div>
        </div>
        {/* end of 'good reviews by customers' */}

      </motion.div>
    </section >
  );
};

export default Home;