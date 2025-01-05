import { IoArrowUpOutline } from "react-icons/io5";
import Slider from "../Components/Slider";
import ProductCard from "../Components/ProjectCard";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import NewArrivalGrid from "../Components/NewArrivalGrid";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-x">
      <SectionTitle text="Today's" />
      <h3 className="heading ">Flash Sales</h3>
       <Slider></Slider>
       <Link to={'/products'} className="font-medium rounded bg-primary centre text-white h-14 w-56 mx-auto my-16">View All Products</Link>
       <SectionTitle text="Categories" />
      <h3 className="heading ">Browse By Category</h3>
      {/* todo */}
      <SectionTitle text="This Month" />

      <div className="flex justify-between my-16">
        <h3 className="heading">Best Selling Products</h3>
        <Button className="h-14 w-40">View All</Button>
      </div>

      <div className="flex gap-7">
        <ProductCard price="5" discountPercentage={7}/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <SectionTitle text="Our Products" />
      <h3 className="heading capitalize">explore our products</h3>
      <SectionTitle text="Featured" />
      <h3 className="heading">New Arrival</h3>
      <NewArrivalGrid className="w-" />
      {/* <br /> */}
      <a
        href="#top"
        className="w-12 h-12 bg-gray-200 rounded-full block text-2xl centre ml-auto"
      >
        <IoArrowUpOutline />
      </a>
      <br />
    </div>
  );
}
