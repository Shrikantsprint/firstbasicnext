// components/ProductList.js

import { ProductItem, ProductItemLayout2 } from "./product-item";
const LAYOUTS = {
  1: ProductItem,
  2: ProductItemLayout2,
};
const ProductList = ({ products, layout }) => {
  const LayoutComponent = LAYOUTS[layout] || null;
  return (
    <ul>
      {products.map((product) =>
        LayoutComponent ? (
          <LayoutComponent key={product.id} product={product} />
        ) : null
      )}
    </ul>
  );
};

export default ProductList;
