import img1 from "../assets/images/ps5.png";
import img2 from "../assets/images/baji.png";
import img3 from "../assets/images/perfume.png";
import img4 from "../assets/images/speakers.png";

export default function NewArrivalGrid() {
  return (
    <div className="main grid grid-cols-4 gap-8 grid-rows-2">
        
        <div className=" bg-[#0D0D0D] rounded col-span-2 row-span-2">
          <img src={img1} alt="ps5 image" />
          </div>

        <div className="relative bg-[#0D0D0D] text-[#fafafa] rounded col-span-2">
          <img src={img2} alt="baji image" />

          <div className="absolute bottom-0 p-6 w-3/5">
          <h3 className="font-semi">Woman's Collection</h3>
          <p>Featured woman collections that give you another vibe.</p>
          <a href="#" className=" underline hover:underline hover:decoration-gray-500 transition-colors duration-300">Shop Now</a>

          </div>
          </div>

        <div className=" bg-[#0D0D0D] rounded"><img src={img3} alt="perfume image" /></div>
        <div className=" bg-[#0D0D0D] rounded"><img src={img4} alt="speakers image" /></div>
        
    </div>
  )
}
