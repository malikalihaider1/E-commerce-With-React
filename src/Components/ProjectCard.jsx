import img from "../assets/images/game.png";
export default function ProductCard() {
  return (
    <div className=" border-2 group flex gap-4 flex-col relative w-64 h-[350px] bg-[#f5f5f5]">
      <div className="discount absolute top-3 left-3 bg bg-primary w-14 h-6 rounded flex items-center justify-center text-white text-xs">
        -40%
      </div>
      <button
        type="submit"
        name="add"
        data-btn-addtocart=""
        data-available=""
        class="product-form__submit button button--primary an-"
        id="product-add-to-cart"
        docapp-data-protected="no-id"
      >
        Add to cart
      </button>
      <div className="">
        <img
          src={img}
          alt="product img"
          className="m-auto group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      {/* <div> */}
      <h3 className="font-medium text-lg group-hover:text-primary transition-all duration-1000">
        HAVIT HV-G92 Gamepad
      </h3>
      <p>
        <span>$120</span>
        <span>$160</span>
      </p>
      {/* </div> */}
    </div>
  );
}
