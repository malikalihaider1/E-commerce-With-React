import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProjectCard";
import SpinLoader from "../assets/images/SpinLoader.svg";
import { useSelector } from "react-redux";

export default function Products() {
  const API_KEY = "https://dummyjson.com/products?";

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);

    setProducts(response?.data?.products);
  };

  // useEffect ak bar call hoga (in this case)
  useEffect(() => {
    getProductData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    });

    return result || [];
  };

  const searchKaResult = searchProducts();

  return (
    <div
      className={`container-x transition-colors duration-300 ${darkMode ? "bg-slate-700" : ""}`}
    >
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase());
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Search your product"
      />

      {products === null ? (
        <img className={"m-auto "} src={SpinLoader} alt="SpinLoader" />
      ) : null}

      <div className="flex flex-wrap justify-center gap-4">
        {/* {searchKaResult.length === 0 ? "product not found" : ""} */}

        {searchKaResult?.map((item) => (
          <ProductCard
            darkMode={darkMode}
            key={item.id}
            id={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
