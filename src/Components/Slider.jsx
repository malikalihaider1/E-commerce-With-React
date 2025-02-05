import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SpinLoader from "../assets/images/SpinLoader.svg";
import shoppingNotFound from "../assets/images/SpinLoader.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ProductCard from "./ProjectCard";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

export default function Slider() {
  const { products, isLoading, error } = useProducts("limit=5&skip=30");

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* Loading and Error States */}
      {isLoading ? (
        <img className="m-auto" src={SpinLoader} alt="SpinLoader" />
      ) : null}
      {error ? (
        <img className="m-auto" src={shoppingNotFound} alt="Error" />
      ) : null}

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide per view on small screens
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2, // 2 slides per view on medium screens
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3, // 3 slides per view on large tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4, // 4 slides per view on desktop screens
            spaceBetween: 30,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products?.slice(0, 6)?.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
              discountPercentage={item.discountPercentage}
              rating={item.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
