import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import Getstarted from "./Getstart";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} justify-between lg:gap-96 overflow-x-hidden `}
    >
      <div
        className={` flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row items-center gap-5 py-[6px] px-4 bg-discount-gradient mb-2 rounded-xl">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white "> 20% </span>
            DISCOUNT FOR
            <span className="text-white "> 1 MONTH </span>
            ACCOUNT
          </p>
        </div>

        <div className={`flex flex-row justi items-center w-full`}>
          <h1 className=" flex-1 font-poppins font-semibold text-[52px] text-white ">
            The Next <br className="sm:block hidden " />
            <span className="text-gradient "> Genration</span>{" "}
          </h1>
          <div className="sm:hidden  ss:hidden  md:block mr-0 ">
            <Getstarted className="ss:hidden" />
          </div>
        </div>
        <h1 className=" w-full flex-1 font-poppins font-semibold text-[52px] text-white "
         >
          Payment <br/>Method
        </h1>

        <p
          className={`${styles.paragraph}max-w-[470px] mt-5 text-[#FFFFFFB2]
] `}
        >
          Our team of experts uses a methodology to identify <br /> the credit
          cards most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div>
        <img
          src={robot}
          alt="biling"
          className="w-[100%]  h-[100%] relative z-[5] sm:mt-10"
        />
        <div className=" absolute z-[0]  top-0  pink__gradient" />
        <div className=" absolute z-[1] rounded-full  white__gradient" />
        <div className=" absolute z-[0] right-20 bottom-20  blue__gradient" />
      </div>

      <div className={`lg:hidden sm:hidden ${styles.flexCenter}`}>
        <Getstarted />
      </div>
    </section>
  );
};

export default Hero;
