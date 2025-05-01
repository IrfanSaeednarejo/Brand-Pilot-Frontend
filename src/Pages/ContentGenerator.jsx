import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContentGenerator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: '',
    productType: '',
    productDescription: '',
    tone: 'professional',
    targetAudience: [],
    additionalNotes: '',
    platforms: []
  });

  const apiUrl = import.meta.env.REACT_APP_AIMLAPI_KEY;

const [generatedContent, setGeneratedContent] = useState(null);
const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'platforms') {
      setFormData((prev) => ({
        ...prev,
        platforms: checked
          ? [...prev.platforms, value]
          : prev.platforms.filter(platform => platform !== value)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedContent(null); // Reset previous output
  
    const prompt = `
  Generate a marketing content package for a product with the following details:
  - Product Name: ${formData.productName}
  - Product Type: ${formData.productType}
  - Description: ${formData.productDescription}
  - Tone: ${formData.tone}
  - Target Audience: ${formData.targetAudience.join(", ")}
  - Additional Notes: ${formData.additionalNotes}
  - Platforms: ${formData.platforms.join(", ")}
  
  Provide:
  1. A compelling title
  2. A short promotional description
  3. A detailed blog/article
  4. Social media captions (for Instagram, Facebook, Twitter and Linkedin)
  `;
  
    try {
      const response = await fetch('https://api.aimlapi.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer 604b23575d3c42e895a3025619521497`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: 'You are a professional content generator AI.' },
            { role: 'user', content: prompt }
          ],
        }),
      });
  
      const data = await response.json();
      const aiReply = data.choices?.[0]?.message?.content;
      setGeneratedContent(aiReply || 'No content returned.');

  // After API response:
navigate('/output', { 
  state: { 
    generatedContent: aiReply,
    formData: formData 
  } 
});

localStorage.setItem('generatedContent', JSON.stringify({
  generatedContent: aiReply,
  formData: formData
}));

    } catch (error) {
      console.error('API Error:', error);
      setGeneratedContent('Failed to generate content.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="bg-gray-850 shadow-2xl rounded-3xl p-10 max-w-6xl mx-auto border border-blue-500/30 backdrop-blur-md">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white">Content Generator</h2>
          <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full">
            Beta
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10 text-white">
          
          {/* Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium mb-2 text-blue-400">Product Name</label>
              <input
                id="productName"
                name="productName"
                type="text"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="EcoSmart Water Bottle"
                className="w-full rounded-2xl border border-blue-500/20 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-5 py-3 text-sm transition"
                required
              />
            </div>
            <div>
              <label htmlFor="productType" className="block text-sm font-medium mb-2 text-blue-400">Product Type</label>
              <select
                id="productType"
                name="productType"
                value={formData.productType}
                onChange={handleInputChange}
                className="w-full rounded-2xl border border-blue-500/20 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none px-5 py-3 text-sm transition"
                required
              >
                <option value="" disabled>Select type</option>
                {['electronics', 'apparel', 'beauty', 'home', 'service', 'software', 'food', 'health', 'other'].map((type) => (
                  <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-blue-500/20" />

          {/* Description */}
          <div>
            <label htmlFor="productDescription" className="block text-sm font-medium mb-2 text-blue-400">Product Description</label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe the product's key features..."
              className="w-full rounded-2xl border border-blue-500/20 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-5 py-3 text-sm transition"
              required
            />
          </div>

          {/* Tone */}
          <div>
            <label className="block text-sm font-medium mb-4 text-blue-400">Tone</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['professional', 'casual', 'fun', 'luxury', 'techy', 'inspirational'].map((tone) => (
                <label key={tone} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="tone"
                    value={tone}
                    checked={formData.tone === tone}
                    onChange={handleInputChange}
                    className="accent-blue-500 w-5 h-5"
                  />
                  <span className="text-sm capitalize">{tone}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium mb-4 text-blue-400">Target Audience</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { value: 'genZ', label: 'Gen Z' },
                { value: 'millennials', label: 'Millennials' },
                { value: 'genX', label: 'Gen X' },
                { value: 'boomers', label: 'Baby Boomers' },
                { value: 'businesses', label: 'Businesses' },
                { value: 'parents', label: 'Parents' },
                { value: 'students', label: 'Students' },
                { value: 'professionals', label: 'Professionals' },
                { value: 'travelers', label: 'Travelers' },
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.targetAudience.includes(value)}
                    onChange={() => {
                      const isSelected = formData.targetAudience.includes(value);
                      setFormData(prev => ({
                        ...prev,
                        targetAudience: isSelected
                          ? prev.targetAudience.filter(val => val !== value)
                          : [...prev.targetAudience, value]
                      }));
                    }}
                    className="accent-blue-500 w-5 h-5"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium mb-2 text-blue-400">Additional Notes</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any extra details?"
              className="w-full rounded-2xl border border-blue-500/20 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-5 py-3 text-sm transition"
            />
          </div>

          {/* Preferred Platforms */}
          <div>
            <label className="block text-sm font-medium mb-4 text-blue-400">Preferred Platforms</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['instagram', 'facebook', 'linkedin', 'twitter'].map((platform) => (
                <label key={platform} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="platforms"
                    value={platform}
                    checked={formData.platforms.includes(platform)}
                    onChange={handleCheckboxChange}
                    className="accent-blue-500 w-5 h-5"
                  />
                  <span className="text-sm capitalize">
                    {platform === 'twitter' ? 'X (Twitter)' : platform}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-6 pt-6">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  productName: '',
                  productType: '',
                  productDescription: '',
                  tone: 'professional',
                  targetAudience: [],
                  additionalNotes: '',
                  platforms: []
                })
              }
              className="px-5 py-2.5 rounded-xl border border-blue-500 text-white hover:bg-gray-700 text-sm transition"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold shadow-lg flex items-center gap-2 transition"
            >
              <i className="fas fa-magic"></i> Generate Content
            </button>
          </div>
        </form>




        {/* Buttons */}
        {loading && <p className="text-blue-400 mt-8 text-center">Generating content...</p>}

      </div>
    </div>
  );
};

export default ContentGenerator;
