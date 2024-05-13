import React from "react";
import Pattern from "./Pattern";
import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Csr() {
  return (
    <div className="px-4">
      <div className="relative mx-auto flex min-h-[405px] max-w-[1312px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-stone-950">
        <Pattern />
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-start gap-6">
            <div className="max-w-[899px] text-center text-[30px] font-bold text-zinc-100 sm:text-4xl">
              Get in touch with me, and let&apos;s work together to create
              something amazing!
            </div>
          </div>
          <div className="flex items-center text-2xl text-center font-normal text-white gap-4">
            <Link target="_blank" href="https://t.me/VGDYearstu" className="flex w-[55px] h-[50px] items-center justify-center rounded-full border-2 border-red-600 bg-rose-800">
              <FaTelegramPlane />
            </Link>
            <Link target="_blank" href="https://wa.link/qjphjm" className="flex w-[55px] h-[50px] items-center justify-center rounded-full border-2 border-red-600 bg-rose-800">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
