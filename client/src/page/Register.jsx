function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form className="flex flex-col justify-center items-center gap-4 p-10 shadow-2xl rounded-xl">
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-blue-900">Sign Up</h1>
          <p className="text-gray-500 p-3">
            Hi, we are glad you are back, Please SignUp.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <label htmlFor="name" className="font-bold text-blue-900">
            Name
          </label>
          <input
            placeholder="Enter your name"
            type="text"
            id="name"
            className="border border-gray-300 placeholder:text-gray-400 px-2 py-1 w-96 rounded-md focus:outline-none"
            required
          />
          <label htmlFor="email" className="font-bold text-blue-900">
            Email
          </label>
          <input
            placeholder="Enter your email address"
            type="email"
            id="email"
            className="border border-gray-300 placeholder:text-gray-400 px-2 py-1 w-96 rounded-md focus:outline-none"
            required
          />
        </div>
        <div className="relative flex flex-col gap-2 mb-4">
          <label htmlFor="password" className="font-bold text-blue-900">
            Password
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            className="border border-gray-300 placeholder:text-gray-400 px-2 py-1 w-96 rounded-md focus:outline-none"
            required
          />
          <label htmlFor="confirm-password" className="font-bold text-blue-900">
            Password
          </label>
          <input
            placeholder="Confirm password"
            type="password"
            id="confirm-password"
            className="border border-gray-300 placeholder:text-gray-400 px-2 py-1 w-96 rounded-md focus:outline-none"
            required
          />
        </div>
        <button className=" py-2 text-xl text-white bg-blue-900 w-96 rounded-md">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Register;
