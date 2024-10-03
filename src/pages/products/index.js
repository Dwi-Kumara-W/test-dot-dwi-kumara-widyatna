import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products List</h1>
      <ProductList products={products}></ProductList>
    </div>
  );
}
