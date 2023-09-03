import getRelatedProducts from "@/app/libs/getRelatedProducts";
import ProductCard from "./ProductCard";

const CategoryCard = async ({ category }) => {

    const products = await getRelatedProducts(category);
    // console.log(products);

    return (
        <div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7 my-10 md:my-14 px-10 py-3 md:px-16">
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </section>

        </div>
    );
}

export default CategoryCard;