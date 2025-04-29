import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signup } from "../../service";
// import toast, { Toaster } from "react-hot-toast";

function SignUP() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    BrandName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // signup(formData).then((data) => {
    //   console.log(data);
    //   if (data.success) {
    //     toast.success("Signup successful");
    //     navigate("/login");
    //   } else {
    //     toast.error(data.message);
    //   }
    // });
  };

  return (
    <section className='min-h-screen bg-gray-900 text-white'>
      {/* <Toaster /> */}
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
                  value={formData.email}
                  onChange={handleChange}
                  className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'
                  placeholder='example@gmail.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='username'
                  className='block mb-2 text-sm font-medium'
                >
                  Username
                </label>
                <input
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'
                  placeholder='username'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='department'
                  className='block mb-2 text-sm font-medium'
                >
                  Brand Name
                </label>
                <input
                  type='text'
                  name='department'
                  value={formData.BrandName}
                  onChange={handleChange}
                  className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400'
                  placeholder='Your Brand Name'
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='••••••••'
                  className='bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Create an account
              </button>
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
