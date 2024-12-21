import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProjectCard';

function Something({index}){
  return <div className='w-40 h-96 bdr'>{index}</div>
}

export default function Slider() {
  return (
    <div>Slider
       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Navigation,Pagination,Scrollbar,Autoplay]}
      autoplay={{delay:2500, pauseOnMouseEnter: true}}
      pagination={{ clickable: true}}
      scrollbar={{draggable:true}}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        
        <ProductCard />
      
      </SwiperSlide>
      <SwiperSlide>
        
        <ProductCard />
      
      </SwiperSlide>
      <SwiperSlide>
        
        <ProductCard />
      
      </SwiperSlide>
      <SwiperSlide>
        
        <ProductCard />
      
      </SwiperSlide>
      <SwiperSlide>
        
        <ProductCard />
      
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}
