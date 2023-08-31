import Link from "next/link";

const Category = () => {
    return (
        <div className='m-2 md:mx-4 md:my-3 lg:mx-[80px] lg:my-[20px] flex gap-2 items-center'>

            <section className="bg-[url('/men.jpg')] bg-cover bg-center bg-red-300 flex-1 h-[70vh] flex justify-center items-center transition-all duration-200">
                <Link href="/category/men's clothing">
                    <button className="bg-black border-2 text-white animate-pulse p-3" >Men</button>
                </Link>
            </section>

            <section className="flex flex-col gap-2 flex-[2] h-[70vh]">

                <div className="bg-[url('/electronics.jpg')] bg-cover bg-center flex-1 flex justify-center items-center bg-blue-400">
                    <Link href="/category/electronics">
                        <button className="bg-black border-2 text-white animate-pulse p-3">Electronics</button>
                    </Link>
                </div>

                <div className="bg-[url('/jewellery.jpg')] bg-cover bg-center flex-1 flex justify-center items-center bg-orange-400">
                    <Link href="/category/jewelery">
                        <button className="bg-black border-2 text-white animate-pulse p-3">Jewellery</button>
                    </Link>
                </div>

            </section>

            <section className="bg-[url('/women.jpg')] bg-cover bg-center bg-pink-400 flex justify-center items-center flex-1 h-[70vh]">
                <Link href="/category/women's clothing">
                    <button className="bg-black border-2 text-white animate-pulse p-3">Women</button>
                </Link>
            </section>
        </div>
    );
}

export default Category;
