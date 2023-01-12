import React from "react";
//import styles
import { SectionServices } from "./styles";
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./styleSwiper/swiper.css";

// import required modules
import { Pagination } from "swiper";

const Services = () => {
    return (
        <SectionServices>
            <h1>Services</h1>
            <p>Lorem Ipsum is simply dummy text of the printing the 1500s, when an unknown prambled it to make a type specimen book. It has survived not. </p>

            <div className="containSwiper">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </SectionServices>
    )
}

export { Services };