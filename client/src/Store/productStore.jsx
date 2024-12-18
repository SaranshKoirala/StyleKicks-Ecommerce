import { create } from "zustand";

const API_URL = "http://localhost:5000/api/products/";

const useProductStore = create((set) => ({
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
}));

export default useProductStore;
