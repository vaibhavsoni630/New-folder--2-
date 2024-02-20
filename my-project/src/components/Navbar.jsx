import React, { useState } from "react";
import { Dropdown } from 'flowbite-react';
import Modal from "../modal/Modal";


function Navbar() {
     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
       setIsModalOpen(true);
     };
   
     const closeModal = () => {
       setIsModalOpen(false);
     };
     return (
          <div>
               <nav class="bg-white border-gray-200 ">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                         <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                              <span class="self-center text-2xl font-bold  text-black">Roomity</span>
                         </a>
                         <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                              {/* <button
                                   type="button"
                                   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              > */}
                              <button
                                   type="button" onClick={openModal}
                                   class="text-white mx-4 bg-blue-700 hover:bg-blue-500   font-medium rounded-2xl text-sm px-4 py-2 text-center "
                              > Login and SignUp</button>
                               <Modal isOpen={isModalOpen} onClose={closeModal}/>
                              
                                     <Dropdown class=" text-white hover:bg-blue-500 font-semibold rounded-3xl bg-blue-700 " label="Menu" dismissOnClick={false}>
                                        <Dropdown.Item>Product</Dropdown.Item>
                                        <Dropdown.Item>Services</Dropdown.Item>
                                        <Dropdown.Item>Contact Us</Dropdown.Item>
                                        <Dropdown.Item>Partner With Us</Dropdown.Item>
                                    </Dropdown>
                              {/* </button> */}
                              <button
                                   data-collapse-toggle="navbar-cta"
                                   type="button"
                                   class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                   aria-controls="navbar-cta"
                                   aria-expanded="false"
                              >
                                   <span class="sr-only">Open main menu</span>
                                   <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path
                                             stroke="currentColor"
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             stroke-width="2"
                                             d="M1 1h15M1 7h15M1 13h15"
                                        />
                                   </svg>
                              </button>
                         </div>
                         <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                              <ul class="flex flex-col  p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 font-bold ">
                                   <li>
                                        <a href="#" class="block py-2 px-3 md:p-0 rounded md:hover:text-blue-700    ">
                                             Learn
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" class="block py-2 px-3 md:p-0 rounded md:hover:text-blue-700    ">
                                             Mentors
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" class="block py-2 px-3 md:p-0 rounded md:hover:text-blue-700    ">
                                             Compete
                                        </a>
                                   </li>
                                   <li>
                                        <a href="#" class="block py-2 px-3 md:p-0 rounded md:hover:text-blue-700    ">
                                             Jobs
                                        </a>
                                   </li>
                              </ul>
                         </div>
                       




                    </div>
               </nav>
          </div>
     );
}

export default Navbar;
