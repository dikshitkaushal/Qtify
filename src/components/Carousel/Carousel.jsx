import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Leftarrow from "./Leftarrow/Leftarrow";
import Rightarrow from "./Rightarrow/Rightarrow";
import "swiper/css";

const Carousel = ({ data, component }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={Navigation}
        slidesPerView={7}
        spaceBetween={40}
        allowTouchMove
        breakpoints={{
          375: {
            // width: 576,
            slidesPerView: 1,
          },
          535: {
            // width: 768,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          900: {
            // width: 768,
            slidesPerView: 4,
          },
          1100: {
            // width: 768,
            slidesPerView: 5,
          },
          1250: {
            // width: 768,
            slidesPerView: 6,
          },
          1400: {
            // width: 768,
            slidesPerView: 7,
          },
          1600: {
            // width: 768,
            slidesPerView: 8,
          },
          2000: {
            // width: 768,
            slidesPerView: 10,
          },
        }}
      >
        <Leftarrow />
        <Rightarrow />
        {data.map((item) => {
          return <SwiperSlide key={item.id}>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
