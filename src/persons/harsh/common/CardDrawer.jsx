import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NftCards from '@/persons/harsh/common/NftCards';

const CardDrawer = ({color}) => {
  

  // Define slides
  const slides = useMemo(() => [...Array(4)], []);

  return (
    <div className="w-full max-w-screen justify-center overflow-hidden gap-1">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={18}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        speed={800}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { spaceBetween: 30, slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="custom-swiper w-full"
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <NftCards
              width="w-[300px] sm:w-[250px] md:w-[250px] lg:w-[297px]"
              height="h-[350px] sm:h-[380px] md:h-[440px]"
              bgcolor={color}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardDrawer;
