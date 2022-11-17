import ProductList from "../components/ProductList";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(1);
  const url = `https://kea-alt-del.dk/t7/api/products?limit=12&start=${start}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [start]);

  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>
      <ProductList products={products} />

      <button onClick={() => setStart((oldValue) => oldValue + 10)}>Show next 10 items</button>
    </div>
  );
}
