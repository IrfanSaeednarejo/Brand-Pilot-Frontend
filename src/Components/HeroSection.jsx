import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12'>
        <Link
          to={"/history"}
          className='inline-flex items-center justify-between px-1 py-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full mb-7 dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
        >
          <span className='text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3'>
            New
          </span>{" "}
          <span className='text-sm font-medium'>
            New! Upload & Win: See what's new
          </span>
          <svg
            className='w-5 h-5 ml-2'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </Link>
        <h1 className='mb-4  text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Learn. Share. Lead. Sukkur IBA’s Knowledge Hub
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
          A platform where Sukkur IBA students upload, discover, and download
          notes and documents, earn credits, rise on the leaderboard, and get
          rewarded for sharing knowledge.
        </p>
        <div className='flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <Link
            to={"/history"}
            className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
          >
            Explore Documents
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
        </div>
        <div className='w-full h-16 '>
          <span className='font-semibold text-gray-400 uppercase'>
            FEATURED IN
          </span>
          <div className='flex items-center justify-center  mt-8 text-gray-500 sm:justify-between'>
            <a
              href='#'
              className='mb-5 text-[1.5rem] font-semibold uppercase flex flex-row gap-3 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='42'
                height='42'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                class='lucide lucide-graduation-cap-icon lucide-graduation-cap'
              >
                <path d='M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z' />
                <path d='M22 10v6' />
                <path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5' />
              </svg>
              Sukkur IBA Library
            </a>
            <a
              href='#'
              className='mb-5 text-[1.5rem] font-semibold uppercase flex flex-row gap-3 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='42'
                height='42'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                class='lucide lucide-trophy-icon lucide-trophy'
              >
                <path d='M6 9H4.5a2.5 2.5 0 0 1 0-5H6' />
                <path d='M18 9h1.5a2.5 2.5 0 0 0 0-5H18' />
                <path d='M4 22h16' />
                <path d='M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22' />
                <path d='M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22' />
                <path d='M18 2H6v7a6 6 0 0 0 12 0V2Z' />
              </svg>
              Hackathon 2025
            </a>

            <a
              href='#'
              className='mb-5 text-[1.5rem] font-semibold uppercase flex flex-row gap-3 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='42'
                height='42'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                class='lucide lucide-users-icon lucide-users'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx='9' cy='7' r='4' />
                <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              </svg>
              Student Council
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
