import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import RawResponseViewer from './RawResponseViewer';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { 
  BookOpenIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';


const OutputPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("titles");
  const [showRawResponse, setShowRawResponse] = useState(false);
  const [contentData, setContentData] = useState({
    generatedContent: '',
    formData: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
     
      if (location.state?.generatedContent) {
        setContentData({
          generatedContent: location.state.generatedContent || '',
          formData: location.state.formData || null
        });
      } 
      
      else {
        const savedContent = localStorage.getItem('generatedContent');
        if (savedContent) {
          const parsed = JSON.parse(savedContent);
          setContentData({
            generatedContent: parsed?.generatedContent || '',
            formData: parsed?.formData || null
          });
        }
      }
    } catch (error) {
      console.error("Error loading content:", error);
    } finally {
      setLoading(false);
    }
  }, [location.state]);

  const parseGeneratedContent = (content) => {
    if (!content || typeof content !== 'string') {
      return {
        title: 'No content available',
        description: 'Please generate content first',
        blog: '',
        captions: '',
        images: ''
      };
    }
  
    
    const getSection = (sectionNumber, sectionName, nextSectionNumber) => {
      
      const headerVariations = [
        `#### ${sectionNumber}. ${sectionName}:\n`,
        `### ${sectionNumber}. ${sectionName}:\n`,
        `#### ${sectionNumber}. ${sectionName}\n`,
        `### ${sectionNumber}. ${sectionName}\n`
      ];
  
      let startIndex = -1;
      let headerUsed = '';
      
      for (const header of headerVariations) {
        startIndex = content.indexOf(header);
        if (startIndex !== -1) {
          headerUsed = header;
          break;
        }
      }
  
      if (startIndex === -1) return '';
  
      const contentStart = startIndex + headerUsed.length;
      
      
      const nextSectionHeaders = [
        `#### ${nextSectionNumber}.`,
        `### ${nextSectionNumber}.`,
        `#### ${nextSectionNumber + 1}.`,
        `### ${nextSectionNumber + 1}.`
      ];
  
      let endIndex = content.length;
      
      for (const nextHeader of nextSectionHeaders) {
        const idx = content.indexOf(nextHeader, contentStart);
        if (idx !== -1) {
          endIndex = idx;
          break;
        }
      }
  
      return content.substring(contentStart, endIndex)
        .trim()
        .replace(/^["\n]+|["\n]+$/g, '');
    };
  
    return {
      title: getSection(1, 'Compelling Title', 2),
      description: getSection(2, 'Short Promotional Description', 3),
      blog: getSection(3, 'Detailed Blog/Article', 4),
      captions: getSection(4, 'Social media captions', 5),
      images: ''
    };
  };


  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }


  const contentSections = parseGeneratedContent(contentData.generatedContent);

 
console.log("Raw API Response:", contentData.generatedContent);
console.log("Parsed Sections:", {
  title: contentSections.title?.substring(0, 50) + '...',
  description: contentSections.description?.substring(0, 50) + '...',
  blog: contentSections.blog?.substring(0, 50) + '...',
  captions: contentSections.captions?.substring(0, 50) + '...',
  images: contentSections.images?.substring(0, 50) + '...'
});
const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  if (!contentData.generatedContent) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">No Content Found</h2>
          <p className="text-gray-300">
            It looks like you came here directly without generating content first.
          </p>
          <button 
            onClick={() => navigate('/generate')}
            className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-white"
          >
            Go to Generator
          </button>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6">
      
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
       
        <div className="p-6 border-b border-gray-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Generated Content
              </h2>
              <p className="text-gray-400 mt-1">Review and manage your AI-generated content</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600 transition-colors"
                onClick={() => navigate("/generate")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Generation
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 hover:bg-blue-500 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Export All
              </button>
            </div>
          </div>
        </div>

        
        <div className="border-b border-gray-700 px-6">
          <nav className="flex overflow-x-auto scrollbar-hide -mb-px space-x-8">
            {["titles", "descriptions", "blog", "social", "images"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab === "titles" && "Product Titles"}
                {tab === "descriptions" && "Descriptions"}
                {tab === "blog" && "Blog Posts"}
                {tab === "social" && "Social Media"}
                {tab === "images" && "Images"}
              </button>
            ))}
          </nav>
        </div>

        
        <div className="p-6">
          
          {activeTab === "titles" && (
            <div className="space-y-4">
              <div className="bg-gray-700/50 p-5 rounded-xl border border-gray-600 hover:border-cyan-400/30 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-yellow-400" />
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded-full">SEO Optimized</span>
                    <span className="text-sm text-gray-400">Title Variant #1</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>

                <blockquote className="text-2xl font-medium text-gray-100 pl-4 border-l-4 border-blue-500">
              {contentSections.title}
              </blockquote>
              </div>

              
            </div>
          )}

          
          {activeTab === "descriptions" && (
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-5 rounded-xl border border-gray-600 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded-full">Detailed</span>
                    <span className="text-sm text-gray-400">Description Variant #1</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <blockquote className="text-2xl font-medium text-gray-100 pl-4 border-l-4 border-blue-500">
                {contentSections.description}
                </blockquote>
              </div>

              
            </div>
          )}

         
          {activeTab === "blog" && (
            
        <div className="space-y-6">
          
          <div className="bg-gray-700/50 p-5 rounded-xl border border-gray-600 hover:border-cyan-400/30 transition-colors">
          
          
          <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5 text-purple-400" />
                    <span className="bg-purple-500/10 text-purple-400 text-xs px-2 py-1 rounded-full">Blog</span>
                    <span className="text-sm text-gray-400">Blog Variant #1</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>

            <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-line">
            <blockquote className="text-2xl font-medium text-gray-100 pl-4 border-l-4 border-blue-500">
                {contentSections.blog}
                </blockquote>
            </div>
          </div>
          
        </div>
      )}

         
          {activeTab === "social" && (
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-5 rounded-xl border border-gray-600 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-1 rounded">
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg> */}
                    </div>
                  
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Caption</h4>
                    <blockquote className="text-2xl font-medium text-gray-100 pl-4 border-l-4 border-blue-500">
                {contentSections.captions}
                </blockquote>
                  </div>
                  {/* <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Hashtags</h4>
                    <div className="flex flex-wrap gap-2">
                      {["SmartWatch", "FitnessGoals", "HealthTech", "WellnessJourney"].map((tag) => (
                        <span key={tag} className="bg-gray-700 text-cyan-300 px-3 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}

          {/* Images Tab Content */}
          {activeTab === "images" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600 hover:border-cyan-400/30 transition-colors group">
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">Feature Close-up</span>
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-cyan-400 rounded-lg hover:bg-gray-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          )}
        </div>
      </div>

      {showRawResponse && (
     <RawResponseViewer content={contentData.generatedContent} />
)}
    </div>
  );
};

export default OutputPreview;