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
      >
        <Leftarrow />
        <Rightarrow />
        {data.map((item) => {
          console.log(item);
          return <SwiperSlide key={item.id}>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
