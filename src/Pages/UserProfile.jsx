import React, { useState } from "react";
import image1 from "../assets/1.jpg";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const [user] = useState({
    username: "BrandCo",
    industry: "Fashion & Lifestyle",
    contentGenerated: 42,
    joinDate: "March 2023",
    email: "contact@brandco.com",
    campaigns: [...Array(6)].map((_, i) => ({
      id: i + 1,
      title: `Spring Collection ${i + 1}`,
      platform: i % 2 ? "Instagram" : "TikTok",
      preview: image1,
    })),
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Profile Card */}
          <div className="w-full md:w-1/3 bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <span className="text-4xl font-bold text-white">
                    {user.username.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-xs font-bold px-3 py-1 rounded-full">
                  PRO
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center">{user.username}</h2>
              <p className="text-blue-400 text-sm mt-1">{user.industry}</p>

              <div className="w-full mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Email</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Member Since</span>
                  <span className="font-medium">{user.joinDate}</span>
                </div>
              
              </div>

              <button 
                onClick={() => navigate("/login")}
                className="mt-6 w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Stats Card and New Campaign Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all group flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-400">Content Generated</h3>
                  <div className="p-2 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-cyan-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-3xl font-bold mt-2 text-white">
                  {user.contentGenerated}
                </p>
              </div>

              <button
                onClick={() => navigate("/generate")}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Campaign
              </button>
            </div>

            {/* Tabs - Simplified to just Overview */}
            <div className="border-b border-gray-700 mb-6">
              <nav className="-mb-px flex space-x-8">
                <button
                  className="py-4 px-1 border-b-2 font-medium text-sm border-cyan-400 text-cyan-400"
                >
                  Overview
                </button>
              </nav>
            </div>

            {/* Overview Content */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {user.campaigns.slice(0, 3).map((campaign) => (
                  <div
                    key={campaign.id}
                    className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all group"
                  >
                    <div className="relative">
                      <img
                        src={campaign.preview}
                        alt={campaign.title}
                        className="w-full h-40 object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                        {campaign.title}
                      </h4>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-400">
                          {campaign.platform}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg transition-colors">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-500/10 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5 text-blue-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">
                          New campaign created: Spring Collection {i + 1}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">
                          {i + 1} day{i + 1 > 1 ? "s" : ""} ago
                        </p>
                      </div>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;