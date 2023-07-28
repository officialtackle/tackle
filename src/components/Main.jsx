import React from "react";

function Main() {
  return (
    <>
      <div className="bg-[#0d111a] text-white flex-row h-[500px] flex space-x-64 pl- items-center justify-center">
        <div className="flex flex-col space-y-5">
          <div className="font-bold text-[30px]">Tackle, Talent Scouting</div>
          <div>
            We aim to discover and support talented soccer players lacking
            <br></br> opportunities due to socio-economic barriers.
          </div>
          <div className=" space-y-5">
            <div className="flex flex-row -space-x-6 ">
              <li className="ol-p "></li>
              <div className="">
                We aim to help these players transition from obscurity to
                signing
                <br></br>professional contracts.
              </div>
            </div>
            <div className="flex flex-row -space-x-6 ">
              <li className="ol-p"></li>
              <div>
                We profit from agent fees and commissions on player deals and
                use a<br></br>portion to buy back and burn $TACKLE tokens.
              </div>
            </div>
            <div>
              <div className="flex flex-row -space-x-6 ">
                <li className="ol-p"></li>
                <div>
                  We aspire to become the largest and most trusted decentralized
                  <br></br>scouting network worldwide, leveraging global
                  contacts in football.
                </div>
              </div>
            </div>
            <div className="flex flex-row -space-x-6 ">
              <li className="ol-p"></li>
              <div>
                Through AI and personalized pitches, we intend to end the
                <br></br>malpractices of fraudulent scouts demanding exorbitant
                sums.
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/soccboy2.jpg"
            width={400}
            height={400}
            alt=""
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="bg-[#0d111a] text-white flex-col h-[500px] flex text-center space-y-2 items-center justify-center">
        <div className="text-green-700 text-[10px] font-bold">B&nbsp; E&nbsp; N&nbsp; E&nbsp; F&nbsp; I&nbsp; T&nbsp; S</div>
        <div className="font-bold text-[40px]"> TACKLE Exclusive Club</div>
        <div className="text-[10px] leading-4">The TACKLE official collection 10000 animated 3D NFT is Coming soon. By holding an NFT, you will get <br></br>
        exclusive access to future collections, real-world events & meetups, VIP Season Tickets for an unforgettable VIP <br></br>
         experience, and other VIP perks.
        </div>
      </div>
    </>
  );
}

export default Main;
