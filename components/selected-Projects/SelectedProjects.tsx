import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SelectedProjects() {
  return (
    <div className="px-4">
      <div className="mx-auto flex max-w-[1312px] flex-col items-center justify-start gap-16">
        <div className="flex items-center justify-center gap-2 rounded-[40px] border border-white px-10 py-2">
          <div className="text-center text-[20px] sm:text-[32px] font-normal text-zinc-100">
            Completed Projects
          </div>
        </div>
        <div className="flex flex-wrap items-start w-full justify-start gap-5">
          <div className="flex w-[420px] flex-col items-start justify-start gap-2 self-stretch overflow-hidden rounded-2xl border bg-stone-950">
            <div className="flex flex-col">
              <Image
                src="https://i.imgur.com/BNLPgpu.png"
                width={500}
                height={500}
                className="relative h-[225px] w-[614px] rounded-xl"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5 px-4 py-5">
              <h5 className="text-left text-[25px] font-bold text-white">
                Solisq Landing Page
              </h5>
              <p className="self-stretch text-left text-lg font-bold text-neutral-600">
                Solisq is a scalable Proof of Stake (PoS) blockchain designed with
                the Cosmos SDK.
              </p>
              <div className="text-white flex flex-wrap gap-2 text-xs mb-2">
                <span className="border p-2 py-1">NEXT JS</span>
                <span className="border p-2 py-1">TAIWINDCSS</span>
              </div>
              <Link
                href=""
                className="flex w-full items-center justify-center gap-2 self-stretch rounded-[78px] border border-red-600 bg-rose-800 px-8 py-2 text-center text-base font-normal text-white"
              >
                Go to site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
