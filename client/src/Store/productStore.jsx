import { create } from "zustand";

// const API_URL = "http://localhost:5000/api/products/";

const useProductStore = create((set) => ({
  cart: [],
  products: [],
  error: null,
  subTotal: 0,
  isOpen: false,
  isFocused: false,

  setIsOpen: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
  setIsFocused: () => {
    set((state) => ({
      isFocused: !state.isFocused,
    }));
  },

  addPrice: (price) => {
    set((state) => ({
      subTotal: state.subTotal + price,
    }));
  },

  getProducts: async (order) => {
    try {
      let res;
      if (order) {
        res = await fetch(`http://localhost:3000/api/products?sort=${order}`);
      } else {
        res = await fetch("http://localhost:3000/api/products/");
      }
      if (!res.ok) {
        set({ error: "Couldn't fetch the products" });
        return;
      }
      const data = await res.json();
      set({ products: data.products, error: "" });
    } catch (error) {
      set({ error: error.message });
    }
  },

  getProduct: async (id) => {
    try {
      set({ products: [], error: null });
      const res = await fetch(`http://localhost:3000/api/products/${id}
        `);
      if (!res.ok) {
        set({ error: "Couldn't fetch the data!!" });
      }
      const data = await res.json();
      set({ products: data.product, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },

  deleteFromCart: (id) => {
    set((state) => ({
      cart: state.cart.filter((product) => product._id !== id),
    }));
  },
}));

export default useProductStore;
