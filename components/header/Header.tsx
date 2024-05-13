"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      // Add a class to the body to prevent scrolling
      document.body.classList.add("no-scroll");
    } else {
      // Remove the class from the body to allow scrolling
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showNav]);

  const showNavState = () => {
    setShowNav(true);
  }

  const closeNavState = () => {
    setShowNav(false);
  }

  return (
    <header className="p-4">
      <div className="mx-auto flex min-h-[60px] max-w-[935px] flex-col items-start justify-start gap-2 rounded-[57px] bg-stone-950 px-5 py-4 sm:min-h-[83px] sm:px-8">
        <div className="flex items-center justify-between self-stretch">
          <Link href="" className="text-center text-xl font-bold text-white">
            ExyCode
          </Link>
          <div className={`fixed z-40 left-0 right-0 top-0 w-full h-screen backdrop-blur-sm bg-black/50 block md:hidden ${showNav ? "opacity-1 visible" : "opacity-0 invisible"}`} />
          <nav className={`fixed right-0 top-0 z-50 h-screen w-full sm:w-[400px] bg-rose-800 md:relative  md:h-[25px] md:max-w-max md:bg-transparent ${showNav ? "left-0" : "left-[-100%] md:left-0"}`}>
            <div className="mb-5 flex items-center justify-between border-b border-b-[#f3f3f3]/20 p-4 py-6 text-white md:hidden">
              <Link href="" className="text-left text-xl font-bold">
                ExyCode
              </Link>
              <IoMdClose className="text-4xl" onClick={closeNavState} />
            </div>
            <ul className="flex w-full flex-col items-start justify-start gap-0 md:flex-row md:gap-4">
              <li className="w-full md:max-w-max">
                <Link
                  href=""
                  className="block w-full p-4 text-left text-base font-normal text-white md:max-w-max md:p-0 md:text-center"
                  onClick={closeNavState}
                >
                  Home
                </Link>
              </li>
              <li className="w-full md:max-w-max">
                <Link
                  href="#works"
                  className="block w-full p-4 text-left text-base font-normal text-white md:max-w-max md:p-0 md:text-center"
                  onClick={closeNavState}
                >
                  Works
                </Link>
              </li>
              <li className="w-full md:max-w-max">
                <Link
                  href=""
                  className="block w-full p-4 text-left text-base font-normal text-white md:max-w-max md:p-0 md:text-center"
                  onClick={closeNavState}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <Link
              href=""
              className="flex h-11 items-center justify-center gap-1 rounded-[40px] border border-red-600 bg-rose-800 px-4 py-4 text-center text-base font-normal text-white sm:px-8"
            >
              Chat me <FaWhatsapp />
            </Link>
            <div className="ml-3 flex flex-col gap-1 md:hidden" onClick={showNavState}>
              <span className="h-[3px] w-7 bg-white"></span>
              <span className="h-[3px] w-7 bg-white"></span>
              <span className="h-[3px] w-7 bg-white"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
