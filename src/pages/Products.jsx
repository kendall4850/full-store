import Cart from "../components/Cart";
import ProductsList from "../components/ProductsList";

const Products = () => {
  return (
    <div className="flex h-[95vh]">
      <ProductsList />
      <Cart />
    </div>
  );
};

export default Products;
