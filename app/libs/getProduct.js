export default async function getProduct(id) {

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
}