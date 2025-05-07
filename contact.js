import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className={theme}>
      <Head>
        <title>P & D Essentials</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">P & D Essentials</h1>
        <div>
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="mr-4">Toggle Theme</button>
          <Link href="/contact" className="underline">Contact</Link>
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-xl mb-4">Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map(product => (
            <div key={product._id} className="p-4 border rounded shadow">
              <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p>{product.description}</p>
              <p className="text-blue-600 font-bold mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

---

