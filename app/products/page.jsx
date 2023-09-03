import CategoryCard from "@/components/CategoryCard";
import { FaHashtag } from "react-icons/fa";

const categories = [
    {
        id: 1,
        title: "Men's Fashion",
        category: "men's clothing",
    },
    {
        id: 2,
        title: "Women's Fashion",
        category: "women's clothing",
    },
    {
        id: 3,
        title: "Electronics",
        category: "electronics",
    },
    {
        id: 4,
        title: "Jewellery",
        category: "jewelery",
    },
]

const Products = () => {

    return (
        <main>


            {
                categories.map((cat) => {
                    return (
                        <div className="flex flex-col justify-center items-center">

                            <div className="py-2 md:py-3 px-2 rounded-md border-2 border-black bg-black text-white md:px-8 text-lg md:text-xl flex justify-center text-center mt-10 md:justify-start items-center tracking-wider">
                                <FaHashtag className="text-xl mr-1" />
                                <div className="font-bold">Bestseller in </div>
                                <div className="bg-blue-200 px-2 md:px-3 ml-2 py-1 text-black font-extrabold rounded-md uppercase">{cat.title}</div>
                            </div>

                            <CategoryCard category={cat.category} />

                        </div>
                    )
                })
            }


        </main>
    );
}

export default Products;