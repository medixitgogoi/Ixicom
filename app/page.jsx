"use client"

import Category from "@/components/Category";
import HeroBanner from "@/components/HeroBanner";
import Offer from "@/components/Offer";
import { useState } from "react";

export default function Home() {

  const [state, setstate] = useState(0);

  return (
    <main className="bg-slate-50 p-2 sm:p-4 lg:px-0">

      <HeroBanner />

      <section className="border-dashed border-2 border-blue-500 px-2 my-5 md:my-20 text-center md:mx-10 lg:mx-20 py-2 sm:p-3 md:px-10">
        <div className="text-lg md:text-xl">The only ecommerce application you need</div>
        <h1 className="font-semibold text-center text-xl md:text-2xl leading-6 w-full mx-auto my-2">Unveiling the Ultimate Ecommerce Haven: Explore a World of Electronics, Dazzling Jewellery, and Fashion Bliss for Men and Women!</h1>
      </section>
      <Category />
      <Offer />

    </main>
  )
}