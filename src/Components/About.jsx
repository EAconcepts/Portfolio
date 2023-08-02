import React from "react";

const About = () => {
  return (
    <div className="flex flex-col mt-8 p-2 md:p-3 overflow-hidden ">
      <h1 className="top-in text-3xl uppercase font-heading tracking-wider font-bold text-[#301934] dark:text-purple-200">
        ABOUT ME
      </h1>
      <div className="slide-in-right mt-8 dark:text-purple-100 tracking-wide flex flex-col gap-3 font-nunito">
        <p>
          Greetings, Emmanuel Amoo is my name, a self taught and result driven
          developer, skilled in creating and implementing eye catching,
          functional and user friendly web applications.
        </p>
        <p>
          As a Distinction gradute in Computer Engineering from Federal
          Polytechnic Ede,Osun State, I've been exposed to the diversities in
          tech space and have my knowledge expanded, especailly as far as the
          tech space is concerned. With my relentless passion towards
          problem-solving and making things work, I have been able to stay
          updated with the latest trends in the web technology space.
        </p>
        <p>
          I am current seeking for a fast paced environment where I can deliver
          at a high quality my skill set and up my game, and the same where
          hardwork is handsomely rewarded.
        </p>
      </div>
    </div>
  );
};

export default About;
