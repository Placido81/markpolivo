import React from "react";
import userData from "constants/data";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


export default function AboutMe() {
  return (
    <section className="bg-[#1B8EF2] dark:bg-gray-800" id="proj-section" >
      <div className="h-48 max-w-6xl mx-auto bg-[#1B8EF2] dark:bg-gray-800">
        <h1 className="py-10 text-5xl font-bold text-center transform skew-x-12 -rotate-5 -p-20 md:text-9xl md:text-left" id="aboutMe">
          About Me.
        </h1>
      </div>
      
      <div className="bg-[#F1F1F1] -mt-16 dark:bg-gray-900">
        <div className="max-w-6xl pt-20 mx-auto text-container">
       
          <p
            className="mx-4 text-2xl font-semibold leading-loose md:text-4xl"
            style={{ lineHeight: "3rem" }}
          >
         
          <RoughNotation type="highlight" className="bg-red-500 text-gray-50" >
            {userData.about.title} Think It Design It Build It!
            </RoughNotation>
          
          </p>
          
        </div>
      </div>
      
        
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="grid max-w-6xl grid-cols-1 pt-20 mx-auto md:grid-cols-3 gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 underline dark:text-yellow-300" >
                Contact Me
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 ">
                For any Reason you have some questions Please Ask Me
                <a
                  href={`mailto:${userData.email}`}
                  className="font-bold text-red-600 border-b-2 border-red-600 dark:border-gray-300 dark:text-yellow-300"
                >
                  mail
                </a>
                and I'll get back to you imediately 
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 underline dark:text-yellow-300">
                Job Opportunities
              </h1>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                I'm looking for a job currently, If you see me as a good fit,
                check my
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="font-bold text-red-600 border-b-2 border-red-600 dark:border-gray-300 dark:text-yellow-300"
                >
                  CV
                </a>
                and I'd love to Create Great things with your company.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="mt-8 text-xl font-semibold text-gray-700 underline dark:text-yellow-300">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row items-center justify-start ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-blue-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr; </div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-red-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300 hover:text-blue-400"></div>
                    Twitter
                   
                  </p>
                 
                </a>
               
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-yellow-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="relative overflow-hidden font-mono text-lg text-gray-500 dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-green-600 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row items-center justify-start">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                 
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="mb-4 text-xl text-gray-700 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="inline-block px-2 py-1 text-3xl font-bold transform bg-red-500 rounded-md text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8 transition duration-500 ease-in-out delay-300">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="w-20 h-20 mx-4 my-4 animate-pulse"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="w-20 h-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
