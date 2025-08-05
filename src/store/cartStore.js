import { create } from "zustand";

//la funcion create define nuestro almacen global
//recibe una funcion de callback que toma "set" y puede tambien "get" como argumento
//"set" funcion opara actualizar el estado del almacen
//"get" funcion para obtener el estado actual del almacen

const usecartStore = create((set, get) => ({
  //1.estados iniciales
  carProducts: [],

  //2.crear funciones que modifican el estado
  addToCart: (product) => {
    set((state) => {
      const existingProduct = state.carProducts.find(
        (item) => item.id == product.id
      );

      if (existingProduct) {
        return {
          carProducts: state.carProducts.map((item) =>
            item.id == product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          carProducts: [...state.carProducts, { ...product, quantity: 1 }],
        };
      }
    });
  },

  clearCart: () => {
    set({ carProducts: [] });
  },
}));
export default usecartStore;
