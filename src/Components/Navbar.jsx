import text from "../assets/logo/text.svg";
import truck from "../assets/logo/truck.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" }, // Correct path
];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburderOpen] = useState(false);
  const isLoggedIn = false;
  const navLinkStyle =
  "S_Underline relative inline-block w-fit after:content-[''] after:bg-primary after:absolute after:h-[2px] after:transition-all after:duration-300 after:left-0 after:w-0 hover:after:w-full after:-bottom-1 capitalize cursor-pointer hover:text-primary";

  return (
    <div className="container-x h-28 shadow-md relative flex justify-between items-center">
      <img src={text} className="hidden md:block w-72 " alt="Text" />
      <img src={truck} className="block md:hidden w-[95px]" alt="Truck" />

      <div className="w-60 px-2 h-10 rounded centre bg-[#f5f5f5]">
        <input
          type="search"
          className="outline-none bg-transparent text-sm w-full"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>
      {/* desktop navbar */}
      <ul className=" hidden md:flex gap-3">
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn ? (
          <li className={navLinkStyle}>
            <Link to="/login">Login</Link>
          </li>
        ) : null}
      </ul>

      <button
        onClick={() => setIsHamburderOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-4xl"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {isHamburgerOpen && (
        //mobile navbar
        <ul className="absolute bg-red-300 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link onClick={() => setIsHamburderOpen(false)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <li className={navLinkStyle}>
              <Link to="/login">Login</Link>
            </li>
          ) : null}
        </ul>
      )}

      <div className="icons centre text-2xl gap-3">
        {isLoggedIn ? (
          <>
            <IoMdHeart className="" />
            <IoCart />
          </>
        ) : null}
        <Link
          to="/profile"
          className="bg-primary rounded-full overflow-hidden h-8 w-8 centre text-base text-white"
        >
          {isLoggedIn ? (
            <img
              src="https://avatars.githubusercontent.com/u/163237146?v=4"
              alt="User"
            />
          ) : (
            <BiUser className="text-xl" />
          )}
        </Link>
      </div>
    </div>
  );
}
