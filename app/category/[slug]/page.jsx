import getRelatedProducts from '@/app/libs/getRelatedProducts';
import ProductCard from '@/components/ProductCard';

const CategoryPage = async ({ params }) => {

    const products = await getRelatedProducts(params.slug);
    const category = params.slug;

    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='mx-3 my-4 lg:my-0 md:mx-0 flex-col text-center gap-2 justify-center items-center'>
                <h1 className='font-semibold text-xl mt-10 leading-5 lg:leading-normal px-5 py-3'>Explore our wide range of products in</h1>
                <div className='font-bold uppercase text-2xl px-5 py-3 rounded-md tracking-wide bg-blue-200'>{category === "jewelery" ? "jewellery" : category.replace('%20', ' ')}</div>
            </div>

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

export default CategoryPage;
