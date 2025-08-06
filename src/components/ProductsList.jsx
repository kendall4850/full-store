import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetchProducts("https://fakestoreapi.com/products");

  if (loading) {
    return (
      <div className="w-[80vw] ">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="w-[80vw] ">error</div>;
  }

  return (
    <div className="w-[80vw] ">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsList;
