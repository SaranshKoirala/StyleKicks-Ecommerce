import { MdOutlineMail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Login() {
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
            required
          />
        </div>
        <div className="relative">
          <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            className="pl-10 border-b-2 p-3 w-full"
            placeholder="Enter your password"
            type="password"
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
        <button className="bg-blue-500 text-white p-2">Login Now</button>
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
