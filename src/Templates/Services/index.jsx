import React from "react";
//import styles
import { SectionServices } from "./styles";
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./styleSwiper/swiper.css";
import "swiper/css/bundle";
import { Pagination } from "swiper";

//import DATASERVICES
import { dataServices } from "@utils/data";

//import feather icons
import { ExternalLink, Truck} from 'react-feather';

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
                    ${dataServices.map((data, i) => <SwiperSlide key={i}>

                        <div>
                            <figure>
                                <img src={data.img} alt={data.name} />
                                <h5>{data.name}</h5>
                            </figure>
                        </div>

                    </SwiperSlide>)};
                </Swiper>
            </div>

            <div className="servicesContain_Buttons">
                
                <button><ExternalLink color="#fff" size={18} />View More</button>
                <button><Truck color="#fff" size={18} />View Cars</button>
            </div>
        </SectionServices>
    )
}

export { Services };