"use client";

import React from 'react';
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Billboard as BillboardType} from "@/types";

import {Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Billboard from "@/components/ui/billboard";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

interface BillboardSliderProps {
    billboards: BillboardType[]
}

const BillboardSlider: React.FC<BillboardSliderProps> = (
    {billboards}
) => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="billboardSwiper"
        >
            {Object.values(billboards).map((billboard) => (
                <SwiperSlide key={billboard.id}>
                    <Billboard data={billboard} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BillboardSlider;