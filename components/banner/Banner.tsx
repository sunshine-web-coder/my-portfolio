import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="px-4">
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
              visions into reality, ready to be shared with the world
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
