import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage";
import AboutUs from "./Pages/AboutUS";
import ContactUs from "./Pages/ContactUS";
import Login from "./Components/Login";
import Signup from "./Components/SignUP";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import ContentGenerator from './Pages/ContentGenerator'
import OutputPreview from './Pages/OutputPreview'


const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
         
          <Route path='/generate' element={<ContentGenerator />} />
          <Route path='/output' element={<OutputPreview />} />
        

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
