import img from "../assets/images/game.png";
import ReactStars from "react-stars";

export default function ProductCard(Props) {
  const discountPrice = (
    Props.price -
    Props.discountPercentage * (Props.price / 100)
  ).toFixed(2);
  console.log("discountPrice", discountPrice);

  return (
    <div className="group p-3 drop-shadow-md border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 min-h-[350px]">
      <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
        -40%
      </div>

      <div className="">
        <img
          src={Props.image}
          alt="product img"
          className="m-auto group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <h3 className="font-medium group-hover:text-primary transition-all duration-300">
        {Props.name}
      </h3>

      <p className="font-medium">
        <span className="text-primary">${discountPrice}</span>{" "}
        <span className="line-through text-[#7f7f7f]">${Props.price}</span>
      </p>

      <p>
        <ReactStars
          count={5}
          value={Props.rating}
          // onChange={ratingChanged}
          // color1="red"
          size={24}
          color2={"#db4444"}
          edit={false}
        />
      </p>
    </div>
  );
}
