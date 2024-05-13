import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="px-4">
      <svg width="802" height="769" className="absolute -z-10 left-0 top-0 hidden sm:block" viewBox="0 0 802 769" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5" filter="url(#filter0_f_1275_13850)">
      <path d="M130 -264L239.787 51.4337L595.067 51.4337L307.64 246.383L417.427 561.816L130 366.867L-157.427 561.816L-47.6396 246.383L-335.067 51.4337L20.2126 51.4337L130 -264Z" fill="#AA2A38" fill-opacity="0.2"/>
      </g>
      <defs>
      <filter id="filter0_f_1275_13850" x="-541.866" y="-470.8" width="1343.73" height="1239.42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="103.4" result="effect1_foregroundBlur_1275_13850"/>
      </filter>
      </defs>
      </svg>
      <div className="mx-auto flex min-h-[365px] max-w-[924px] flex-col items-center justify-start gap-8">
        <div className="flex flex-col items-center justify-start gap-6">
          <div className="flex items-center justify-center gap-2 rounded-[40px] border border-green-500 px-4 py-2">
            <div className="text-center text-sm font-normal text-green-500">
              Available for projects
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-6">
            <div className="w-full text-center text-[30px] sm:text-4xl font-bold text-white">
              Hey there, I&apos;m Fajuyagbe Ezekiel, your friendly neighborhood
              frontend developer 😊
            </div>
            <div className="max-w-[800px] text-center text-lg text-neutral-400">
              Creative minds with amazing designs and ideas rely on me, a
              frontend developer with three years of experience, to turn their
              visions into reality, ready to be shared with the world.
            </div>
          </div>
        </div>
        <Link href="" className="flex w-[200px] h-[50px] text-center text-base font-normal text-white items-center justify-center gap-1 rounded-[78px] border border-red-600 bg-rose-800 px-10 py-6">
            Chat me <FaTelegramPlane />
        </Link>
      </div>
    </section>
  );
}
