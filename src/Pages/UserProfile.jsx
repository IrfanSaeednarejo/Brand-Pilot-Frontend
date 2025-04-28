import React, { useState } from "react";
import image1 from "../assets/1.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const documents = [
    {
      title: "Data Structures Notes",
      description: "Complete DS notes for midterm prep.",
      tags: ["DSA", "Midterm", "Sukkur IBA"],
      image: image1,
    },
    {
      title: "Operating Systems Cheatsheet",
      description: "Summarized OS concepts with examples.",
      tags: ["OS", "Cheatsheet", "Semester 4"],
      image: image1,
    },
    {
      title: "Entrepreneurship Case Studies",
      description: "Collection of startup case studies.",
      tags: ["Business", "Case Study"],
      image: image1,
    },
  ];
  const navigate = useNavigate();

  const [user, setUser] = useState({ 
    username: "Irfan Saeed",
    department: "Computer Science",
    noOfUploads: 5,
    points: 100,
  });

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   setUser(JSON.parse(user));
  // }, []);
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-4 text-white'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-extrabold text-white'>
            {user.username}{" "}
          </h1>
          <p className='text-gray-400 mt-2'>{user.department}</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10'>
          <div className='bg-gray-700 p-6 rounded-xl text-center'>
            <h3 className='text-lg font-semibold'>Documents Uploaded</h3>
            <p className='text-3xl font-bold mt-2'>{user.noOfUploads}</p>
          </div>
          <div className='bg-gray-700 p-6 rounded-xl text-center'>
            <h3 className='text-lg font-semibold'>Credits </h3>
            <p className='text-3xl font-bold mt-2'>{user.points}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
          {documents.map((doc, index) => (
            <div
              key={index}
              className='bg-gray-700 p-4 rounded-xl hover:shadow-lg transition-shadow'
            >
              <img
                src={doc.image}
                alt='Document preview'
                className='rounded-lg mb-4 w-full h-32 object-cover'
              />
              <h3 className='text-xl font-bold mb-2 text-white'>{doc.title}</h3>
              <p className='text-gray-400 mb-3 text-sm'>{doc.description}</p>
              <div className='flex flex-wrap gap-2'>
                {doc.tags.map((tag, i) => (
                  <span
                    key={i}
                    className='bg-gray-600 text-xs px-2 py-1 rounded-full text-white'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <button
            // onClick={() => {
            //   navigate("/upload");
            // }}
            className='bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all'
          >
            Upload New Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
