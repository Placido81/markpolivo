import React from "react";
import Link from "next/link";

export default function FavoriteProjects() {
  return (
    <div className="bg-[#1B8EF2] -mt-40 dark:bg-[#010A26]">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center justify-between pt-40 mx-10 md:flex-row md:my-20 lg:my-0">
          <h1 className="max-w-lg pb-4 my-20 text-6xl font-bold text-center text-transparent transform skew-x-12 skew-y-10 lg:text-9xl md:my-0 md:text-white" id="favProjects">
            Favorite Projects
          </h1>
          <Link href="/work">
            <a className="flex flex-row items-center px-8 py-4 mb-20 space-x-4 text-xl font-semibold bg-white rounded-md shadow-lg md:mb-0 dark:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="text-red-700 bg-yellow-300 bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="6"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p className="text-red-700 underline" >View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="grid gap-8 pb-40 md:grid-cols-3 lg:-mt-8">
          {/* Single card */}
          <a
            href="https://github.com/Placido81/graffitti-gallery.git"
            className="block w-full col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden ring-2 ring-white">
              <img
                src="/graffitti-art.png"
                alt="graffitti-art"
                className="transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold text-white bg-red-500 rounded-md 0 top-10 left-10">
               Graffitti Art Gallery
              </h1>
              <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://github.com/Placido81/event-tracker.git"
            className="block w-full col-span-3 shadow-2xl sm:col-span-2 ring-2 ring-white"
          >
            <div className="relative overflow-hidden">
              {/* <div className="absolute inset-0 z-10 bg-black overlay bg-opacity-70"></div> */}
              <img
                src="/eventtracker.png"
                alt="business"
                className="transition ease-out transform hover:scale-125 duration-2000"
              />
              <h1 className="absolute px-2 text-xl font-bold text-white bg-red-500 rounded-md top-10 left-10">
                Event Tracker
              </h1>
              <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="https://github.com/Placido81/fsw-130/tree/main/week6/redux-contact-app"
            className="block object-cover w-full col-span-2 p-50 sm:col-span-1 "
          >
            <div className="relative shadow-2xl overflow">
              
              <img
                src="/projectPic1.png"
                alt="contact"
                className="object-cover transition ease-out transform border shadow-5xl hover:scale-125 duration-2000 h-600 w-400"
              />
              <h1 className="absolute px-2 text-xl font-bold text-white bg-red-500 rounded-md top-10 left-10">
                Redux Contact App
              </h1>
              <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10 ">
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
