import React, { useState } from 'react';
import { Link } from "react-router-dom";

const ContentHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [viewMode, setViewMode] = useState('grid');

    const contentHistory = [
        {
            id: 1,
            title: "Smart Watch Product Campaign",
            type: "social",
            date: "April 27, 2025",
            preview: "🌟 Elevate your fitness journey with our revolutionary smart watch! 💪 Packed with advanced health monitoring features...",
            tags: ["instagram", "product", "fitness"],
            thumbnail: "https://readdy.ai/api/search-image?query=professional%20product%20photography%20of%20a%20sleek%20smartwatch%20with%20health%20monitoring%20display%20against%20pure%20white%20background%20showcasing%20fitness%20tracking%20features%20with%20modern%20minimal%20composition&width=400&height=300&seq=101&orientation=landscape"
        },
        {
            id: 2,
            title: "Health Blog Post Series",
            type: "blog",
            date: "April 25, 2025",
            preview: "The Future of Personal Health Monitoring: How Smart Watches Are Revolutionizing Wellness...",
            tags: ["health", "technology", "wellness"],
            thumbnail: "https://readdy.ai/api/search-image?query=modern%20health%20technology%20concept%20with%20smartwatch%20and%20health%20data%20visualization%20on%20clean%20white%20background%20with%20blue%20accents%20professional%20photography&width=400&height=300&seq=102&orientation=landscape"
        },
        {
            id: 3,
            title: "Product Description - Premium Model",
            type: "description",
            date: "April 23, 2025",
            preview: "Experience the future of health and fitness with our revolutionary smart watch. Featuring advanced health monitoring technology...",
            tags: ["product", "description", "premium"],
            thumbnail: "https://readdy.ai/api/search-image?query=premium%20smartwatch%20product%20closeup%20with%20health%20metrics%20display%20on%20clean%20white%20background%20with%20subtle%20shadows%20professional%20product%20photography&width=400&height=300&seq=103&orientation=landscape"
        },
        {
            id: 4,
            title: "Fitness App Marketing Campaign",
            type: "social",
            date: "April 21, 2025",
            preview: "Transform your fitness routine with our new app! Personalized workouts, nutrition tracking, and seamless integration...",
            tags: ["facebook", "fitness", "app"],
            thumbnail: "https://readdy.ai/api/search-image?query=fitness%20app%20interface%20on%20smartphone%20next%20to%20workout%20equipment%20on%20clean%20white%20background%20with%20blue%20accent%20lighting%20professional%20product%20photography&width=400&height=300&seq=104&orientation=landscape"
        },
    ];

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
    };

    const filteredContent = contentHistory.filter(item => {
        if (!searchTerm) return true;
        return (
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.preview.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const sortedContent = [...filteredContent].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedContent.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="flex items-center mb-4 md:mb-0">
                                <Link to='/' className="text-gray-400 hover:text-blue-400 mr-3">
                                    <i className="fas fa-arrow-left mr-2"></i>
                                    Back
                                </Link>
                                <h2 className="text-3xl font-bold text-white">Content History</h2>
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`inline-flex items-center px-3 py-1.5 border ${viewMode === 'grid' ? 'border-blue-400 bg-blue-500/20 text-blue-300' : 'border-gray-600 text-gray-300'} rounded-md hover:bg-blue-500/10`}
                                >
                                    <i className="fas fa-th-large mr-1.5"></i>
                                    Grid
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`inline-flex items-center px-3 py-1.5 border ${viewMode === 'list' ? 'border-blue-400 bg-blue-500/20 text-blue-300' : 'border-gray-600 text-gray-300'} rounded-md hover:bg-blue-500/10`}
                                >
                                    <i className="fas fa-list mr-1.5"></i>
                                    List
                                </button>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="bg-gray-700 p-4 rounded-lg mb-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    id="search"
                                    className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search by title, content or tags..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>

                        {/* Content Display */}
                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentItems.map((item) => (
                                    <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:shadow-blue-500/50 transition">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-400">{item.date}</p>
                                            <p className="mt-2 text-gray-300 text-sm line-clamp-2">{item.preview}</p>
                                            <div className="flex flex-wrap mt-3 gap-2">
                                                {item.tags.map((tag, index) => (
                                                    <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <button className="text-blue-400 hover:underline text-sm">View Details</button>
                                                <div className="flex space-x-2 text-gray-400">
                                                    <i className="fas fa-download hover:text-blue-400 cursor-pointer"></i>
                                                    <i className="fas fa-share-alt hover:text-blue-400 cursor-pointer"></i>
                                                    <i className="fas fa-trash-alt hover:text-red-400 cursor-pointer" onClick={() => handleDelete(item.id)}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="overflow-hidden rounded-lg border border-gray-700">
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Content</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Tags</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-900 divide-y divide-gray-800">
                                        {currentItems.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-800">
                                                <td className="px-6 py-4 flex items-center space-x-3">
                                                    <img src={item.thumbnail} className="h-10 w-10 rounded object-cover" alt="" />
                                                    <div>
                                                        <div className="text-white">{item.title}</div>
                                                        <div className="text-gray-400 text-sm">{item.preview}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 capitalize text-gray-300">{item.type}</td>
                                                <td className="px-6 py-4 text-gray-400">{item.date}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-wrap gap-1">
                                                        {item.tags.slice(0, 2).map((tag, index) => (
                                                            <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">{tag}</span>
                                                        ))}
                                                        {item.tags.length > 2 && (
                                                            <span className="bg-gray-700 text-gray-400 px-2 py-0.5 rounded text-xs">
                                                                +{item.tags.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right space-x-3">
                                                    <i className="fas fa-eye text-blue-400 hover:text-blue-500 cursor-pointer"></i>
                                                    <i className="fas fa-download text-gray-400 hover:text-blue-400 cursor-pointer"></i>
                                                    <i className="fas fa-share-alt text-gray-400 hover:text-blue-400 cursor-pointer"></i>
                                                    <i className="fas fa-trash-alt text-red-400 hover:text-red-500 cursor-pointer" onClick={() => handleDelete(item.id)}></i>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ContentHistory;
