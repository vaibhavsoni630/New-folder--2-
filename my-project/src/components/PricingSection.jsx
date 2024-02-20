import React from "react";

function PricingSection() {
     return (
          <div>
               <div className="bg-gray-100 py-15 flex flex-col mx-auto max-w-screen-xl justify-center sm:py-12">
                    <h2 className="mb-8 lg:mb-16 text-3xl gap-2 font-semibold tracking-tight leading-tight text-center text-black md:text-6xl">
                         Simple Pricing <div>and clear Values</div>
                    </h2>
                    <div className="max-w-screen-xl mx-auto flex flex-row justify-center gap-6">
                         <div className="max-w-md flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow">
                              <h5 className="mb-4 text-xl font-medium text-gray-500">Basic plan</h5>
                              <div className="flex items-baseline text-gray-900">
                                   <span className="text-3xl font-semibold">$</span>
                                   <span className="text-5xl font-extrabold tracking-tight">49</span>
                                   <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
                              </div>
                              <ul role="list" className="space-y-5 my-7">
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">2 team members</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Up to 100 attendies per meeting</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Best app interfece</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">24/7 customer support</span>
                                   </li>
                              </ul>
                              <button
                                   type="button"
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                              >
                                   Choose plan
                              </button>
                         </div>
                         {/* <!-- Repeat the above card structure for additional cards --> */}
                         <div className="max-w-md flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow">
                            <h3 className=" rounded-3xl  mb-5 text-white flex justify-center bg-gradient-to-r from-violet-950 to-blue-700">most popular</h3>
                              <h5 className="mb-4 text-xl font-medium text-gray-500">Standard plan</h5>
                              <div className="flex items-baseline text-gray-900">
                                   <span className="text-3xl font-semibold">$</span>
                                   <span className="text-5xl font-extrabold tracking-tight">149</span>
                                   <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
                              </div>
                              <ul role="list" className="space-y-5 my-7">
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">2 team members</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Up to 100 attendies per meeting</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Best app interfece</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">24/7 customer support</span>
                                   </li>
                              </ul>
                              <button
                                   type="button"
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                              >
                                   Choose plan
                              </button>
                         </div>
                         <div className="max-w-md flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow">
                              <h5 className="mb-4 text-xl font-medium text-gray-500">Pro plan</h5>
                              <div className="flex items-baseline text-gray-900">
                                   <span className="text-3xl font-semibold">$</span>
                                   <span className="text-5xl font-extrabold tracking-tight">299</span>
                                   <span className="ms-1 text-xl font-normal text-gray-500">/month</span>
                              </div>
                              <ul role="list" className="space-y-5 my-7">
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">2 team members</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Up to 100 attendies per meeting</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">Best app interfece</span>
                                   </li>
                                   <li className="flex items-center">
                                        <svg
                                             className="w-6 h-6 text-blue-700"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 ms-3">24/7 customer support</span>
                                   </li>
                              </ul>
                              <button
                                   type="button"
                                   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                              >
                                   Choose plan
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default PricingSection;
