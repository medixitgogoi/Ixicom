import Link from "next/link";
import Image from "next/image";
import getProduct from "../../libs/getProduct";
import getRelatedProducts from "@/app/libs/getRelatedProducts";
import ProductCard from "@/components/ProductCard";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";

const ProductDetails = async ({ params: { id } }) => {

    const product = await getProduct(id);
    const products = await getRelatedProducts(product?.category);
    const productId = id;

    console.log(product);

    return (
        <main className="px-2 sm:px-5 md:px-10">
            <div className="lg:mx-36 text-white h-[130vh] md:h-[110vh] flex items-center flex-col lg:flex-row gap-5 lg:gap-[80px]">

                <section className="relative w-[90%] h-[70vh] flex-1">
                    <Image className="mt-6 lg:mt-0 lg:p-6 object-contain" src={product.image} fill alt="product" />
                </section>

                <section className="flex-1 rounded-md px-3 py-8">
                    <div className="mb-3">
                        <h2 className="font-medium p-2 sm:p-4 text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-7 mb-2 rounded-md bg-black">{product.title}</h2>
                        <section className="flex gap-6 items-center">
                            <h5 className=" text-black">Category: <span className="font-semibold uppercase">{product.category}</span></h5>
                            <div className="flex gap-1 items-center">
                                <BsFillStarFill className="text-yellow-400 text-lg" />
                                <h4 className="text-black font-semibold">{product.rating.rate}</h4>
                            </div>
                        </section>
                    </div>
                    <div className="mt-4 text-black">
                        <span className="opacity-75 text-sm underline">MRP</span><span className="mr-1">:</span><span className="lg:text-lg font-semibold bg-blue-200 py-1 px-2 rounded-md">₹{Math.floor(product.price * 83)}</span><span className="text-xs ml-1 font-bold opacity-60">(incl. of all taxes)</span>
                        <p className="mt-1 text-xs lg:text-sm font-medium text-slate-600">(Also includes all applicable duties)</p>
                    </div>
                    <Link href="#">
                        <button className="bg-black lg:text-xl font-bold mt-6 w-full lg:w-6/12 text-white p-3 rounded-full hover:bg-slate-50 hover:text-black hover:transition-all duration-200 hover: border-2">Add to cart</button>
                    </Link>
                    <div className="mt-5">
                        <span className="font-medium underline text-slate-600">Product Details:</span> <span className="hidden sm:inline ml-2 text-sm font-semibold text-blue-400">({`${product.rating.count-10}+ people have liked this product`})</span>
                        <p className="mt-4 p-4 rounded-md bg-black leading-snug sm:leading-6 font-semibold">{product.description}</p>
                    </div>
                </section>

            </div>
            <div>
                <section className="flex flex-col items-center">
                    <div className="flex gap-1 items-center">
                        <BsFillArrowDownSquareFill className="text-xl" />
                        <p className="text-center md:text-xl font-medium">More Products from this category</p>
                        <BsFillArrowDownSquareFill className="text-xl" />
                    </div>
                    <small className="text-blue-400">(which you might also like)</small>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 my-14 px-10 sm:px-6 py-3 md:px-16">
                    {products?.map((product) => {
                        return (
                            <>
                                {product.id != productId && (
                                    <ProductCard key={product.id} product={product} />
                                )}
                            </>
                        )
                    })}
                </section>
            </div>
        </main>
    );
}

export default ProductDetails;
