import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='p-4 bg-white sm:p-6 dark:bg-gray-800'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
              <span className="text-blue-400">Brand</span>Pilot
            </span>
          </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Resources
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link to='/' className='hover:underline'>
                  BranPilot
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
                Follow us
              </h2>
              <ul className='text-gray-600 dark:text-gray-400'>
                <li className='mb-4'>
                  <Link
                    to='https://github.com/IrfanSaeednarejo/Brand-Pilot'
                    target='_blank'
                    className='hover:underline '
                  >
                    Github
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='generate'
                    className='hover:underline '
                  >
                    Generate Content
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to={'/history'}
                    className='hover:underline '
                  >
                    Content History
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    to='output'
                    className='hover:underline '
                  >
                    Output Preview
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-center w-full'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{" "}
            <Link href='/' className='hover:undderline'>
              BranPilot
            </Link>
            . All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
