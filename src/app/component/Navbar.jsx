"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsMenuButtonFill } from "react-icons/bs";
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className=" w-full  fixed top-0 left-0 right-0 z-10 ">
      <div className=" justify-between px-4 mx-auto lg:max-w-[1500px] md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-2 md:block ">
          {/* LOGO */}
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Profile-img"
            className="rounded-2xl h-[100px] w-[200px] object-contain"
          />
          {/* hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbar(!navbar)}
              className=" text-green-500 rounded-full "
            >
              {navbar ? (
                <IoCloseCircleSharp className="text-5xl " />
              ) : (
                <BsMenuButtonFill className="text-5xl " />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 md:block md:pb-0 md:mt-0 ${
            navbar ? "p-10 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="font-extrabold md:flex md:items-center justify-end border-2 md:border-4 border-gray-500/30 border-b-gray-700/30 shadow-2xl bg-green-700/10 backdrop-blur-md md:bg-green-500/20 rounded-3xl">
            <li className="pb-4 pt-4 md:pb-2 md:pt-2 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-green-500/50 transition-[4] border-gray-400/40 md:hover:text-black rounded-2xl">
              <Link href="#acasa" onClick={() => setNavbar(!navbar)}>
                ACASA
              </Link>
            </li>
            <li className="pb-4 pt-4 md:pb-2 md:pt-2 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-green-500/50 transition-[4]  border-gray-400/40 md:hover:text-black rounded-2xl">
              <Link href="#servicii" onClick={() => setNavbar(!navbar)}>
                SERVICII
              </Link>
            </li>
            <li className="pb-4 pt-4 md:pb-2 md:pt-2 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-green-500/50 transition-[4] border-gray-400/40 md:hover:text-black rounded-2xl">
              <Link href="#tarife" onClick={() => setNavbar(!navbar)}>
                TARIFE
              </Link>
            </li>
            {/* <li className="pb-4 pt-4 md:pb-2 md:pt-2 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-green-400 border-green-400 md:hover:text-black rounded-2xl">
              <Link href="#foto" onClick={() => setNavbar(!navbar)}>
                GALERIE FOTO
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
