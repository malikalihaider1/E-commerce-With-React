export default function Banner() {
  return (
    <>
      {/* for desktop */}
      <div
        id="top"
        className="bg-black  text-gray-50 h-12 hidden sm:flex justify-around md:justify-center lg:justify-end  items-center top-0 z-10 "
      >
        <div className=" flex mx-2 md:mx-0 lg:mx-[92px] gap-2 sm:gap-4 md:gap-10 xl:gap-0 max-w-[1280px]">
          <div className=" text-gray-50  flex  items-center text-xs md:text-sm gap-2 xl:mr-52">
            <p className="hidden sm:flex">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>

            <span className="font-semibold hover:text-primary  transition-colors duration-300 hover:cursor-pointer hidden sm:flex">
              <a href=""> ShopNow</a>
            </span>
          </div>
          <div className=" hidden sm:flex">
            <select className="bg-slate-950 text-sm hover:cursor-pointer">
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="bg-black h-10 flex flex-col sm:hidden text-[10px] text-white top-0 z-10 pt-1">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          width="100%"
          vspace="px"
        >
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </marquee>

        <div className=" flex text-center items-center justify-evenly pb-1">
          <p className="font-semibold hover:text-primary hover:underline hover:cursor-pointer  text-white text-[11px] ">
            ShopNow
          </p>
          <select className="bg-slate-950  hover:cursor-pointer text-[11px] ">
            <option>English</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </>
  );
}
