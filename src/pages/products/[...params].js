import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';  // Import Image from next/image

export default function Home() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { params } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    async function fetchProduct() {
      try {
        if (params && params[0]) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${params[0]}`);
          setProduct(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [router.isReady, params]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Product Details</h1>
      {product.image && (
        <Image 
          src={product.image}  // URL of the image from fakestoreapi
          alt="Product Image"
          width={500}
          height={500}
        />
      )}
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
