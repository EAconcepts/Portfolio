import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import SideMenu from "./SideMenu";
import heroImg from "../assets/hero-img.png";
import TsParticles from "./TsParticles";

export const Home = () => {
  return (
    <div className="w-full sm:flex sm:flex-col">
      {/* <TsParticles/> */}
      <div className="w-full md:flex md:flex-col md:item-center my-20 md:my-36 ">
        <div className=" flex flex-col md:flex-row-reverse md:justify-between md:items-center">
          <img
            src={heroImg}
            alt="hero-img"
            className="top-in h-60 w-100 md:h-80 md:w-80 object-contain"
          />
          <div className="down-in md:flex md:flex-col md:justify-center px-4">
            <div className="flex flex-col mt-2">
              <p className="text-[#301934] text-xl md:text-2xl font-semibold dark:text-purple-100 ">
                Hi there,
                <span className="wave"> 👋</span>
              </p>
              <p className="text-black dark:text-purple-300 mt-3 md:mt-5 text-lg md:text-xl font-nunito">
                my name is{" "}
              </p>
              <h1 className="text-3xl md:text-4xl  text-purple-800 dark:text-purple-500 font-medium font-heading tracking-wider">
                EMMANUEL AMOO
              </h1>
            </div>
            <span className="font-semibold text-2xl md:text-3xl text-[#301934]  dark:text-purple-100">
              <span>I'm </span>
              <TypeAnimation
                className="mt-8 font-bold text-purple-800 dark:text-purple-600 text-3xl font-edu"
                sequence={[
                  "a Software Engineer",
                  1000,
                  "a Frontend Engineer",
                  1000,
                  "a Javascript Developer",
                  1000,
                  "a ReactJs Developer",
                  1000,
                  "a Music Lover",
                  1000,
                  "an Arsenal fan",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "", display: "inline-block", color: "" }}
                repeat={Infinity}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="z-0">{/* <TsParticles/> */}</div>
    </div>
  );
};
