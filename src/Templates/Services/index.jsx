import React from 'react';
//import styles
import { SectionServices } from './styles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './styleSwiper/swiper.css';
import 'swiper/css/bundle';
import { Pagination, Autoplay } from 'swiper';

//import DATASERVICES
import { dataServices } from '@utils/data';

//import feather icons
import { Truck, MapPin } from 'react-feather';

//import navigation for redirects
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigator = useNavigate();

    const goCar = () => {
        navigator('/car');
    };
    
    //logic fot the views slides 
    const widthScreen = screen.width;

    const viewSwiper = (widthScreen) => {
        switch (true) {
        case widthScreen > 900:
            return 4;

        case widthScreen > 700:
            return 3;

        case widthScreen > 500:
            return 2;

        default:
            return 1;
        }
    };

    return (
        <SectionServices id="services">
            <h1>Services</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing the 1500s, when
                an unknown prambled it to make a type specimen book. It has
                survived not.{' '}
            </p>

            <div className="containSwiper">
                <Swiper
                    grabCursor={true}
                    slidesPerView={viewSwiper(widthScreen)}
                    loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        disableOnInteraction: false,
                        delay: 1000,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    
                    {dataServices.map((data, i) => (
                        <SwiperSlide key={i}>
                            <div>
                                <figure>
                                    <img src={data.img} alt={data.name} />
                                    <h5>
                                        {' '}
                                        <MapPin color="#fff" size={18} />{' '}
                                        {data.name}
                                    </h5>
                                </figure>
                            </div>
                        </SwiperSlide>
                    ))}
                    ;
                </Swiper>
            </div>

            <div className="servicesContain_Buttons">
                {/* <button>
                    <ExternalLink color="#fff" size={18} />
                    View More
                </button> */}
                <button onClick={goCar}>
                    <Truck color="#fff" size={18} />
                    View Cars
                </button>
            </div>
        </SectionServices>
    );
};

export { Services };
