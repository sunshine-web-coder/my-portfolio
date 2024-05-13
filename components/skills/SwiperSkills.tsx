"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { skillData } from "./data";
import Image from "next/image";

export default function SwiperSkills() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 7,
        },
        767: {
          slidesPerView: 5,
        },
      }}
    >
      {skillData.map((item, i) => (
        <SwiperSlide key={i} className="w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            {/* <Image src={item.logo} width={100} height={100} className="relative h-[62.34px] w-[69.80px]" alt="" /> */}
            {item.logo}
            <div className="text-base sm:text-xl font-bold text-neutral-400">{item.label}</div>
          </div>
        </SwiperSlide>
        ))}
    </Swiper>
  );
}
