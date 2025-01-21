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
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const links = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" }, // Correct path
];

export default function Navbar() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const [isHamburgerOpen, setIsHamburderOpen] = useState(false);
  const isLoggedIn = true;
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const navLinkStyle =
    "gap-4 S_Underline relative inline-block w-fit after:content-[''] after:bg-primary after:absolute after:h-[2px] after:transition-all after:duration-300 after:left-0 after:w-0 hover:after:w-full after:-bottom-1 capitalize cursor-pointer hover:text-primary";

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = e?.target?.children?.[0]?.value;
    if (!searchTerm) return;
    console.log("value", searchTerm);

    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div
      id="top"
      className={`container-x ${
        darkMode ? "bg-slate-700 text-white" : "bg-white text-gray-800"
      } gap-5 h-20 sm:h-28 transition-colors duration-300 shadow-md relative flex justify-between items-center px-4 sm:px-8`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <img
          src={text}
          className="hidden md:block w-48 sm:w-72"
          alt="Text Logo"
        />
      </Link>

      <Link to={"/"}>
        <img
          src={truck}
          className="block md:hidden w-[75px] sm:w-[95px]"
          alt="Truck Logo"
        />
      </Link>

      {/* Search Box */}
      <form
  onSubmit={handleSearch}
  className="flex w-48 md:w-60 px-4 h-10 rounded-[60px] items-center bg-[#f5f5f5] "
>
  <div className="flex bg-secondary color-black w-40 ml-3 sm:ml-8 lg:ml-0 sm:w-56 md:w-60 h-[30px] sm:h-9 justify-around items-center text-sm rounded px-4">
    <input
      type="search"
      className="nav_input bg-transparent outline-none w-full dark:text-black"
      placeholder="What are you looking for?"
    />
  </div>
  <button type="submit">
    <CiSearch className="text-xl sm:text-2xl font-extrabold text-black" />
  </button>
</form>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsHamburderOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-3xl"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {/* Desktop Navbar */}
      <ul
        className={`hidden md:flex items-center  gap-4 lg:gap-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn && (
          <li className={navLinkStyle}>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>

      {/* Mobile Navbar */}
      {isHamburgerOpen && (
        <ul className="absolute top-20 sm:top-28 left-0 bg-red-400 w-full z-10 flex flex-col gap-3 p-4 md:hidden">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link
                onClick={() => setIsHamburderOpen(false)}
                to={item.link}
                className="text-white"
              >
                {item.title}
              </Link>
            </li>
          ))}
          {!isLoggedIn && (
            <li className={navLinkStyle}>
              <Link
                onClick={() => setIsHamburderOpen(false)}
                to="/login"
                className="text-white"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      )}

      {/* Icons */}
      <div className="flex items-center gap-3 text-lg sm:text-2xl">
        <button
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
          className=""
        >
          {darkMode ? <IoSunny /> : <FaMoon />}
        </button>
        {isLoggedIn ? (
          <>
            <IoMdHeart />
            <IoCart />
          </>
        ) : null}
        <Link
          to="/profile"
          className="bg-primary rounded-full overflow-hidden h-8 w-8 flex items-center justify-center text-base text-white"
        >
          {isLoggedIn ? (
            <img
              src="https://avatars.githubusercontent.com/u/163237146?v=4"
              alt="User"
            />
          ) : (
            <BiUser />
          )}
        </Link>
      </div>
    </div>
  );
}
