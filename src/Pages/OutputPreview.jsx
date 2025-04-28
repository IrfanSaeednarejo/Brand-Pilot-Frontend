import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OutputPreview = () => {
  const [activeTab, setActiveTab] = useState("titles");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Output Preview Section */}
      <div className="min-h-screen bg-gray-50">
        <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Generated Content
              </h2>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-save mr-1.5"></i>
                  Save
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-download mr-1.5"></i>
                  Export
                </button>
              </div>
            </div>

            {/* Tabs for different content types */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                {["titles", "descriptions", "blog", "social", "images"].map(
                  (tab) => (
                    <a
                      key={tab}
                      id={`tab-${tab}`}
                      onClick={() => handleTabClick(tab)}
                      className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm cursor-pointer ${
                        activeTab === tab
                          ? "border-indigo-500 text-indigo-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab === "titles" && "Product Titles"}
                      {tab === "descriptions" && "Descriptions"}
                      {tab === "blog" && "Blog Posts"}
                      {tab === "social" && "Social Media"}
                      {tab === "images" && "Images"}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Sample generated content */}
            <div className="space-y-6">
              {activeTab === "titles" && (
                <>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        SEO-Optimized Title 1
                      </h3>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-copy"></i>
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-redo-alt"></i>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base font-medium">
                      The Ultimate Smart Watch: Transform Your Fitness Journey
                      with Advanced Health Monitoring
                    </p>
                  </div>
                </>
              )}

              {activeTab === "descriptions" && (
                <>
                  {/* Description 1 */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Product Description 1
                      </h3>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-copy"></i>
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-redo-alt"></i>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base">
                      Experience the future of health and fitness with our
                      revolutionary smart watch. Featuring advanced health
                      monitoring technology, this premium device tracks your
                      heart rate, sleep patterns, and daily activity with
                      unparalleled accuracy. The sleek, water-resistant design
                      combines durability with style, while the vibrant AMOLED
                      display ensures crystal-clear visibility in any lighting
                      condition. With a remarkable 7-day battery life, you'll
                      spend less time charging and more time achieving your
                      fitness goals.
                    </p>
                  </div>

                  {/* Description 2 */}
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Product Description 2
                      </h3>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-copy"></i>
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-redo-alt"></i>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base">
                      Transform your wellness journey with our innovative smart
                      watch, your ultimate companion for health and fitness
                      tracking. This state-of-the-art device offers
                      comprehensive health monitoring, including continuous
                      heart rate tracking, advanced sleep analysis, and stress
                      level monitoring. The intuitive interface provides
                      real-time insights into your health metrics, while the
                      customizable watch faces let you personalize your
                      experience. With built-in GPS and 20+ sport modes, you'll
                      have everything you need to optimize your workouts and
                      achieve your fitness goals.
                    </p>
                  </div>
                </>
              )}

              {activeTab === "blog" && (
                <>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        Blog Post 1
                      </h3>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-copy"></i>
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-redo-alt"></i>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900">
                        The Future of Personal Health Monitoring: How Smart
                        Watches Are Revolutionizing Wellness
                      </h4>
                      <div className="text-sm text-gray-500">
                        <i className="far fa-clock mr-2"></i>5 min read
                        <i className="fas fa-tag ml-4 mr-2"></i>Health Tech,
                        Wellness, Fitness
                      </div>
                      <p className="text-gray-700">
                        In an era where personal health has become a top
                        priority, smart watches have emerged as powerful tools
                        for monitoring and improving our well-being. This
                        comprehensive guide explores how the latest smart watch
                        technology is transforming the way we approach health
                        and fitness...
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-medium text-gray-900">
                          Key Topics Covered:
                        </h5>
                        <ul className="list-disc pl-5 text-gray-700">
                          <li>
                            24/7 Health Monitoring: Understanding Your Body's
                            Patterns
                          </li>
                          <li>
                            Advanced Sleep Analysis: The Science Behind Better
                            Rest
                          </li>
                          <li>
                            Fitness Tracking: From Basic Steps to Professional
                            Athletics
                          </li>
                          <li>
                            Integration with Modern Healthcare Systems
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "social" && (
                <>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className="fab fa-instagram text-pink-600 mr-2"></i>
                        <h3 className="text-sm font-medium text-gray-900">
                          Instagram Post 1
                        </h3>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-copy"></i>
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                          <i className="fas fa-redo-alt"></i>
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-medium text-gray-900 mb-2">
                          Caption
                        </h4>
                        <p className="text-gray-700">
                          🌟 Elevate your fitness journey with our revolutionary
                          smart watch! 💪 Packed with advanced health monitoring
                          features, this sleek companion tracks your every move
                          with precision. From heart rate to sleep patterns,
                          stay on top of your wellness game 24/7. Built to last
                          with 7-day battery life and water resistance. Your
                          path to better health starts here! ✨
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-900 mb-2">
                          Hashtags
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                            #SmartWatch
                          </span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                            #FitnessGoals
                          </span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                            #HealthTech
                          </span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                            #WellnessJourney
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "images" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src="https://readdy.ai/api/search-image?query=product%20photography%20of%20smartwatch%20showing%20heart%20rate%20monitoring%20feature%20with%20modern%20health%20tracking%20interface%20pure%20white%20background%20professional%20studio%20lighting&width=400&height=400&seq=6&orientation=squarish"
                        alt="Smart Watch Product Image 6"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">
                            Feature Close-up
                          </span>
                          <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                              <i className="fas fa-copy"></i>
                            </button>
                            <button className="text-gray-400 hover:text-indigo-600 cursor-pointer">
                              <i className="fas fa-redo-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutputPreview;