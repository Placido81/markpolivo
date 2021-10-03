import React from "react";
import userData from "@constants/data";
import { RoughNotation } from "react-rough-notation";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] dark:bg-gray-700">
      <div className="max-w-6xl px-4 py-10 mx-auto md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-500"></div>
        <div className="flex flex-col justify-between mt-8 space-y-5 md:space-y-0 md:flex-row md:items-center">
        <RoughNotation type="underline" show={true} color="red" animationDuration={10}  iterations={5}>
          <div className="mt-10">
          <img src="./copywright.png" className="h-4 md:w-4 " id="copywright"/>
           <p> Mark P.Olivo. All Rights Reserved.</p>
          
          </div>
          </RoughNotation>
          
          <RoughNotation type="box" show={true} color="red">
          <div>
          
            {/* Support me by keeping this in the footer, please. :) */}
           
            <p className=" place-items-center">
              Developed by  
              <div className="inline-block mx-3 ">
            
                <a
                  className="px-2 py-1 rounded-md hover:bg-red-500 hover:text-gray-50"
                  href="https://markpolivo.in"
                >
                <img src="./heart.png" className="mr-6 h-7 md:w-7" id="heart" />
                 Mark P. Olivo
                </a>
                
              </div>
            </p>
          </div>
          </RoughNotation>
          <div className="flex flex-row items-center space-x-4">
            <a
              href={userData.socialLinks.facebook}
              className="text-base font-normal text-gray-600 dark:text-yellow-300"
            >
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
            class="feather feather-github">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
            </path>
            </svg>
            </a>
            <a
              href={userData.socialLinks.twitter}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-5 h-5 text-blue-400 bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              href={userData.socialLinks.linkedin}
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="w-5 h-5 text-blue-800 bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
