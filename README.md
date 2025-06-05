#  Brand Pilot

Brand Pilot is an AI-powered content automation platform that streamlines social media management. It leverages the AI/MLAPI.com API to generate high-quality blogs, titles, descriptions, product images, and more, helping brands stay active and consistent across social channels.

---

## 🧠 Features

- **AI-Powered Content Generation:** Automatically create:

Blog posts
Titles and headlines
Descriptions
Product images (via image generation API)

- **User Profile Management:** Constructs a syntax tree from the input regular expression
- **Authentication System:** Converts the syntax tree directly into a DFA without intermediate NFA steps
- **Post History and Drafts:** Displays the DFA graphically, allowing users to trace transitions 
- **Responsive UI:** Updates the DFA visualization as the user modifies the regular expression  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS

- **API Integration:**  AI/MLAPI.com for content and image generation

- **Routing & Auth:** React Router, Context API, LocalStorage/Auth tokens

--- 

## 🛠️ Installation & Setup

1. **Clone this repository:**

   ```bash
   git clone https://github.com/IrfanSaeednarejo/Brand-Pilot.git
   cd Brand-Pilot

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install

3. **Add environment variables:**
   *Create a .env file and add your API key:*
   
   ```bash
   VITE_API_KEY=your_api_key_here

4. **Running the Application**

   ```bash
   npm run dev
   # or
   yarn dev

# Open your browser and navigate to http://localhost:5173 to view the application.

 
 **Future Enhancements**

- Social media platform integration (e.g., Facebook, Instagram posting)

- Team collaboration features

- Analytics and engagement tracking

- Backend Setup
