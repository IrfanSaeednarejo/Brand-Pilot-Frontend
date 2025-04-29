import React from 'react';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-16 text-center">
                    <div>
                    <h2 className="text-4xl md:text-5xl font-bold">
    Automating Social Media for Modern Brands
</h2>
<p className="mt-6 max-w-3xl mx-auto text-lg font-medium text-gray-300">
    Our platform helps brands save time and boost engagement by automating their social media workflows. From generating content to tracking performance, we offer everything needed to maintain a strong and consistent digital presence.
</p>
<p className="mt-4 max-w-2xl mx-auto text-lg font-medium text-gray-300">
    Whether you're launching a new campaign or building your online identity, we simplify the process with AI-powered tools tailored for Instagram, LinkedIn, Facebook, and more.
</p>

<h3 className="text-3xl mt-6 font-bold text-blue-400">Our Mission</h3>
<p className="mt-4 max-w-2xl mx-auto text-md font-medium text-gray-300">
    To empower brands by streamlining social media management through intelligent automation — enabling creativity, consistency, and growth at scale.
</p>

<h3 className="text-3xl font-bold">Ready to Transform Your Social Presence?</h3>
<p className="mt-3 text-lg font-medium text-gray-300">
    Get started today and let automation handle the busy work — so you can focus on building your brand.
</p>
<Link
  to='/generate'
  className='inline-flex items-center justify-center px-5 py-3 mt-6 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
>
  Generate Content
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
                </div>
            </div>
        </div>
    );
};

export default AboutUs;