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
import { Link } from "react-router";

export default function Slider() {
  const { products, isLoading, error } = useProducts("limit=5&skip=30");

  return (
    <div>
      {/* <Link to={}> */}
      {isLoading ? (
        <img className="m-auto" src={SpinLoader} alt="SpinLoader" />
      ) : (
        ""
      )}
      {error ? (
        <img className="m-auto" src={shoppingNotFound} alt="SpinLoader" />
      ) : (
        ""
      )}

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
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
      {/* </Link> */}
    </div>
  );
}
