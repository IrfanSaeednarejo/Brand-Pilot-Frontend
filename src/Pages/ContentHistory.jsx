import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const ContentHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [viewMode, setViewMode] = useState('grid');

    // Mock data for content history
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
        // Delete functionality would go here
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

    // Sort content by newest first
    const sortedContent = [...filteredContent].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Paginate content
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedContent.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div className="flex items-center mb-4 md:mb-0">
                                <Link to='/' data-readdy="true" className="text-gray-500 hover:text-indigo-600 mr-3 cursor-pointer">
                                    <i className="fas fa-arrow-left mr-2"></i>
                                    Back to Generator
                                </Link>
                                <h2 className="text-2xl font-bold text-gray-900">Content History</h2>
                            </div>
                            <div className="flex space-x-3">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md ${viewMode === 'grid' ? 'bg-indigo-50 text-indigo-700 border-indigo-300' : 'text-gray-700 bg-white hover:bg-gray-50'} !rounded-button whitespace-nowrap cursor-pointer`}
                                >
                                    <i className="fas fa-th-large mr-1.5"></i>
                                    Grid
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md ${viewMode === 'list' ? 'bg-indigo-50 text-indigo-700 border-indigo-300' : 'text-gray-700 bg-white hover:bg-gray-50'} !rounded-button whitespace-nowrap cursor-pointer`}
                                >
                                    <i className="fas fa-list mr-1.5"></i>
                                    List
                                </button>
                            </div>
                        </div>
                        {/* Filters */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <div className="max-w-3xl mx-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="search"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm pl-10"
                                        placeholder="Search by title, content or tags..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content Grid */}
                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentItems.map((item) => (
                                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{item.title}</h3>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.preview}</p>
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {item.tags.map((tag, index) => (
                                                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium cursor-pointer">
                                                    View Details
                                                </button>
                                                <div className="flex space-x-2">
                                                    <button className="text-gray-400 hover:text-indigo-600 cursor-pointer" title="Download">
                                                        <i className="fas fa-download"></i>
                                                    </button>
                                                    <button className="text-gray-400 hover:text-indigo-600 cursor-pointer" title="Share">
                                                        <i className="fas fa-share-alt"></i>
                                                    </button>
                                                    <button className="text-gray-400 hover:text-red-600 cursor-pointer" title="Delete" onClick={() => handleDelete(item.id)}>
                                                        <i className="fas fa-trash-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {currentItems.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                                                            <img src={item.thumbnail} alt={item.title} className="h-10 w-10 object-cover" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                                            <div className="text-sm text-gray-500 line-clamp-1">{item.preview}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <span className="text-sm text-gray-900 capitalize">{item.type}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {item.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {item.tags.slice(0, 2).map((tag, index) => (
                                                            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {item.tags.length > 2 && (
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                                                +{item.tags.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-3">
                                                        <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer" title="View">
                                                            <i className="fas fa-eye"></i>
                                                        </button>
                                                        <button className="text-gray-500 hover:text-indigo-600 cursor-pointer" title="Download">
                                                            <i className="fas fa-download"></i>
                                                        </button>
                                                        <button className="text-gray-500 hover:text-indigo-600 cursor-pointer" title="Share">
                                                            <i className="fas fa-share-alt"></i>
                                                        </button>
                                                        <button className="text-gray-500 hover:text-red-600 cursor-pointer" title="Delete" onClick={() => handleDelete(item.id)}>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </div>
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