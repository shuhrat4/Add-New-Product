import React from 'react';
import { useGetProductsQuery, useDeleteProductMutation } from './reducer/productApi';

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <div className="text-center py-6 text-lg font-semibold animate-pulse">Loading...</div>;
  if (error) return <div className="text-center py-6 text-lg font-semibold text-red-500">Error fetching products</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl shadow-2xl mt-10">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-700">Product List</h2>
      <ul className="space-y-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex justify-between items-center border-l-4 border-indigo-500"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-lg font-medium mt-1">${product.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
