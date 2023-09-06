import { Container } from '../../utils/Utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Banner.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <Container>
     <div className='banner-carousel-wrapper'>
      <Swiper 
        pagination={true}  
        autoplay={{delay: 1000}}
        loop={true}
        spaceBetween={10}
        draggable={true} 
        modules={[Pagination, Navigation]} 
        navigation={true}
        className="banner-swiper">
        <SwiperSlide>
          <img src="https://mold-components-com-git-main-ijalalov69-gmailcom.vercel.app/static/media/1.f750064639be81611932305b288222c1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mold-components-com-git-main-ijalalov69-gmailcom.vercel.app/static/media/2.988a32fc2cb5183ecf3d0abd56d8d4d7.svg" alt="" />
        </SwiperSlide>
      </Swiper>
     </div>
    </Container>
  )
}

export default Banner