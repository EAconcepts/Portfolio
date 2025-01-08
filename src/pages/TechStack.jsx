import React from "react";
import reactImg from "../assets/reactjs.png";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import tailwindImg from "../assets/tailwind.png";
import javascriptImg from "../assets/js.png";
import tsLogo from "../assets/tslogo.png";
import nextjsLogo from "../assets/nextjslogo.png";
import shadcnLogo from "../assets/shadcn.png";
import axiosImg from "../assets/axios.png";
import zustandLogo from "../assets/zustand.png";
import reactqueryLogo from "../assets/react-query.png";

const TechStack = () => {
  return (
    <div className="flex flex-col mt-8 p-2 md:p-3 dark:text-purple-200 overflow-hidden">
      <h1 className="top-in text-3xl font-bold text-[#301934] dark:text-purple-200 tracking-wider font-heading">
        TECH STACK
      </h1>
      <div className="mt-6">
        <p className="slide-in-right">The Technologies I can work with</p>
        <div className="fade-in flex flex-wrap gap-x-[32px] gap-y-10  mt-4 dark:text-purple-100 place-items-center">
          {/* HTML */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={htmlImg}
              alt="html"
              className=" w-[120px] h-32 md:w-[135px] md:h-36 object-cover"
            />
            <p className="text-center font-medium">HTML</p>
          </div>
          {/* CSS */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={cssImg}
              alt="css"
              className=" w-[120px] h-32 md:w-[135px] md:h-36 object-cover"
            />
            <p className="text-center font-medium">Vanilla CSS</p>
          </div>
          {/* HTML */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={javascriptImg}
              alt="javascript"
              className=" w-[120px] h-32 md:w-[135px] md:h-36 object-cover"
            />
            <p className="text-center font-medium">Javascript</p>
          </div>
          {/* Typescript */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={tsLogo}
              alt="typescript"
              className=" w-[120px] h-32 md:w-[135px] md:h-36 object-cover"
            />
            <p className="text-center font-medium">Typescript</p>
          </div>
          {/* Tailwind */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={tailwindImg}
              alt="tailwind"
              className=" w-[120px] h-32 md:w-[135px] md:h-36 object-contain"
            />
            <p className="text-center font-medium">Tailwind</p>
          </div>
          {/* Reactjs */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={reactImg}
              alt="react"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-contain "
            />
            <p className="text-center font-medium">Reactjs</p>
          </div>
          {/* Nextjs */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={nextjsLogo}
              alt="nextjs"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-contain "
            />
            <p className="text-center font-medium">Nextjs</p>
          </div>
          {/* Nodejs */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={
                "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"
              }
              alt="nodejs"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-contain "
            />
            <p className="text-center font-medium">Nodejs</p>
          </div>
          {/* Mysql */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={
                "https://camo.githubusercontent.com/3790703659f70a467131f121409571356e614dbf36f372bf0d4221a3935ba4a3/68747470733a2f2f6761727574696c6f72656e7a6f2e6769746875622e696f2f696d616765732f6d7973716c2e706e673f"
              }
              alt="mysql"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-contain "
            />
            <p className="text-center font-medium">mySQL</p>
          </div>
          {/* Axios */}
          {/* <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={axiosImg}
              alt="axios"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-cove"
            />
            <p className="text-center font-medium">Axios</p>
          </div> */}
          {/* Shadcn */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={shadcnLogo}
              alt="shadcn"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-cove"
            />
            <p className="text-center font-medium">Shadcn</p>
          </div>
          {/* React query */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={reactqueryLogo}
              alt="react-query"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-contain"
            />
            <p className="text-center font-medium">Tanstack React Query</p>
          </div>
          {/* Zustand */}
          <div className="w-[200px] shadow-lg flex flex-col items-center shadow-slate-600 rounded-md md:p-2">
            <img
              src={zustandLogo}
              alt="zustand"
              className=" w-[120px] md:w-[135px] md:h-36 h-32 object-cover"
            />
            <p className="text-center font-medium">Zustand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
