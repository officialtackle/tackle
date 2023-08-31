import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Roadmap() {
  return (
    <>
      <div className="bg-[#131b2a] text-white  flex-col lg:flex-row lg:h-[500px] h-[800px]  flex items-center justify-center   lg:space-x-10 space-y-14">
        <div className="space-y-5 justify-center items-center flex flex-col">
          <div className=" header-fonts lg:text-[30px] text-[30px] font-bold font-railway">
            TACKLE DEBIT CARD
          </div>
          <div className="lg:text-[15px] lg:max-w-[700px] leading-5 lg:leading-6 max-w-[330px]  text-[16px]">
            Spend crypto like cash. Spend anywhere, anytime.
            $TACKLE is here to bridge the gap between Crypto and 
            Fiat Transactions. With low fees, TACKLE Debit Card 
            allows users to seamlessly spend cryptocurrencies on everyday
            
            purchases seamlessly.
          </div>
          <div className="space-y-5 pr-16 flex   flex-col ">
            <div className="items-center flex flex-row space-x-3 ">
              <div className="">
                <FaCheckCircle className=" text-green-800 " />
              </div>
              <div className="flex flex-col">
                <div className="flex lg:flex-col flex-col lg:max-w-[600px]  lg:text-[15px]  ">
                  <div className="flex lg:flex-row flex-col lg:space-x-1 max-w-[1000px]">
                  <div className="text-[16px] lg:text-[15px] lg:max-w-[490px] max-w-[200px]">Use for online purchases or in-store shopping at </div>
                  
                  <div className="font-bold lg:text-[15px] text-[16px]">
                    37 million merchant
                  </div>
                  </div>
                  <div className="text-[16px] lg:text-[15px]">
                  locations worldwide.
                </div>
                  </div>
              </div>
            </div>
            <div className="items-center flex flex-row space-x-3  ">
              <div className="">
                <FaCheckCircle className=" text-green-800 " />
              </div>
              <div className="text-[16px] max-w-[200px] lg:max-w-[500px] lg:text-[15px]">
                <div className="flex flex-col lg:flex-row space-x-2">
                <div className="">Keep Your Money Safe. Hold and</div>
                <div className="font-bold">exchange Crypto</div>
                </div>
                <div>only when you need to.</div>
              </div>
            </div>
            <div className="items-center flex flex-row  space-x-3 ">
              <div className="">
                <FaCheckCircle className=" text-green-800" />
              </div>
              <div className="lg:text-[15px] text-[16px]">
                All funds are <span className="font-bold">SAFU</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:h-[600px] lg:w-[400px] justify-center w-[260px] items-center flex">
          <img id="animated-div" src="/card.png" alt="" />
        </div>
      </div>

      <div id="toks">
        <img className="lg:w-full"  src="/tokenomics.jpg" alt="" width={1550} />
      </div>
    </>
  );
}

export default Roadmap;
