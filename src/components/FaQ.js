import React from "react";

function FaQ() {
  return (
    <>
      <div id="faqs" className=" h-fit lg:h-fit lg:pb-10 pb-10 flex justify-center items-center flex-col bg-[#0d111a] text-white space-y-10">
        <div className="flex lg:flex-row mt-10 space-x-1 text-[25px] font-railway lg:text-[40px]">
          <div>Frequently Asked </div>
          <div className="brightness-200 text-blue-950">Questions</div>
        </div>

        <div className="divide-y-[1px]  lg:w-[1200px] divide-[#fff]">
          <div className="container ">
            <details>
              <summary className="font-bold">
                WHO IS THE TEAM BEHIND TACKLE,AND IS THE CONTRACT SECURE?
              </summary>
              <div className="lg:text-[15px] text-[14px]">
                Tackle is 100% community-driven, with the team/developers
                leading the project alongside the community. We will do a KYC
                (Know Your Customer) verification with a Pinksale-approved KYC
                firm, and the contract will be written and Audited by SAFU
                (Secure Asset Fund for Users) Devs from Pinksale. To view the
                KYC, you can click here. Our Extensive list of partners and
                marketing connections are ready to back us.
              </div>
            </details>
          </div>
          <div className="container">
            <details>
              <summary className="font-bold">$TACKLE CONTRACT AUDITED?</summary>
              <div className="lg:text-[15px] text-[14px]">
                Yes, the Tackle contract has been audited and raises no major
                concerns. To view the Audit Certificate, you can click here.
              </div>
            </details>
          </div>
          <div className="container">
            <details>
              <summary className="font-bold">DISCLAIMER OF LIABILITY.</summary>
              <div className="lg:text-[15px] h-fit text-[14px]">
                Tackle does not maintain any affiliations with any soccer player
                or club. This token primarily serves as a tribute to
                recognizable memes and soccer players while aiding the discovery
                of new talents. Information presented on this website is not
                intended to be taken as legal or financial counsel. Investing in
                Tackle, as with all cryptocurrencies, carries substantial risk.
                Potential investors are advised to acknowledge the inherent
                risks of smart contracts and proceed cautiously. Tackle should
                not be considered an investment vehicle; it offers no guarantees
                and accepts no responsibility for any losses or errors. The
                Tackle team is absolved of liability regarding any potential
                losses or tax implications. The value of cryptocurrencies can
                fluctuate, potentially resulting in capital gains or other
                relevant taxes as dictated by your local jurisdiction. Before
                making any investment decisions, we strongly recommend
                conducting due diligence and consulting with a financial
                advisor. As a meme coin, Tackle does not possess inherent value
                or offer expectations of financial returns. We advise against
                investing more than you can afford to lose, and we urge you to
                comprehend the associated risks fully. Past performance does not
                guarantee future returns. Participation signifies your
                compliance with all applicable laws and regulations. This
                website does not offer financial, legal, or tax advice. Always
                consult a professional before making investment decisions. US
                citizens, residents, and residents of jurisdictions where
                relevant laws prohibit participation or ownership of tokens or
                jurisdictions subject to US, UN, or any other sanctions or
                embargoes, are precluded from participating in the token sale.
              </div>
            </details>
          </div>
        </div>
      </div>
      <div className="bg-[#131b2a] text-white flex justify-center items-center h-20 w-full  ">
        <div>&copy; 2023 by TACKLE. All rights reserved!</div>
      </div>
    </>
  );
}

export default FaQ;
