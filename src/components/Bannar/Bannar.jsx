

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Bannar = () => {
    return (
        <div>
              <Swiper
                style={{
                    "--swiper-pagination-color": "red",
                    "--swiper-navigation-color": "green",
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >
                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/WD0HypH/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/6BVRjhs/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/VmNdCGr/image.png" alt="" /></SwiperSlide>

                
                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/KhqshqW/image.png" alt="" /></SwiperSlide>

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/M23Mdrq/image.png" alt="" /></SwiperSlide>

                

                <SwiperSlide><img className='h-[600px] w-full object-contain' src="https://i.ibb.co/19kmk4Q/image.png" alt="" /></SwiperSlide>

               

               

            </Swiper>
            
        </div>
    );
};

export default Bannar;