import { create } from "zustand";

const API_URL = "http://localhost:5000/api/products/";

const useProductStore = create((set) => ({
  cart: [],
  products: [],
  error: null,

  getProducts: async () => {
    try {
      const res = await fetch(API_URL);
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
      const res = await fetch(`http://localhost:5000/api/products/${id}
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
