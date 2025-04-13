import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

// Image paths
const images = [
  "https://picsum.photos/500/300",
  "https://picsum.photos/500/301",
  "https://picsum.photos/500/302",
  "https://picsum.photos/500/303",
  "https://picsum.photos/500/300",
  "https://picsum.photos/500/301",
  "https://picsum.photos/500/302",
  "https://picsum.photos/500/303",
];

const ProductSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1, // Mobile
        },
        640: {
          slidesPerView: 2, // Tablet
        },
        1024: {
          slidesPerView: 3, // Desktop
        },
      }}
      modules={[FreeMode, Autoplay]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="mr-4 ">
          <img className='px-4' src={src} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default ProductSlider;

