import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import friends from "../images/slider-images/friends.jpg";
import formal from "../images/slider-images/formal.jpg";
import shoes_group from "../images/slider-images/shoes-group.jpg";
import summer from "../images/slider-images/summer.jpg";

function Carousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay
        >
            <SwiperSlide>
                <img src={friends} alt="hat" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={formal} alt="shirt" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={shoes_group} alt="pants" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={summer} alt="shoes" />
            </SwiperSlide>
        </Swiper>
    );
}

export default Carousel;
