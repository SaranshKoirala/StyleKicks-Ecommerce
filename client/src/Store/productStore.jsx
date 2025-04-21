import { create } from "zustand";

// const API_URL = "http://localhost:5000/api/products/";

const useProductStore = create((set) => ({
  cart: [],
  products: [],
  // queryProducts: [],
  error: null,
  subTotal: 0,
  searchTerm: "",
  isOpen: false,

  setIsOpen: (boolean) => {
    set(() => ({
      isOpen: boolean,
    }));
  },

  setSearchTerm: (term) => {
    set(() => ({
      searchTerm: term,
    }));
  },

  addPrice: (price) => {
    set((state) => ({
      subTotal: state.subTotal + price,
    }));
  },

  getProducts: async (searchTerm = "", sortOrder = "asc") => {
    try {
      let url = "http://localhost:3000/api/products";

      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (sortOrder) params.append("sort", sortOrder);

      const res = await fetch(`${url}?${params.toString()}`);

      if (!res.ok) {
        set({ error: "No Products Found" });
        return;
      }

      const data = await res.json();
      set({ products: data.products, error: "" });
    } catch (error) {
      console.error("Error fetching products:", error); // Log the error
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
