import { useGSAP } from "@gsap/react";
import { navLists } from "../constants";
import { hamburgerIcon, logo } from "../utils";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    // gsap.to("#hamburgerIcon", {
    //   opacity: 1,
    //   duration: 1,
    //   ease: "sine.in",
    //   delay: 0.5,
    // });
  }, []);

  useGSAP(() => {
    gsap.to("#mobile-menu", {
      opacity: isMenuOpen ? 1 : 0,
      duration: 1,
      ease: "power4.in",
    });
  }, [isMenuOpen])

  const handleMenuOnWindChange = () => {
    const isTrue = window.innerWidth < 760 ? false : true;
    if(isTrue){
      setIsMenuOpen(false)
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleMenuOnWindChange);
    return () => {
      window.removeEventListener("resize", handleMenuOnWindChange);
    };
  }, []);
  return (
    <header className="w-full ">
      <nav id="nav" className="grid grid-cols-2  w-full items-center ">
        <div id="logo" className="opacity-0 w-24 md:w-60">
          <img src={logo} alt="logo" />
        </div>
        <div id="navItem" className="opacity-0 hidden md:block">
          <div className="flex justify-between bg-white  rounded-sm ">
            {navLists.map((nav, i) => {
              return (
                <div
                  className={`w-full font-medium text-center uppercase  cursor-pointer text-orange hover:text-white hover:bg-orange transition-all  p-1 ${i === 0 ? "bg-yellow text-white" : ""
                    }`}
                  key={nav}
                >
                  {nav}
                </div>
              );
            })}
          </div>
        </div>
        <div 
        id="navItem" 
        className="md:hidden flex justify-end opacity-0 cursor-pointer" 
        onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
        >
          <img className="w-8" src={hamburgerIcon} />
        </div>
        <div id="mobile-menu" className="fixed min-h-24 top-16 left-0 bg-white w-full z-50 p-10 opacity-0 ">
        <div className="flex flex-col justify-between  rounded-sm gap-2 ">
            {navLists.map((nav, i) => {
              return (
                <div
                  className={`w-full rounded-sm font-medium text-center uppercase  cursor-pointer text-orange hover:text-white hover:bg-orange transition-all  p-1 ${i === 0 ? "bg-yellow text-white" : ""
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
