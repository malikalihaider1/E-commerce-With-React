import Button from "../Components/Button";
import NewArrivalGrid from "../Components/NewArrivalGrid";
import ProductCard from "../Components/ProjectCard";
import SectionTitle from "../Components/SectionTitle";
import Slider from "../Components/Slider";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import SpinLoader from "../assets/images/SpinLoader.svg";
import { useSelector } from "react-redux";

export default function Home() {
  const { products, isLoading, error } = useProducts("limit=15&skip=35");
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      className={`container-x transition-colors duration-300 ${darkMode ? "bg-slate-700" : ""}`}
    >
      <SectionTitle text="Today's" />
      <h3 className={`heading ${darkMode ? "text-white" : ""}`}>Flash Sales</h3>

      <Slider />

      <Link
        to={"/products"}
        className="font-medium rounded bg-primary centre text-white h-14 w-56 mx-auto my-16"
      >
        View All Products
      </Link>

      <SectionTitle text="Categories" />

      <h3 className={`heading ${darkMode ? "text-white" : ""}`}>
        Browse By Category
      </h3>

      {/* todo */}
      <SectionTitle text="This Month" />

      <div className="flex justify-between my-16">
        <h3 className={`heading ${darkMode ? "text-white" : ""}`}>
          Best Selling Products
        </h3>
        <Button className="h-14 w-40">View All</Button>
      </div>
      <div className="flex gap-7">
        {isLoading ? (
          <img className="m-auto" src={SpinLoader} alt="SpinLoader" />
        ) : (
          ""
        )}
        {products?.slice(0, 4)?.map((item) => (
          <ProductCard
            id={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>

      <SectionTitle text="Our Products" />
      <div className="flex gap-7">
        {isLoading ? (
          <img className="m-auto" src={SpinLoader} alt="SpinLoader" />
        ) : (
          ""
        )}
        {products?.slice(4, 8)?.map((item) => (
          <ProductCard
            id={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
      <SectionTitle text="Featured" />
      <h3 className={`heading ${darkMode ? "text-white" : ""}`}>new arrival</h3>

      <NewArrivalGrid />

      <a
        href="#top"
        className="my-5 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl ml-auto sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      >
        <FaArrowUp />
      </a>
    </div>
  );
}
