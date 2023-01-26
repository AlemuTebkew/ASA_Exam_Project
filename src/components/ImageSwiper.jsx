// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swiper.css";
// import "./car.css";

// import required modules
import { Navigation } from "swiper";

export default function ImageSwiper(props) {
  return (
    <div>
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        {props.images.map((img, index) => {
          return (
            <SwiperSlide className="" key={index}>
             
              <img className="carImage" src={img} alt="ll" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
