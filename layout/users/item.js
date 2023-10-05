// components/ProductItem.js
import Link from "next/link";
export const ProductItem = ({ product }) => {
  return (
    <li key={product.memberid}>
      <h2>{product.membername}</h2>
      <p>{product.memberemail}</p>
      <p>Price: ${product.memberphone}</p>
    </li>
  );
};

export const ProductItemLayout2 = ({ product }) => {
  return (
    <li key={product.memberid}>
      <h2>
        <Link href={`/user/${product.memberid}`}>{product.membername}</Link>
      </h2>
      <p>{product.memberemail}</p>
    </li>
  );
};

//export default ProductItem;
