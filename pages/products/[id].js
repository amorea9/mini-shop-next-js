import Head from "next/head";
import Image from "next/image";
function Item({ data }) {
  return (
    <div className="product_card">
      <Head>
        <title>{data.productdisplayname}</title>
      </Head>
      <h1>{data.productdisplayname}</h1>
      <p>{data.subcategory}</p>
      <Image src={`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`} alt={data.productdisplayname} width="500" height="600" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context.params.slug);
  const url = `https://kea-alt-del.dk/t7/api/products/${context.params.id}`;

  // Get data from api
  const res = await fetch(url);

  //if the page does not exist or no content
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  //if you console.log inside this function, it will appear in the terminal

  // Return the data inside props
  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://kea-alt-del.dk/t7/api/products");
  const data = await res.json();
  const paths = data.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export default Item;
