// File: frontend/pages/add-product.js
import { useState } from 'react';

export default function AddProduct() {
  const [product, setProduct] = useState({ title: '', description: '', price: '', imageUrl: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    alert('Product added');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <input type="text" placeholder="Title" onChange={e => setProduct({ ...product, title: e.target.value })} className="block mb-2" />
      <textarea placeholder="Description" onChange={e => setProduct({ ...product, description: e.target.value })} className="block mb-2" />
      <input type="number" placeholder="Price" onChange={e => setProduct({ ...product, price: e.target.value })} className="block mb-2" />
      <input type="text" placeholder="Image URL" onChange={e => setProduct({ ...product, imageUrl: e.target.value })} className="block mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Product</button>
    </form>
  );
}
