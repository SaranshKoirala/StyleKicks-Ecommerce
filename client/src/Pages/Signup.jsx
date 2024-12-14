import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const notyf = new Notyf();

  async function handleSignupBtn() {
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        }),
      });
      if (!res) {
        notyf.error(res.message);
      }
      const user = res.json();
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      notyf.success("Acount created sucessfully.");
      navigate("/login");
    } catch (error) {
      notyf.error(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen p-10 bg-gray-200">
      <div className="w-96 flex flex-col justify-center bg-white p-10 gap-8 rounded-lg">
        <h1 className="text-center  font-bold text-2xl">Sign Up</h1>

        <input
          placeholder="First name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <input
          placeholder="Last name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <input
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={handleSignupBtn}
        >
          Sing Up
        </button>

        <div className="flex justify-center gap-2 items-center -mt-4">
          <p className="text-center text-sm ">Already have an account?</p>
          <Link to="/login" className="text-blue-500 text-center text-sm">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
