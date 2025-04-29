import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 min-h-screen overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>


      {/* Main Hero Content */}
      <div className="container mx-auto px-6 py-16 text-center relative z-10">
        {/* Announcement Banner */}
        <div className="inline-flex items-center justify-between px-4 py-2 mb-10 text-sm bg-gradient-to-r from-blue-900 to-indigo-900 rounded-full border border-blue-700/50 shadow-lg shadow-blue-500/10">
          <span className="bg-blue-500 rounded-full text-white px-3 py-1 text-xs font-bold mr-3 animate-pulse">
            NEW
          </span>
          <Link to={"/generate"} className="text-sm font-medium text-blue-100">
            Now with AI-generated visuals! Try our content creator
          </Link>
          <svg
            className="w-4 h-4 ml-2 text-blue-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            Automate. Create. Engage.
          </span>
          <br />
          AI-Powered Social Media Mastery
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-lg font-normal text-gray-300 lg:text-xl max-w-3xl mx-auto">
          Transform your brand's social presence with our all-in-one automation platform.
          Generate captivating posts, schedule content, and analyze performance - all powered by
          cutting-edge artificial intelligence.
        </p>


        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">10,000+</div>
            <div className="text-sm text-gray-400">Posts Generated</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">95%</div>
            <div className="text-sm text-gray-400">Engagement Boost</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-sm text-gray-400">Happy Brands</div>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-gray-400">Content Automation</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white mb-10">Everything You Need to Dominate Social</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Content Generation</h3>
              <p className="text-gray-400">Automatically create posts, captions, and hashtags tailored to your brand voice.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visual Content Creation</h3>
              <p className="text-gray-400">Generate stunning images and graphics optimized for each social platform.</p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Scheduling</h3>
              <p className="text-gray-400">Auto-publish at optimal times based on your audience's activity patterns.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;