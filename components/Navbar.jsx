"use client"

import Menu from "./Menu";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-14");
      } else {
        setShow("shadow-lg");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`w-full px-5 sm:px-10 md:px-20 flex justify-between items-center h-14 bg-black text-white z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Link href="/" className="uppercase font-extrabold text-xl md:text-2xl">
        Ixicom
      </Link>
      <div className="hidden md:block">
        <Menu />
      </div>
      <div className="flex items-center gap-2 cursor-pointer text-lg font-bold">
        <IoMdHeartEmpty className="hover:text-red-500 transition-all duration-200" />
        <BsCart className="hover:text-blue-400 transition-all duration-200" />
      </div>
    </div>
  );
}

export default Navbar;
