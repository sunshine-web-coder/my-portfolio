import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaRegEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="mt-[120px] px-4">
      <div className="mx-auto max-w-[1312px] pb-8 text-xl">
        <div className="mb-5 text-zinc-100">
          <Link href="" className="text-center text-2xl font-bold text-white">
            ExyCode
          </Link>
          <Link
            href=""
            className="flex h-[42px] max-w-[308px] items-center gap-2 py-2 text-lg"
          >
            <FaRegEnvelope />
            <p className="text-center">fajuyabeezekiel90@gmail.com</p>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[18px] text-base text-neutral-600 sm:text-xl">
          <div className="flex items-center justify-start gap-[26px]">
            <Link target="_blank" href="https://t.me/VGDYearstu">
              <FaTelegramPlane />
            </Link>
            <Link target="_blank" href="https://github.com/sunshine-web-coder">
              <FiGithub />
            </Link>
            <div className="flex items-center justify-start gap-2">
              <IoCallOutline />
              <Link href="https://wa.link/qjphjm" className="flex items-center gap-2">
                <FaWhatsapp />
                <span className="text-center font-bold">+2349079709430</span>
              </Link>
            </div>
          </div>
          <div className="text-left sm:text-right font-bold">
            <p>Coded by <Link href="">ExyCode</Link></p>
            <p>Designed by Ajayi Oluwatobi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
