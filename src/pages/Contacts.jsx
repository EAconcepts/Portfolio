import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="w-full dark:text-purple-100 mt-8 md:p-3 ">
      <h2 className=" top-in font-heading font-semibold text-[#301934] dark:text-purple-200 text-3xl tracking-wider">
        CONNECT WITH ME
      </h2>
      <div className="down-in flex flex-col items-center gap-5 md:gap-7 w-full mt-10 md:mt-20">
        <Link
          to="https://www.linkedin.com/in/emmanuel-amoo-9856b3209"
          target="_blank"
          className="flex justify-between px-4 md:px-10 py-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-400 dark:from-slate-600 dark:to-slate-400 dark:bg-slate-600 text-purple-100 font-edu tracking-widest md:text-xl font-semibold w-[80%] md:w-[50%]"
        >
          <p>LinkedIn</p>
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link
          to="https://github.com/EAconcepts"
          target="_blank"
          className="flex justify-between px-4 md:px-10 py-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-400 dark:from-slate-600 dark:to-slate-400 dark:bg-slate-600 text-purple-100 font-edu tracking-widest md:text-xl font-semibold w-[80%] md:w-[50%]"
        >
          <p>Github</p>
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link
          to="https://twitter.com/emmycodes_"
          target="_blank"
          className="flex justify-between px-4 md:px-10 py-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-400 dark:from-slate-600 dark:to-slate-400 dark:bg-slate-600 text-purple-100 font-edu tracking-widest md:text-xl font-semibold w-[80%] md:w-[50%]"
        >
          <p>Twitter</p>
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link
          to="mailto:amooemmanuel10@gmail.com"
          target="_blank"
          className="flex justify-between px-4 md:px-10 py-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-400 dark:from-slate-600 dark:to-slate-400 dark:bg-slate-600 text-purple-100 font-edu tracking-widest md:text-xl font-semibold w-[80%] md:w-[50%]"
        >
          <p>Email</p>
          <i className="fa-solid fa-envelope"></i>
        </Link>
        <Link
          to="https://flowcv.com/resume/jcaak23ct9"
          target="_blank"
          className="flex justify-between px-4 md:px-10 py-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-400 dark:from-slate-600 dark:to-slate-400 dark:bg-slate-600 text-purple-100 font-edu tracking-widest md:text-xl font-semibold w-[80%] md:w-[50%]"
        >
          <p>Download CV</p>
          <i className="fa-solid fa-download"></i>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
