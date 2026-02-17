import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {

    return (
        <nav className="w-full shadow-sm">
            <div className="container mx-auto px-4 lg:px-12 py-4 flex items-center">
                <div>
                    <img src="./images/logo.png" alt="Logo" />
                </div>
                <ul className="hidden sm:flex gap-2 xl:gap-8 font-Libre text-sm xl:text-[16px] font-normal leading-6 items-center xl:ml-14 md:ml-10 ml-3">
                    <li className="cursor-pointer hover:text-primary">About</li>

                    <li className="flex items-center cursor-pointer hover:text-primary">
                        Products 
                        <IoIosArrowDown className="w-4 h-4 text-primary ml-1" />
                    </li>

                    <li className="cursor-pointer hover:text-primary">
                        Creators
                        <sup className="ml-1 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                            NEW
                        </sup>
                    </li>

                    <li className="cursor-pointer hover:text-primary">Blog</li>
                    <li className="cursor-pointer hover:text-primary">Contact</li>
                </ul>
                <div className="hidden sm:flex gap-3 xl:ml-142 md:ml-50 ml-12">
                    <div className="w-11 h-11 rounded-full bg-[#F0F6FD] text-primary flex justify-center items-center">
                        <RiContactsLine size={20} />
                    </div>

                    <div className="w-11 h-11 rounded-full bg-primary text-white flex justify-center items-center">
                        <CiShoppingCart size={20} />
                    </div>
                </div>

                <div className="sm:hidden ml-50">
                    <button>
 <HiOutlineMenu size={28} />
                    </button>
                </div>
            </div>
                <div className="sm:hidden px-6 pb-6">
                    <ul className="flex flex-col gap-4 font-Libre text-[16px]">
                        <li>About</li>
                        <li className="flex items-center">
                            Products
                            <IoIosArrowDown className="w-4 h-4 text-primary ml-1" />
                        </li>
                        <li>
                            Creators
                            <sup className="ml-1 bg-primary text-white text-xs px-2 py-1 rounded-full">
                                NEW
                            </sup>
                        </li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                    <div className="flex gap-3 mt-6">
                        <div className="w-11 h-11 rounded-full bg-[#F0F6FD] text-primary flex justify-center items-center">
                            <RiContactsLine size={20} />
                        </div>

                        <div className="w-11 h-11 rounded-full bg-primary text-white flex justify-center items-center">
                            <CiShoppingCart size={20} />
                        </div>
                    </div>
                </div>

        </nav>
    )
}

export default Navbar
