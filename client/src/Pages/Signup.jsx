import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function handleSignupBtn() {
    const user = await fetch("http://localhost:8000/api/users", {
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
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen p-10 bg-gray-200">
      <div className="w-96 flex flex-col justify-center bg-white p-10 gap-8 rounded-lg">
        <h1 className="text-center  font-bold text-2xl">Sign Up</h1>

        <input
          placeholder="First name"
          type="text"
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <input
          placeholder="Last name"
          type="text"
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />

        <input
          placeholder="Email"
          type="email"
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full  border-b-2  p-2 focus:border-blue-500 focus:outline-none focus:placeholder-black transition duration-700"
          required
        />
        <input
          placeholder="Confirm password"
          type="password"
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
