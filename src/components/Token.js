import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";



function Token() {
  return (
    <>
      <div className="lg:h-[650px] h-[1450px] bg-[#0d111a]  flex justify-center items-center space-y-5 flex-col text-white ">
        <div className="font-bold text-5xl font-railway ">ROADMAP</div>
        <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 ">
          <div className="sha lg:h-[350px] lg:w-[330px]  lg:text-[14px] text-[12px] border-2 w-[345px] h-[300px] border-blue-500 mt-5 space-y-5 ">
            <div className="lg:mb-7  space-y-5 lg:space-y-7 lg:ml-5">
              <div className="road-head">Phase 1 </div>
              <ul>
                <li>Idea & Research.</li>
                <li>Website Launch.</li>
                <li>Smart Contract Creation.</li>
                <li>Listing on Dex.</li>
                <li>Marketing Campaign.</li>
                <li>Onboarding Top Tier Influencers.</li>
                <li>CoinMarketCap & CoinGecko Listing.</li>
              </ul>
            </div>
          </div>
          <div className="sha lg:h-[350px] lg:w-[350px] lg:text-[14px] text-[12px]   w-[345px] h-[300px]  border-blue-500 border-2 space-y-6">
            <div className="road-head mr-16">Phase 2 </div>
            <ul className="ml-6">
              <li>Community Building & Expansion.</li>
              <li>Social Media Trending Buzz.</li>
              <li>Dextool, Dexview, Avedex, Bsc Trending.</li>
              <li>NFT launch.</li>
              <li>Strategic Partnerships.</li>
              <li>Talent Scouting.</li>
              <li>1k+ Holders.</li>
              <li>CEX (Tier 2) Listing.</li>
            </ul>
          </div>
          <div className="sha lg:w-[330px] lg:h-[350px]  lg:text-[14px] text-[12px]  w-[345px] h-[300px] border-blue-500 border-2 space-y-6">
            <div className="road-head lg:mr-16 mr-16 ">Phase 3 </div>
            <ul className="mr-12 ">
              <li>10k + Holders.</li>
              <li>Tackle Debit Card.</li>
              <li>Scouting Platform.</li>
              <li>AI Integration.</li>
              <li>Top Football Club Contracts.</li>
              <li>Buy Back and Burn.</li>
              <li>Tackle Merch.</li>
              <li>Second CEX (Tier 1) Listing.</li>
            </ul>
          </div>
          <div className="sha lg:text-[14px] text-[12px] w-[345px] h-[300px] lg:h-[350px] lg:w-[330px] border-blue-500 border-2 space-y-6 ">
            <div className="lg:mb-24 space-y-5">
              <div className="road-head ">Phase 4 </div>
              <ul className="mr-9">
                <li>Soccer Academy.</li>
                <li>Philanthropic efforts.</li>
                <li>100k+ Holders.</li>
                <li>Global Dominance In Crypto.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-white bg-[#131b2a] flex flex-col h-[250px] justify-center items-center space-y-10 lg:h-[400px]">
          <div className="flex flex-row space-x-5 ">
            <div className="">
              <a href="official@cometackle.com">
                <IoIosMail size={70} className="" />
              </a>
            </div>
            <a href="https://t.me/tackleme">
              <FaTelegramPlane size={70} className="" />
            </a>
            <a href="https://twitter.com/cometackle">
              <BsTwitter size={70} />
            </a>
            <a href="https://discord.gg/m8Y8NrgcDd">
              <FaDiscord size={70} />
            </a>
          </div>

          <div className="flex flex-row space-x-5">
            
          </div>
        </div>
        <div>
          <div className="flex w-full flex-col lg:space-y-10  space-y-5 h-[1150px] text-white lg:h-[800px] items-center bg-[#0d111a] justify-center">
            <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 lg:space-x-14 ">
              <div className=" lg:space-x-7 space-x-3 hover:brightness-150 bg-[#37383D] flex justify-center items-center w-[320px] h-[200px] lg:w-[450px] lg:h-[300px] rounded-[35px]">
                <img
                  className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px]"
                  src="/dexview.png"
                  alt="dex"
                />
                <div className="lg:text-[40px] text-[25px]  font-medium">DexView</div>
              </div>
              <div className="lg:space-x-7 space-x-3 bg-[#37383D] hover:brightness-150 flex justify-center items-center w-[320px] h-[200px] lg:w-[450px] lg:h-[300px] rounded-[35px]">
                <img
                  className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px]"
                  src="/dextool.png"
                  alt="dex"
                />
                <div className="lg:text-[40px] text-[25px]  font-medium">Dextools</div>
              </div>
              <div className="lg:space-x-7 space-x-3 bg-[#37383D] hover:brightness-150 flex justify-center items-center w-[320px] h-[200px] lg:w-[450px] lg:h-[300px] rounded-[35px]">
                <img
                  className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px]"
                  src="/pinksale.png"
                  alt="dex"
                />
                <div className="lg:text-[40px] text-[25px]  font-medium">Pinksale</div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col lg:space-x-14 lg:space-y-0 space-y-5">
              <div className="lg:space-x-7 space-x-3 bg-[#37383D] hover:brightness-150 flex justify-center items-center w-[320px] h-[200px] lg:w-[470px] lg:h-[300px] rounded-[35px]">
                <img
                  className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px]"
                  src="/cg.png"
                  alt="dex"
                />
                <div className="lg:text-[40px] text-[25px]  font-medium">CoinGecko</div>
              </div>
              <div className="lg:space-x-7 space-x-3 bg-[#37383D] hover:brightness-150 flex justify-center items-center w-[320px] h-[200px] lg:w-[470px] lg:h-[300px] rounded-[35px]">
                <img
                  className="lg:w-[100px] w-[80px] h-[80px] lg:h-[100px]"
                  src="/coinmarketcap-logo.png"
                  alt="dex"
                />
                <div className="lg:text-[40px] text-[25px] font-medium">CoinMarketCap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Token;
