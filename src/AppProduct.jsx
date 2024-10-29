import React, { useState } from 'react';
import { useCreateProductMutation, useGetProductsQuery } from './reducer/productApi';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { refetch } = useGetProductsQuery(); 
  const [createProduct] = useCreateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && price) {
      await createProduct({ name, price: parseFloat(price) });
      setName('');
      setPrice('');
      refetch(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 max-w-lg mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl mb-10 transition-all transform hover:shadow-2xl hover:scale-105">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-indigo-800">Add New Product</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all shadow-sm bg-white placeholder-gray-400 text-gray-700 text-lg"
        />
      </div>
      
      <div className="mb-6">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all shadow-sm bg-white placeholder-gray-400 text-gray-700 text-lg"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-full font-bold text-xl hover:from-blue-600 hover:to-indigo-700 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
