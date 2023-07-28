import React from "react";

function Header() {
  return (
    <>
      <div className=" flex-col flex">
        <div className="pt-5 text-white hero-1 justify-evenly text-[28px] flex-row flex">
          <div>Home</div>
          <div>Tokenomics</div>
          <div>Whitepaper</div>
          <div>FaQ</div>
          <div>
            <button className="border-2 w-24 rounded-lg ">Buy</button>
          </div>
        </div>
        <div className="bg-[#0d111a] w-full h-96 flex justify-center items-center">
          <div className="flex flex-col text-white space-y-3">
            <div className="font-bold text-[30px]">
              Takoshi is finally the new coach of Tackle City, a struggling
              soccer club in one of <br></br>
              Europes's toughest leagues.
            </div>
            <div className="text-[15px]">
              Takoshi sets out to find the best soccer talents worldwide and
              works with each player to coax out their hidden talents and
              utilize their true potential. Using his <br></br>
              intense training camp, unorthodox methods and his knack for
              "practising for when the going gets tough," Takoshi is here to
              prove his team's skill against a host of <br></br>
              continental rivals with more capital and larger budgets. The goal
              is to discover their true potential and discover the most
              battle-hardened, self-confident soccer <br></br>
              player within the group. Only the best will be allowed to play
              with the team on the world stage.
            </div>
            <div className="text-[15px]">
              A few decades earlier, the Tackle team was considered one of the
              strongest football teams, but today the club is close to total
              collapse due to a lack of funds and years <br></br>
              of decay. It will be up to Takoshi and his youthful squad to
              restore Tackle to glory by winning the world's most prestigious
              Club Football championship.
            </div>
          </div>
        </div>
       
      </div>
      <div className="bg-[#0d111a] text-white flex-row h-[500px] flex space-x-12 pl- items-center justify-center ">
          <div className="space-y-5">
            <div className="font-bold text-[30px]">Tackle, Time to take over</div>
            <div>Step aside, Pepe, Inu. It's time for $Tackle to take over. Are you tired of memes with no real utility? <br></br>
            Don't let your memes be dreams. It's time to discover new football greats. 

            </div>
            <div className="text-[15px]">
            We are trying to revolutionize the way young talented players get discovered. We <br></br>
            aim to find the next Ronaldo or Messi before they ever step onto a football field. <br></br>
            Let's hit the world's villages, inner cities, and soccer playing grounds.Remember, if <br></br>
            if we stick and work together, WAGMI.


            </div>
          </div>
          <div><img src="/soccerboy.jpg" alt="" width={400} height={400} className="rounded-lg"></img></div>
        </div>
    </>
  );
}

export default Header;
