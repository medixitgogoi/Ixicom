import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import getProducts from "./libs/getProducts";
import Newsletter from "@/components/Newsletter";

export default async function Home() {

  const products = await getProducts();

  return (
    <main className="bg-slate-50 p-2 sm:p-4 lg:px-0">

      <HeroBanner />

      <section className="border-dashed border-2 border-blue-500 px-2 my-5 md:my-20 text-center md:mx-10 lg:mx-20 py-2 sm:p-3 md:px-10">
        <div className="text-lg md:text-xl">The only ecommerce application you need</div>
        <h1 className="font-semibold text-center text-xl md:text-2xl leading-5 md:leading-6 w-full mx-auto my-2">Unveiling the Ultimate Ecommerce Haven: Explore a World of Electronics, Dazzling Jewellery, and Fashion Bliss for Men and Women!</h1>
      </section>

      {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7 my-5 md:my-14 px-10 py-3 md:px-16">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })}
      </section> */}

      <Newsletter />

    </main>
  )
}