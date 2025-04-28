import React from 'react';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-6 md:px-12 xl:px-6">
                <div className="space-y-16 text-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Empowering Students Through Shared Knowledge
                        </h2>
                        <p className="mt-6 max-w-3xl mx-auto text-lg font-medium text-gray-300">
                            Our platform is built by students, for students. We believe that learning thrives in a collaborative environment. Whether you're preparing for exams, completing assignments, or exploring new topics, our community has your back.
                        </p>
                        <p className="mt-4 max-w-2xl mx-auto text-lg font-medium text-gray-300">
                            Share notes, ask questions, and connect with learners from different backgrounds. We're building a digital hub where knowledge is accessible, free, and always growing.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className="text-3xl font-bold text-blue-400">Our Mission</h3>
                        <p className="mt-4 max-w-2xl mx-auto text-md font-medium text-gray-300">
                            To create an open and inclusive academic space where students help each other succeed by sharing resources, insights, and encouragement.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold">Ready to Share & Learn?</h3>
                        <p className="mt-3 text-lg font-medium text-gray-300">
                            Join our growing community of learners and start contributing today.
                        </p>
            <Link
            to='/documents'
            className='inline-flex items-center justify-center px-5 py-3 mt-6 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
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
                </div>
            </div>
        </div>
    );
};

export default AboutUs;