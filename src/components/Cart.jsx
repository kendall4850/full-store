import usecartStore from "../store/cartStore";

const Cart = () => {
  const carProducts = usecartStore((state) => state.carProducts);
  return (
    <div className=" w-[20vw]  bg-green-100">
      <h2 className="text-center font-bold ">Carrito</h2>
      {carProducts &&
        carProducts.map((product) => <p key={product.id}>{product.title}</p>)}
    </div>
  );
};

export default Cart;
