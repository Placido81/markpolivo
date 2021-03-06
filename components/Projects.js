import React from "react";
import userData from "constants/data";

export default function Projects() {
  return (
    <section className="bg-[#1B8EF2] dark:bg-gray-700" id="proj-section">
      <div className="h-48 max-w-6xl mx-auto dark:bg-gray-700">
        <h1 className="px-20 text-5xl font-bold text-center transform skew-y-10 md:text-9xl md:text-left " id="proj">
          My Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 mx-auto md:grid-cols-2">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="block w-full shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="object-cover h-72">
          <img
            src={imgUrl}
            alt="portfolio"
            className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000"
          />
        </div>
        <h1 className="absolute px-2 text-xl font-bold bg-red-500 rounded-md top-10 left-10 text-red-50">
          {title}
        </h1>
        <h1 className="absolute text-xl font-bold text-red-600 bottom-10 left-10">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
