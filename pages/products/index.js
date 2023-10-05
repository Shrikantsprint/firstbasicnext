import { useState } from "react";
import Link from "next/link";
import { fetchProducts } from "../../utils/apis/products";
import ProductList from "../../layout/product/product-list";

function Products({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);
  const [filters, setFilters] = useState({
    name: "",
    description: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleSearch = async () => {
    const fetchedProducts = await fetchProducts(filters);
    setProducts(fetchedProducts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h1>Product List</h1>

      {/* Search Inputs */}
      <input
        type="text"
        name="name"
        placeholder="Search by name of user..."
        value={filters.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Search by description..."
        value={filters.description}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Min price..."
        value={filters.minPrice}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max price..."
        value={filters.maxPrice}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ProductList products={products} layout="2" />

      <Link href="/admin">Back to Admin Panel</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const initialProducts = await fetchProducts();
  return {
    props: {
      initialProducts,
    },
  };
}

export default Products;
