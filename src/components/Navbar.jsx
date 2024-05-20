import { useGSAP } from "@gsap/react";
import { navLists } from "../constants";
import { logo } from "../utils";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("#logo", {
      opacity: 1,
      duration: 1,
      ease: "power4.in",
    });
    gsap.to("#navItem", {
      opacity: 1,
      duration: 1,
      ease: "sine.in",
      // delay: 0.5,
    });
  }, []);
  return (
    <header className="w-full ">
      <nav id="nav" className="grid grid-cols-2  w-full items-center ">
        <div id="logo" className="opacity-0 ">
          <img src={logo} alt="logo" width={200} height={25} />
        </div>
        <div id="navItem" className="opacity-0">
          <div className="flex justify-between bg-white  rounded-sm ">
            {navLists.map((nav, i) => {
              return (
                <div
                  className={`w-full font-medium text-center uppercase  cursor-pointer text-orange hover:text-white hover:bg-orange transition-all  p-1 ${
                    i === 0 ? "bg-yellow text-white" : ""
                  }`}
                  key={nav}
                >
                  {nav}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
