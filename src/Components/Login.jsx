import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../service";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // login(email, password).then((data) => {
    //   // console.log(data);
    //   if (data.success) {
    //     toast.success("Login successful");
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("user", JSON.stringify(data.student));
    //     navigate("/");
    //   } else {
    //     toast.error(data.message);
    //   }
    // });
  };

  return (
    <section className='min-h-screen bg-gray-900 flex items-center justify-center px-4'>
      {/* <Toaster /> */}
      <div className='w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8'>
        <div className='flex flex-col items-center mb-6'>
          <h1 className='text-2xl font-bold text-white mb-4'>
            Sign in to your account
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 text-sm rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              placeholder='example@gmail.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-300'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 text-sm rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              placeholder='••••••••'
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-5 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Sign in
          </button>
          <p className='text-sm text-gray-400 text-center'>
            Don’t have an account yet?{" "}
            <Link
              to='/signup'
              className='text-blue-500 hover:underline font-medium'
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
