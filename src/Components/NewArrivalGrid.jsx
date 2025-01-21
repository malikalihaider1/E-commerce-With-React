import img1 from "../assets/images/ps5.png";
import img2 from "../assets/images/baji.png";
import img3 from "../assets/images/speakers.png";
import img4 from "../assets/images/perfume.png";

export default function NewArrivalGrid() {
  return (
    <div className="main grid grid-cols-4 gap-8 grid-rows-2">
      <div className="relative bg-[#0D0D0D] group text-gray-200 rounded col-span-2 row-span-2">
        <img
          className=" w-full h-full group-hover:scale-90 transition duration-300 object-contain"
          src={img1}
          alt="ps5 image"
        />

        <div className="absolute gap-3 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
            PlayStation 5
          </h3>
          <p className="w-3/5 line-clamp-3">
            lack and White version of the PS5 coming out on sale.
          </p>
          <a
            className="underline hover:decoration-gray-500 transition-colors duration-300"
            href="#"
          >
            Shop Now
          </a>
        </div>
      </div>

      <div className="relative bg-[#0D0D0D] group text-gray-200 rounded col-span-2">
        <img
          className=" w-full object-contain group-hover:scale-95 transition duration-300"
          src={img2}
          alt="baji image"
        />

        <div className="absolute gap-4 bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semi text-2xl">
            Woman's Collection
          </h3>
          <p className="w-3/5 line-clamp-3">
            Featured woman collections that give you another vibe.
          </p>
          <a
            href="#"
            className=" underline  hover:decoration-gray-500 transition-colors duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
      <div className="bg-[#0D0D0D] relative group text-gray-200 rounded">
        <img
          className="object-contain group-hover:scale-90 transition duration-300 h-full w-full"
          src={img3}
          alt="product image"
        />
        <div className="absolute gap-2 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
            Speakers
          </h3>
          <p className="line-clamp-3">Amazon wireless speakers</p>
          <a
            className="underline hover:decoration-gray-500 transition-colors duration-300"
            href="#"
          >
            Shop Now
          </a>
        </div>{" "}
      </div>
      <div className="bg-[#0D0D0D] group-hover:scale-110 transition duration-300 relative group text-gray-200 rounded">
        <img
          className="object-contain group-hover:scale-90 transition duration-300 h-full w-full"
          src={img4}
          alt="product image"
        />
        <div className="absolute gap-2 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
            Perfume
          </h3>
          <p className="line-clamp-3">GUCCI INTENSE OUD EDP</p>
          <a
            className="underline hover:decoration-gray-500 transition-colors duration-300"
            href="#"
          >
            Shop Now
          </a>
        </div>{" "}
      </div>
    </div>
  );
}
