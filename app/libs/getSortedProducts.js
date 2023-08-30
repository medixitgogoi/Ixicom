export default async function getSortedProducts() {

    const response = await fetch('https://fakestoreapi.com/products?sort=desc');

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}