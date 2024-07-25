import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";

const Carousel = () => {
  const items = useSelector((state) => state.carousel);
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper relative mt-1"
      >
        {items.map((item) => (
          <SwiperSlide>
            <img src={item.image} alt={item.title} className="object-cover" />
            <div
              className="absolute bottom-0 right-0 text-white
             bg-black text-center p-4"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Carousel;
