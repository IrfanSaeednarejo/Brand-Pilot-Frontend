import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext.js'

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
    const { user } = useAuthContext()

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={user ? <LandingPage/> : <Navigate to="/login" />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}  />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
         
          <Route path='/generate' element={<ContentGenerator />} />
          <Route path='/output' element={<OutputPreview />} />
        

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
