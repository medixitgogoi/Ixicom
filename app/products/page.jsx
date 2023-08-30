import ProductCard from "@/components/ProductCard";
import getProducts from "../libs/getProducts";

const Products = async () => {

    const products = await getProducts();

    return (
        <main>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7 my-5 md:my-14 px-10 py-3 md:px-16">
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </section>
        </main>
    );
}

export default Products;