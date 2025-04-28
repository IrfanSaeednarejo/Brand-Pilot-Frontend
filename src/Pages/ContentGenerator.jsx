import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
 

const ContentGenerator = () => {



  // Form state
  const [formData, setFormData] = useState({
    productName: '',
    productType: '',
    productDescription: '',
    tone: 'professional',
    targetAudience: [],
    additionalNotes: '',
    platforms: []
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox changes for platforms
  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;
    if (name === 'platforms') {
      setFormData({
        ...formData,
        platforms: checked
          ? [...formData.platforms, value]
          : formData.platforms.filter(platform => platform !== value)
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically call an API to generate content
  };

  return (
    <div className="min-h-screen bg-gray-50">   
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Content Generator Tab */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Generator</h2>
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Enter your product name"
                required
              />
            </div>
            <div>
              <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                Product Type
              </label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              >
                <option value="" disabled>Select product type</option>
                <option value="electronics">Electronics</option>
                <option value="apparel">Apparel</option>
                <option value="beauty">Beauty & Personal Care</option>
                <option value="home">Home & Kitchen</option>
                <option value="service">Service</option>
                <option value="software">Software</option>
                <option value="food">Food & Beverage</option>
                <option value="health">Health & Wellness</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Describe your product features, USP, and key benefits"
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Tone
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['professional', 'casual', 'fun', 'luxury', 'techy', 'inspirational'].map((tone) => (
                  <div key={tone} className="flex items-center">
                    <input
                      id={`tone-${tone}`}
                      name="tone"
                      type="radio"
                      value={tone}
                      checked={formData.tone === tone}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor={`tone-${tone}`} className="ml-2 block text-sm text-gray-700 capitalize">
                      {tone}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-1">
                Target Audience
              </label>
              <div
                id="targetAudience"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white cursor-pointer flex items-center justify-between"
                onClick={() => {
                  const dropdown = document.getElementById('audience-dropdown');
                  if (dropdown) {
                    dropdown.classList.toggle('hidden');
                  }
                }}
              >
                <span className="text-sm text-gray-700">
                  {formData.targetAudience.length > 0
                    ? `${formData.targetAudience.length} selected`
                    : 'Select audience'}
                </span>
                <i className="fas fa-chevron-down text-gray-400"></i>
              </div>
              <div
                id="audience-dropdown"
                className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg hidden"
              >
                <div className="p-2 space-y-1 max-h-60 overflow-auto">
                  {[
                    {value: 'genZ', label: 'Gen Z'},
                    {value: 'millennials', label: 'Millennials'},
                    {value: 'genX', label: 'Gen X'},
                    {value: 'boomers', label: 'Baby Boomers'},
                    {value: 'businesses', label: 'Businesses (B2B)'},
                    {value: 'parents', label: 'Parents'},
                    {value: 'students', label: 'Students'},
                    {value: 'professionals', label: 'Professionals'},
                    {value: 'travelers', label: 'Travelers'}
                  ].map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => {
                        const newValue = formData.targetAudience.includes(option.value)
                          ? formData.targetAudience.filter(v => v !== option.value)
                          : [...formData.targetAudience, option.value];
                        setFormData({...formData, targetAudience: newValue});
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.targetAudience.includes(option.value)}
                        readOnly
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {formData.targetAudience.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.targetAudience.map((audience) => (
                    <span
                      key={audience}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700"
                    >
                      {audience}
                      <button
                        type="button"
                        className="ml-1 text-indigo-400 hover:text-indigo-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData({
                            ...formData,
                            targetAudience: formData.targetAudience.filter(a => a !== audience)
                          });
                        }}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes (Optional)
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Any special instructions or highlights you want to include"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preferred Platforms
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['instagram', 'facebook', 'linkedin', 'twitter'].map((platform) => (
                <div key={platform} className="flex items-center">
                  <input
                    id={`platform-${platform}`}
                    name="platforms"
                    type="checkbox"
                    value={platform}
                    checked={formData.platforms.includes(platform)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`platform-${platform}`} className="ml-2 block text-sm text-gray-700 capitalize">
                    {platform === 'twitter' ? 'X (Twitter)' : platform}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer"
              onClick={() => {
                setFormData({
                  productName: '',
                  productType: '',
                  productDescription: '',
                  tone: 'professional',
                  targetAudience: [],
                  additionalNotes: '',
                  platforms: []
                });
              }}
            >
              Clear Form
            </button>
            <button
              type="submit"
              className="px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-magic mr-2"></i>
              Generate Content
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContentGenerator;