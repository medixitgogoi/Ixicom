import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { TbDiscount2 } from "react-icons/tb";

const ProductCard = async ({ product }) => {

  return (
    <Link href={`/product/${product.id}`} className="h-[400px] lg:h-[470px] flex flex-col justify-between rounded-md shadow-xl transform overflow-hidden bg-white duration-300 hover:shadow-2xl hover:shadow-blue-400 cursor-pointer">

      <div className='relative w-full flex-1'>
        <Image className='cursor-pointer p-5 object-contain' src={product.image} fill alt="product" priority />
      </div>

      <div className='flex-2 px-4 py-2 text-white bg-black'>
        <h2 className='my-2 font-medium md:text-lg'>{product.title}</h2>
        <div className='flex items-center text-black/[0.5]'>
          <p className='md:text-lg bg-blue-200 px-2 rounded-sm text-black font-bold'>₹{Math.floor(product.price * 83)}</p>
          <p className='bg-blue-200 ml-2 px-2 font-semibold rounded-sm line-through'>₹{Math.floor((product.price * 83) + Math.random() * 20)}</p>
          <div className='flex items-center pb-1 gap-[1px] w-full justify-end'>
            <TbDiscount2 className="text-green-500 text-lg md:text-[22px]" />
            <p className="px-1 text-sm md:text-base font-medium rounded-sm bg-green-500 text-white">{Math.ceil(Math.random() * 20)}%off</p>
          </div>
        </div>
      </div>

    </Link>
  );
}

// ₹

export default ProductCard;
