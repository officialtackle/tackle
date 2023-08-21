import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useCallback, useEffect } from "react";

function Header() {
  const nav = document.getElementsByClassName("sidenav");

  const openNav = useCallback(() => {
    if (nav) {
      nav[0].style.width = "250px";
    }
  }, [nav]);

  const closeNav = useCallback(() => {
    //event.stopPropagation();
    if (nav) {
      nav[0].style.width = "0px";
    }
  }, [nav]);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const navbar = document.getElementById("navbar");
      // const openButton = document.getElementById("mobile-nav");
      const target = event.target;

      if (navbar && target !== navbar && !navbar.contains(target)) {
        closeNav();
      }
    });
    return () => {
      document.removeEventListener("click", (event) => {});
    };
  }, [closeNav, openNav]);

  return (
    <>
       <div  className="lg:hidden  fixed w-full h-20 z-20 flex  justify-center items-center bg-[#131b2a]">
        <div  className="flex-row flex space-x-20 justify-center items-center">
          <div
            id="mobile-nav"
            className=" text-white nav-classs"
            style={{ fontSize: "35px", cursor: "pointer" }}
            onClick={(event) => {
              event.stopPropagation();
              openNav();
            }}
          >
            &#9776;
          </div>
          <div >
            <img className="w-16" src="/Tackle-Logo.png" alt="logo" />
          </div>
          <div className="text-white flex flex-row space-x-3">
            <a href="https://t.me/tackleme">
              <FaTelegramPlane size={40} />
            </a>
            <a href="https://discord.gg/m8Y8NrgcDd">
              <FaDiscord size={40} />
            </a>
          </div>
        </div>
        
        <div className="hero-1"></div>

        <div
          id="navbar" 
          className=" text-white items-center space-y-5  sidenav flex flex-col"
        >
           <button className="closebtn" onClick={() => closeNav()}>
            &times;
          </button>
          <div className="nav-classs"><a href="#1">Home</a></div>
          <div className="nav-classs"><a href="#toks">Tokenomics</a></div>
          <div className="nav-classs"><a href="https://tackle.gitbook.io/tackle-docs/">Whitepaper</a></div>
          <div className="nav-classs"><a href="#faqs">FaQ</a></div>
          <div>
            <button className="border-2 w-24 rounded-lg ">Buy</button>
          </div>
        </div>
      </div>

      <div className=" flex-col flex">
        <div id="home" className="  flex-row z-10 text-white items-center  hero-1 lg:h-screen text-[28px] ">
          <div className=" hidden fixed bg-[#131b2a] justify-evenly space-x-[400px] z-20 h-20 lg:flex lg:flex-row  w-full pt-5">
            <div className=" flex flex-row space-x-16">
              <div>
                <a href="https://tackle-pro.vercel.app/"><img className="w-14 " src="/Tackle-Logo.png" alt="logo" /></a>
              </div>
              <div className="flex flex-row space-x-16">
                <div><a href="https://tackle-pro.vercel.app/">Home</a></div>
                <div><a href="#toks">Tokenomics</a></div>
                <div><a href="https://tackle.gitbook.io/tackle-docs/">Whitepaper</a></div>
                <div><a href="#faqs">FaQ</a></div>
              </div>
            </div>
            <div>
              <div className="text-white flex flex-row space-x-10">
                <a href="https://t.me/tackleme">
                  <FaTelegramPlane size={40} />
                </a>
                <a href="https://discord.gg/m8Y8NrgcDd">
                  <FaDiscord size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0d111a] h-[1000px] lg:h-[550px]  flex justify-center items-center">
          <div className="flex flex-col lg:mt-0 text-white space-y-3 justify-center items-center">
            <h1  className=" text-center font-bold lg:text-[30px] text-[35px] lg:max-w-[600px]">
              Takoshi is finally the new coach of Tackle City, a struggling
              soccer club in one of Europes's toughest leagues.
            </h1>
            <div className="text-[16px] justify-center lg:space-y-2  flex lg:text-[14px] flex-col mx-5 ">
              <p className="lg:max-w-[550px] max-w-[400px] mb-2 lg:mb-0">
                Takoshi sets out to find the best soccer talents worldwide and
                works with each player to coax out their hidden talents and
                utilize their true potential.
              </p>
              <p className="lg:max-w-[550px] max-w-[400px]lg:mb-0 mb-2">
                Using his intense training camp, unorthodox methods and his
                knack for "practising for when the going gets tough," Takoshi is
                here to prove his team's skill against a host of
                continental rivals with more capital and larger budgets.
              </p>

              <p className="lg:max-w-[450px] lg:mb-0 mb-2">
                The goal is to discover their true potential and discover the
                most battle-hardened, self-confident soccer player within the
                group.
              </p>
              <p className="lg:max-w-[525px]">
                Only the best will be allowed to play with the team on the world
                stage.
              </p>
              <p className="lg:max-w-[600px]">
                A few decades earlier, the Tackle team was considered one of the
                strongest football teams, but today the club is close to total
                collapse due to a lack of funds and years of decay.
              </p>
              <p className="lg:max-w-[525px]">
                It will be up to Takoshi and his youthful squad to restore
                Tackle to glory by winning the world's most prestigious Club
                Football championship.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131b2a] text-white lg:flex-row h-[900px] flex-col flex lg:space-x-24 lg:h-[500px] space-y-10 items-center justify-center ">
        <div className=" flex flex-col space-y-1 items-center">
          <div className="header-fonts text-[29px] mb-5 font-bold font-railway lg:text-[30px]">
            Tackle, Time to take over
          </div>
          <div className="lg:text-[14px]  text-[16px]">
            <div className="lg:max-w-[626px] max-w-[320px] ">
              Step aside, Pepe, Inu. It's time for $Tackle to take over. Are you
              tired of memes with no real utility? Don't let your memes be
              dreams. It's time to discover new football greats.
            </div>
          </div>
          <div className="lg:text-[14px] space-y-1 mx-5 max-w-[320px] lg:max-w-[626px]   text-[16px]  ">
            <p className="">
              We are trying to revolutionize the way young talented players get
              discovered. We aim to find the next Ronaldo or Messi before they
              ever step onto a football field.
            </p>
            <p className="max-w-[585px] lg:max-w-[626px] ">
              Let's hit the world's villages, inner cities, and soccer playing
              grounds.Remember, if we stick and work together, WAGMI.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/soccerboy.jpg"
            alt="soc"
            className="rounded-lg w-[340px] h-[350px]"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
