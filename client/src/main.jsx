import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> e6d4ee861b6e3d686dc981686bebe6268a63ef48
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  // <StrictMode>
  <App />
  // </StrictMode>
=======
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
>>>>>>> e6d4ee861b6e3d686dc981686bebe6268a63ef48
);
