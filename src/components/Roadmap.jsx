import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Roadmap() {
  return (
    <>
      <div className="bg-[#0d111a] text-white flex-col lg:flex-row h-[500px]  flex items-center justify-center pl-36 space-x-20">
        <div className="space-y-5">
          <div className="text-[30px] font-bold">TACKLE DEBIT CARD</div>
          <div>
            Spend crypto like cash. Spend Anywhere, Anytime.<br></br>
            $TACKLE is here to bridge the gap between Crypto and <br></br>
            Fiat Transactions. With low fees, TACKLE Debit Card <br></br>
            allows users to seamlessly spend cryptocurrencies for everyday
            <br></br>
            purchases seamlessly.
          </div>
          <div className="space-y-5">
            <div className="items-center flex flex-row space-x-6 ">
              <div>
                <FaCheckCircle className=" text-green-800" size={15} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row space-x-2">
                <div>Use for online purchases or in-store shopping at </div>
                <div className="font-bold">37 million merchant</div> 
                
                </div>
                <div>locations worldwide.</div>
              </div>
            </div>
            <div className="items-center flex flex-row space-x-6 ">
              <div>
                <FaCheckCircle className=" text-green-800" size={15} />
              </div>
              <div>
                Keep Your Money Safe. Hold and{" "}
                <span className="font-bold">Exchange Crypto</span> only when you
                need to.
              </div>
            </div>
            <div className="items-center flex flex-row space-x-6 ">
              <div>
                <FaCheckCircle className=" text-green-800" size={15} />
              </div>
              <div>
                All Funds are <span className="font-bold">SAFU</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img id="animated-div" src="/card.png" alt="" width={800} height={800} />
        </div>
      </div>
    </>
  );
}

export default Roadmap;
