import { create } from "zustand";

const userStore = create((set) => ({
  //   user: null,
  getUserByEmail: async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        return { success: false, message: "No User found!" };
      }

      const data = await response.json();
      //   set({ user: data }); // Update the user state
      return { success: true, message: "User Found!", data };
    } catch (error) {
      console.error("Error fetching user:", error);
      return { success: false, message: "Error occurred while fetching user!" };
    }
  },
}));

export default userStore;
