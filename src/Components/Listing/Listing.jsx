import React from 'react'
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { IoRemoveOutline } from "react-icons/io5";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Scribble from "../../assets/scribble-lines.svg"
import DivideLine from "../../assets/line-Divider.png"


const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};


const Listings = () => {
  return (
    <section className=''>
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        {/* bg-[#f8f8fd] */}
        <div className="hero laptop:min-h-[screen] min-h-screen bg-header-image laptop:bg-contain bg-contain">

          <div className="laptop:mt-0 laptop:mx-[8rem]">

            <div className="text-center">
              <h1 className=" text-[2.125rem] laptop:leading-[3.3rem] font-bold text-[#25324B]">
                <span className="text-5xl">
                  Find your &nbsp;
                </span>
                <span className="block laptop:inline ">
                  <span className="text-5xl text-[#010886] leading-[3.4375rem]">
                    Shared Apartment
                  </span>
                  <img src={Scribble}
                    className='absolute laptop:mx-[26rem] mx-8 laptop:w-auto w-[80%]'
                    alt='scribble-lines' />
                </span>
              </h1>

              <p className=' leading-[1.6rem] mt-6 mb-10'>
                Our mission is to help people find affordable homes with a seamless and rewarding shared experiences
              </p>
              {/* <button className="py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">Search</button> */}
            </div>

            {/* search */}
            <div className="mt-[] laptop: laptop:flex justify-between laptop:mx-[] rounded-md bg-white p-2 px-4 border-2 border-none">
              {/* laptop:w-[65%] laptop:mx-[5rem] */}
              <span className="flex">

                <span className="my-3 mx-2">
                  <BiSearch size={25} />
                </span>

                <input type="text"
                  className="border-b-[#7C8493] w-full  mr-[2rem] laptop:px-0 px-2 py-2 border-2 border-t-white border-x-white outline-none text-[#7C8493]"
                  placeholder="Apartment/Workspace"
                  autoComplete="true"
                  size={40}
                />
              </span>

              {/* <span className=' rotate-90 px-2'>
              <IoRemoveOutline size={25} />
            </span> */}

              {/* location */}
              <span className="flex ">

                <span className="my-3 mx-2">
                  <GrLocation size={25} />
                </span>

                {/* <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" /> */}
                <select
                  className="laptop:w-full pr-[12rem] w-[78%] py-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
                  name="Location">
                  <option className="py-4" value='Apartment/Workspace'>
                    Lagos/Abuja
                  </option>
                  <option value='Apartment/Workspace'>
                    Ogun/Oyo
                  </option>
                  <option value='Apartment/Workspace'>
                    Port-Harcourt/Delta
                  </option>
                  <option value='Apartment/Workspace'>
                    Ibadan/Abuja
                  </option>
                  <option value='Apartment/Workspace'>
                    Edo/Minna
                  </option>
                </select>
              </span>

              <button
                className="btn laptop:ml-4 ml-4 rounded-none w-[80%] mt-3 laptop:w-auto laptop:mt-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
                Search
              </button>
            </div>
            {/* end of search */}

            <p className="text-[#515B6F] py-4 laptop:mx-1 mx-8 w-auto">
              Popular : Apartment, Bungalow, 2 Bedroom
            </p>
          </div>

        </div>

        {/* listings */}
        <div className="bg-white flex p-8 w-full">

          {/* sidebar */}
          <div className='laptop:block'>
            {/* 01 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Property Type
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="apartment"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="apartment"
                    className="text-[#515B6F] px-4">
                    Apartment (7,997)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="duplex"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="duplex"
                    className="text-[#515B6F] px-4">
                    Duplex (5)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="mini-flat"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="mini-flat"
                    className="text-[#515B6F] px-4">
                    Mini-Flat(2)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="bungalow"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="bungalow"
                    className="text-[#515B6F] px-4">
                    Bungalow (24)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="workspace"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="workspace"
                    className="text-[#515B6F] px-4">
                    Workspace (3)
                  </label>
                </span>
              </form>
            </section>

            {/* 02 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Location
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="abuja"
                    name=""
                    value=""
                    size={30}
                    className=""
                    checked />
                  <label for="abuja"
                    className="text-[#515B6F] px-4">
                    Abuja(24)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="lagos"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="lagos"
                    className="text-[#515B6F] px-4">
                    Lagos(3)
                  </label>
                </span>
              </form>
            </section>

            {/* 03 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Areas
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="abaji"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="abaji"
                    className="text-[#515B6F] px-4">
                    Abaji (57)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="bwari"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="bwari"
                    className="text-[#515B6F] px-4">
                    Bwari (3)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="Gwagwalada"
                    name=""
                    value=""
                    size={30}
                    className=""
                  />
                  <label for="Gwagwalada"
                    className="text-[#515B6F] px-4">
                    Gwagwalada(5)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="kuje"
                    name=""
                    value=""
                    size={30}
                    className=""
                    checked />
                  <label for="kuje"
                    className="text-[#515B6F] px-4">
                    Kuje (12)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="kwali"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="kwali"
                    className="text-[#515B6F] px-4">
                    Kwali (8)
                  </label>
                </span>
              </form>
            </section>

            {/* 04 */}
            <section className=''>
              <span className="flex mb-6 font-semibold text-[1rem] leading-[1.6rem]">
                <p className="">
                  Budget
                </p>
                <span className="py-1">
                  <BsChevronUp />
                </span>
              </span>

              <form className='select-none'>
                <span className='block'>
                  <input type="checkbox"
                    id="100-500k"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="100-500k"
                    className="text-[#515B6F] px-4">
                    100k -500k (4)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="600-900k"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="600-900k"
                    className="text-[#515B6F] px-4">
                    600 - 900k (6)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="1-2m"
                    name=""
                    value=""
                    size={30}
                    className="" />
                  <label for="1-2m"
                    className="text-[#515B6F] px-4">
                    1m - 2m (10)
                  </label>
                </span>

                <span className='block'>
                  <input type="checkbox"
                    id="3m-above"
                    name=""
                    value=""
                    size={30}
                    className=" checked:bg-[#010886]"
                    checked
                  />

                  <label for="3m-above"
                    className="text-[#515B6F] px-4">
                    3m or above (4)
                  </label>

                </span>
              </form>
            </section>

          </div>
          {/* end of sidebar */}

          {/* all property */}
          <div className="">
            <p className="text-[#25324B] font-bold text-[1.5rem] leading-[1.8rem]">
              All Property
            </p>
            <span className="flex justify-between w-full">
              <p className="text-[#25324B] font-normal text-base leading-[1.6rem]">
                Showing 73 results
              </p>
              <p className="text-[#7C8493] font-normal text-base leading-[1.6rem]">
                Sort by:
              </p>
              <select className="pr-4 px-1"
                name="search-filter">
                <option className="" value='Most relevant'>
                  Most relevant
                </option>
                <option className="" value='Least relevant'>
                  Least relevant
                </option>
                <option className="" value='most relevant'>
                  Budget
                </option>
                <option className="" value='most relevant'>
                  Location
                </option>
              </select>
              {/* <p className="text-[#25324B] font-medium text-base leading-[1.6rem]">
                Most relevant
              </p>
              <span className="py-1 px-2">
                <BsChevronDown />
              </span> */}

              {/* <img src={DivideLine} className="" alt='' /> */}

              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clip-path="url(#clip0_1014_972)">
                    <path d="M9 4.49998H5C4.44772 4.49998 4 4.9477 4 5.49998V9.49998C4 10.0523 4.44772 10.5 5 10.5H9C9.55228 10.5 10 10.0523 10 9.49998V5.49998C10 4.9477 9.55228 4.49998 9 4.49998Z" fill="#010886" stroke="#010886" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 4.49998H15C14.4477 4.49998 14 4.9477 14 5.49998V9.49998C14 10.0523 14.4477 10.5 15 10.5H19C19.5523 10.5 20 10.0523 20 9.49998V5.49998C20 4.9477 19.5523 4.49998 19 4.49998Z" fill="#010886" stroke="#010886" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 14.5H5C4.44772 14.5 4 14.9477 4 15.5V19.5C4 20.0523 4.44772 20.5 5 20.5H9C9.55228 20.5 10 20.0523 10 19.5V15.5C10 14.9477 9.55228 14.5 9 14.5Z" fill="#010886" stroke="#010886" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 14.5H15C14.4477 14.5 14 14.9477 14 15.5V19.5C14 20.0523 14.4477 20.5 15 20.5H19C19.5523 20.5 20 20.0523 20 19.5V15.5C20 14.9477 19.5523 14.5 19 14.5Z" fill="#010886" stroke="#010886" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1014_972">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g opacity="0.5" clip-path="url(#clip0_1014_854)">
                    <path d="M18 4.49998H6C4.89543 4.49998 4 5.39542 4 6.49998V8.49998C4 9.60455 4.89543 10.5 6 10.5H18C19.1046 10.5 20 9.60455 20 8.49998V6.49998C20 5.39542 19.1046 4.49998 18 4.49998Z" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 14.5H6C4.89543 14.5 4 15.3954 4 16.5V18.5C4 19.6046 4.89543 20.5 6 20.5H18C19.1046 20.5 20 19.6046 20 18.5V16.5C20 15.3954 19.1046 14.5 18 14.5Z" stroke="#515B6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1014_854">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>

            <div className="">

            </div>
          </div>
          {/* end of all property */}

        </div>
        {/* end of listings */}




      </motion.div>
    </section>
  )
}

export default Listings