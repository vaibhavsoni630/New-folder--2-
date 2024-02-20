import React from "react";

function Slidersection() {
     return (
          <div>
               <div className=" bg-gray-100 py-15 flex flex-col mx-auto max-w-screen-xl justify-center sm:py-12">
                    <h2 className="mb-8- lg:mb-16 text-3xl gap-2 font-semibold tracking-tight leading-tight text-center  text-black md:text-6xl">Now you can have conversation <div>without missing anything</div></h2>
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                         <div className="absolute inset-0 bg-gradient-to-r  from-gray-200 to-gray-400 shadow-lg transform   -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
                         <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 shadow-lg transform   -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-2">
                              <div className="max-w-md mx-auto">
                                   <div className="slide-container">
                                        <div className="relative slide">
                                        <img src="./src/assets/social-image.png" style={{ width: "300px" }} alt="Social Image" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Slidersection;
