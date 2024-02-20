import React, { useState } from "react";
import { TETabs, TETabsItem } from "tw-elements-react";


function ServiceSection() {
     const [verticalActive, setVerticalActive] = useState("tab1");
     const handleVerticalClick = (value) => {
          if (value === verticalActive) {
               return;
          }
          setVerticalActive(value);
     };
     return (
          <div>
               <section className="bg-white my-16">
                    <div className="grid max-w-screen-xl px-32  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                         <div className="mr-auto place-self-center lg:col-span-6">
                              <h1 className="max-w-2xl mb-4  font-semibold tracking-tight leading-none md:text-5xl xl:text-3xl text-black">
                                   Flexible solutions <div>for all your needs</div>
                              </h1>
                              <div className="flex items-start">
                                   <TETabs vertical>
                                        <TETabsItem
                                             onClick={() => handleVerticalClick("tab1")}
                                             active={verticalActive === "tab1"}
                                             className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
                                        >
                                             Virtual Meetings
                                        </TETabsItem>
                                        <TETabsItem
                                             onClick={() => handleVerticalClick("tab2")}
                                             active={verticalActive === "tab2"}
                                             className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
                                        >
                                             Live Chat
                                        </TETabsItem>
                                        <TETabsItem
                                             onClick={() => handleVerticalClick("tab3")}
                                             active={verticalActive === "tab3"}
                                             className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
                                        >
                                             AI Companion
                                        </TETabsItem>
                                        <TETabsItem
                                             onClick={() => handleVerticalClick("tab4")}
                                             active={verticalActive === "tab4"}
                                             className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
                                        >
                                             AI Summarize
                                        </TETabsItem>
                                        <TETabsItem
                                             onClick={() => handleVerticalClick("tab5")}
                                             active={verticalActive === "tab5"}
                                             className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
                                        >
                                             Meeting Clip
                                        </TETabsItem>
                                   </TETabs>
                              </div>
                         </div>
                         <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
                              <img
                                   src="https://cdn.dribbble.com/userupload/9682417/file/original-a86606ba17ec185657e71c9ce2d8e7ad.png?resize=400x300&vertical=center"
                                   alt="mockup"
                                   style={{ borderRadius: "10px" }} // Adjust the value to your desired border radius
                              />
                         </div>
                    </div>
               </section>
          </div>
     );
}

export default ServiceSection;
