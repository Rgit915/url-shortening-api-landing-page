import { useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const links = ["Features", "Pricing", "Resources"];
  return (
    <header className="">
      {/* Desktop nav */}
      <nav className="hidden justify-between items-center w-full px-8 py-6 md:flex lg:px-12 xl:px-16 ">
        <div className="flex gap-8">
          <img src={logo} alt="shortly logo" className="h-8"/>
        <ul className="flex justify-around items-end gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="font-bold text-[15px] text-neutral-grayish-violet cursor-pointer hover:text-neutral-very-dark-blue">
                {link}
              </a>
            </li>
          ))}
        </ul>
        </div>

        <div className="flex gap-8 justify-center items-center">
          <button className="cursor-pointer font-bold text-[15px] text-neutral-grayish-violet hover:text-neutral-very-dark-blue">Login</button>
          <button className="font-bold rounded-3xl px-8 py-2 bg-primary-cyan text-white cursor-pointer hover:bg-cyan-hover">
            Signup
          </button>
        </div>
      </nav>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between w-full px-4 py-8 md:hidden">
        <img src={logo} alt="shortly logo" className="h-8" />
        <button onClick={toggleMenu} className="cursor-pointer z-50">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile  menu */}
      {showMenu && (
        <nav className="absolute left-0 translate-x-4 flex flex-col gap-8 w-[90%] px-4 py-8 bg-primary-dark-violet text-white text-center rounded-xl shadow-lg z-40">
          <ul className="flex flex-col items-center justify-center text-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="font-bold text-lg">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <hr className="text-neutral-grayish-violet/25" />
          <button className="cursor-pointer">Login</button>
          <button className="rounded-3xl px-8 py-2 bg-primary-cyan text-white cursor-pointer hover:bg-cyan-hover">
            Signup
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
