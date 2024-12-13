import { create } from "zustand";

const useStore = create((set) => ({
  //   user: null,
  getUserByEmail: async ({ userInfo }) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/users${userInfo}`
      );
      if (!response.ok) {
        return { success: false, message: "No User found!" };
      }

      const data = await response.json();
      //   set({ user: data }); // Update the user state
      return { success: true, message: "User Found!", user: data };
    } catch (error) {
      console.error("Error fetching user:", error);
      return { success: false, message: "Error occurred while fetching user!" };
    }
  },
}));

export default useStore;
