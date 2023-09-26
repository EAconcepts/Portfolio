import React from "react";
import { Link } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import { TailSpin } from "react-loader-spinner";

export const Projects = ({
  githubProjects,
  setReload,
  reloadGithub,
  isPending,
}) => {
  // console.log(githubProjects)
  const staticProjects = [
    {
      name: "Blog App",
      description: `A Blog Website, Where users can read blog stories, or sign up to write, update or delete their own blog stories.
        It is built with ReactJs, TailwindCSS, Redux toolkit for state management 
        `,
      githubLink: "https://github.com/dkrest1/blog-api",
      liveLink: "https://my-blog-dkrest1.vercel.app/",
    },
    {
      name: "Flight-Search App",
      description: `A flight search App to retrieve flight information and display search results. Results can be sorted or filtered according to various parameters.
      It is built with ReactJs, TailwindCSS, Zustand for state management.
        `,
      githubLink: "https://github.com/dkrest1/flight-search-api",
      liveLink: "https://flight-search-api.vercel.app/",
    },
  ];

  return (
    <div className="h-full md:flex mt-8 p-2 md:p-3 md:flex-col dark:text-purple-200 text-[#301934]">
      <h2 className="top-in text-lg md:text-3xl font-bold font-heading tracking-wider">
        MY PROJECTS
      </h2>
      <div className="w-full flex flex-col justify-center mt-8">
        <div className="w-full">
          <div className=" fade-in flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-8 sm:place-items-center ">
            {isPending ? (
              //  <p>loading...</p>
              <TailSpin height="60" width="60" color="blue" />
            ) : githubProjects ? (
              <>
                {staticProjects.map((project, index) => (
                  <div
                    className="bg-purple-100 dark:bg-gray-700 text-[#301934] dark:text-purple-100 w-60 sm:w-56 md:w-64 h-64 md:h-72 my-4 px-4 md:px-5 pt-3 pb-8 flex flex-col justify-between items-center shadow-lg shadow-slate-600 rounded-md"
                    key={index}
                  >
                    <div>
                      <h1 className="text-lg text-purple-950 dark:text-purple-200 font-semibold  mb-2 uppercase text-center">
                        {project.name}
                      </h1>
                      <p className="text-sm mb-2">{project.description}</p>
                    </div>
                    <div className="flex flex-row gap-8">
                      <Link
                        to={project.githubLink}
                        target="_blank"
                        className="text-purple-950 dark:text-purple-200 hover:text-purple-800 hover:text-lg hover:font-medium"
                      >
                        Github
                      </Link>
                      <Link
                        to={project.liveLink}
                        target="_blank"
                        className="text-purple-950 dark:text-purple-200 hover:text-purple-800 hover:text-lg hover:font-medium"
                      >
                        Live Link
                      </Link>
                    </div>
                  </div>
                ))}
                {githubProjects.map((project) => (
                  <div
                    className="bg-purple-100 dark:bg-gray-700 text-[#301934] dark:text-purple-100 w-60 sm:w-56 md:w-64 h-64 md:h-72 my-4 px-4 md:px-5 pt-3 pb-8 flex flex-col justify-between items-center shadow-lg shadow-slate-600 rounded-md"
                    key={project.id}
                  >
                    <div>
                      <h1 className="text-lg text-purple-950 dark:text-purple-200 font-semibold  mb-2 uppercase text-center">
                        {project.name}
                      </h1>
                      <p className="text-sm mb-2">{project.description}</p>
                    </div>
                    <div className="flex flex-row gap-8">
                      <Link
                        to={project.html_url}
                        target="_blank"
                        className="text-purple-950 dark:text-purple-200 hover:text-purple-800 hover:text-lg hover:font-medium"
                      >
                        Github
                      </Link>
                      {project.homepage !== "" &&
                        project.homepage !==
                          "https://emmanuelamoo.vercel.app" && (
                          <Link
                            to={project.homepage}
                            target="_blank"
                            className="text-purple-950 dark:text-purple-200 hover:text-purple-800 hover:text-lg hover:font-medium"
                          >
                            Live Link
                          </Link>
                        )}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              !isPending &&
              !githubProjects && (
                <p className="">
                  Couldn't fetch projects.{" "}
                  <button
                    onClick={() => setReload(!reloadGithub)}
                    className=" underline"
                  >
                    Try again...
                  </button>
                </p>
              )
            )}
          </div>
        </div>
        <div className="down-in mt-10">
          <h2 className="font-bold text-lg md:text-3xl">GITHUB CONTRIBUTION</h2>
          <GitHubCalendar
            username="eaconcepts"
            fontSize={14}
            blockSize={14}
            blockMargin={4}
          />
        </div>
      </div>
    </div>
  );
};
