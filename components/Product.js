import Image from "next/image";
function Product(props) {
  // function add() {
  //   props.addToCart(props.data);
  // }
  return (
    <article className="Product">
      <h2>{props.data.productdisplayname}</h2>
      <p>{props.data.price},-</p>
      {/* <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`} alt={props.data.productdisplayname}></img> */}

      <Image src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`} alt={props.data.productdisplayname} width="500" height="600" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
      {/* <button onClick={add}>Add to basket</button> */}
    </article>
  );
}

export default Product;
