import React from "react";

function HeroSection() {
     return (
          <div>
               <section className="bg-white ">
                    <div className="grid max-w-screen-xl px-5 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                         <div className="mr-auto place-self-center lg:col-span-6">
                              <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
                                   Supercharge your meetings and <div>made it effective</div>
                              </h1>
                              <p className="max-w-2xl mb-6 font-thin text-sm lg:mb-8 md:text-lg text-gray-500">
                                   Experience the future of virtual communication today.<p>Say hello to a whole new way of connecting</p>
                              </p>
                              <a
                                   href="#"
                                   className="inline-flex items-center justify-center px-5 py-2 mr-3 text-base font-medium text-center text-white rounded-3xl bg-blue-700  "
                              >
                                   Start meeting now
                              </a>
                         </div>
                         <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
                         <img
                                   src="https://cdn.dribbble.com/userupload/8199356/file/original-9efa7748ab2131e43312a04e89d016a8.png?resize=450x338&vertical=center"
                                   alt="mockup"
                                   style={{ borderRadius: "10px" }} // Adjust the value to your desired border radius
                              />
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default HeroSection;
