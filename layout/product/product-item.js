// components/ProductItem.js

export const ProductItem = ({ product }) => {
  return (
    <li key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </li>
  );
};

export const ProductItemLayout2 = ({ product }) => {
  return (
    <li key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </li>
  );
};

//export default ProductItem;
