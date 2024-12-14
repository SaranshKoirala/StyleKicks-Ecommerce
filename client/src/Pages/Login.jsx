import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useStore } from "zustand";

function Login() {
  // const { getUserByEmail } = userStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (userData) {
      console.log("userData:", userData); // Log userData after it has been updated
    }
  }, [userData]);

  async function handleLoginBtn() {
    try {
      const user = await fetch("http://localhost:8000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!user) {
        console.log("No user found with the given credentials!");
      }
      const data = await user.json();
      setUserData(data);
      console.log("userData:", userData);
      setEmail("");
      setPassword("");

      return { message: "Login Sucessful." };
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="w-96 flex flex-col justify-center bg-white p-10 gap-10 rounded-lg">
        <h1 className="text-center font-bold text-2xl">Login</h1>
        <div className="relative ">
          <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 border-b-2 p-3 w-full"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 border-b-2 p-3 w-full"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2  items-center">
            <input type="checkbox" />{" "}
            <p className="text-black text-sm text-center">Remember Me</p>
          </div>
          <Link to="/forgot">
            <p className="text-blue-500 text-sm text-center">
              Forgot password?
            </p>
          </Link>
        </div>
        <Link className="w-full">
          <button
            className="bg-blue-500 text-white p-2"
            onClick={handleLoginBtn}
          >
            Login{" "}
          </button>
        </Link>
        <p className="text-center text-sm">
          Not a member?
          <Link to="/signup" className="text-blue-500">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
