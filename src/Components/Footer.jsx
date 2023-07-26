import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav className="down-in flex flex-row justify-center gap-4 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : `bg-purple-700 text-slate-200 dark:bg-gray-700 px-2 rounded-sm dark:text-purple-200`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : `bg-purple-700 text-slate-200 dark:bg-gray-700 px-2 rounded-sm dark:text-purple-200`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/tech-stack"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : `bg-purple-700 text-slate-200 dark:bg-gray-700 px-2 rounded-sm dark:text-purple-200`
          }
        >
          Tech Stack
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : `bg-purple-700 text-slate-200 dark:bg-gray-700 px-2 rounded-sm dark:text-purple-200`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? "hidden"
              : `bg-purple-700 text-slate-200 dark:bg-gray-700 px-2 rounded-sm dark:text-purple-200`
          }
        >
          Contact
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
