"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import img1 from "@/public/slide-1.png";
import img2 from "@/public/slide-2.png";
import img3 from "@/public/slide-3.png";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="w-full max-w-6xl md:mx-auto md:py-2">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        useKeyboardArrows={true}
        stopOnHover={true}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div onClick={clickHandler} className="absolute cursor-pointer z-10 right-0 bottom-0 flex justify-center items-center bg-black text-white w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] hover:opacity-90">
            <BsArrowRightShort className="text-2xl" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div onClick={clickHandler} className="absolute cursor-pointer z-10 right-[20px] sm:right-[30px] mr-3 bottom-0 flex justify-center items-center bg-black text-white w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] hover:opacity-90">
            <BsArrowLeftShort className="text-2xl" />
          </div>
        )}
      >
        <div>
          <Image src={img1} alt="img1" />
          <Link href="/products">
            <button className="absolute z-10 top-5 md:top-10 bg-white w-max py-[2px] px-[2px] sm:px-2 md:px-4 sm:py-2 font-bold md:text-lg cursor-pointer uppercase">Shop now</button>
          </Link>
        </div>
        <div>
          <Image src={img2} alt="img2" />
          <Link href="/products">
            <button className="absolute z-10 top-5 md:top-10 bg-white w-max py-[2px] px-[2px] sm:px-2 md:px-4 sm:py-2 font-bold md:text-lg cursor-pointer uppercase">Shop now</button>
          </Link>
        </div>
        <div>
          <Image src={img3} alt="img3" />
          <Link href="/products">
            <button className="absolute z-10 top-5 md:top-10 bg-white w-max py-[2px] px-[2px] sm:px-2 md:px-4 sm:py-2 font-bold md:text-lg cursor-pointer uppercase">Shop now</button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroBanner;
