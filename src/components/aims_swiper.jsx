import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../assets/images/fms/slide1.png';
import slide2 from '../assets/images/fms/slide2.png';
import slide3 from '../assets/images/fms/slide3.png';
import slide4 from '../assets/images/fms/slide4.png';
import slide5 from '../assets/images/fms/slide5.png';
import slide6 from '../assets/images/fms/slide6.png';

const imageMap = {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "/src/index.css"
import '../assets/css/aimsswiper.css';

export default function Amisswiper() {

    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(6); //500
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 6 }).map((_, index) => `slide${index + 1}`) //remember to delete the space
    );



    const prepend = () => {
        setSlides([
            `slide${prependNumber.current - 2}`,
            `slide${prependNumber.current - 1}`,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    console.log('slides', slides);

    const append = () => {
        setSlides([...slides, 'slide' + appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };


    return (
        <>
            <Swiper
                modules={[Virtual, Navigation, Pagination, Autoplay]}
                onSwiper={setSwiperRef}
                slidesPerView={3} // default
                centeredSlides={false}
                spaceBetween={30}
                pagination={false}
                navigation={true}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    960: {
                        slidesPerView: 3,
                    }
                }}
                autoplay={{
                    delay: 2000,
                }}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>

                        {/* <img src={`../src/assets/images/fms/${slideContent}.png`} alt={slideContent} /> */}
                        <img src={imageMap[slideContent]} alt={slideContent} />

                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
}
