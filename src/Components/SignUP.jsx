import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup"

// import { signup } from "../../service";
// import toast, { Toaster } from "react-hot-toast";

function SignUP() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()



    const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }


  return (
    <section className='min-h-screen bg-gray-900 text-white'>
      <div className='flex flex-col gap-2 items-center justify-center px-6 py-8 mx-auto md:h-screen'>
        <div className='w-full bg-gray-800 rounded-lg shadow-xl sm:max-w-md xl:p-0'>
          <div className='flex h-14 justify-center items-center '>
            <h1 className='text-2xl font-bold text-white'>Create an Account</h1>
          </div>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                   value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'
                  placeholder='example@gmail.com'
                  required
                />
              </div>


              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                   onChange={(e) => setPassword(e.target.value)} 
                   value={password} 
                  placeholder='••••••••'
                  className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  required
                />
              </div>

              <button type='submit'
              className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              disabled={isLoading}>Create an account</button>
              {error && <div className="error">{error}</div>}

              <div className='w-full flex justify-center items-center'>
                <p className='text-sm font-light text-gray-400'>
                  Already have an account?{" "}
                  <Link
                    to='/login'
                    className='font-medium text-blue-400 hover:underline'
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUP;
