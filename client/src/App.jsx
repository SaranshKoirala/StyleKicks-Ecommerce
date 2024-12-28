import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
