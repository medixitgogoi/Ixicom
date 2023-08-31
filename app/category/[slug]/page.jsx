import React from 'react';
import getRelatedProducts from '@/app/libs/getRelatedProducts';
import ProductCard from '@/components/ProductCard';

const CategoryPage = async ({ params }) => {

    const products = await getRelatedProducts(params.slug);
    const category = params.slug;

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-xl mt-10 px-5 py-3'>Explore our wide range of products in <span className='font-bold uppercase text-2xl px-5 py-3 rounded-sm bg-blue-200'>{category.replace('%20', ' ')}</span> </h1> 
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7 my-5 md:my-14 lg:my-28 px-10 py-3 md:px-16">
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
