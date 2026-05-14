import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import pht1 from '../assets/Photo1.png'
import pht2 from '../assets/Photo2.png'
import pht3 from '../assets/Photo3.png'
import pht4 from '../assets/Photo4.png'
import pht5 from '../assets/Photo5.png'

function SwiperComponent() {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            pagination={{
          clickable: true,
        }}
        navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img className='swip-img' src={pht1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='swip-img' src={pht2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='swip-img' src={pht3} alt="" /></SwiperSlide>
            <SwiperSlide><img className='swip-img' src={pht4} alt="" /></SwiperSlide>
            <SwiperSlide><img className='swip-img' src={pht5} alt="" /></SwiperSlide>
        </Swiper>
    );
}

export default SwiperComponent;