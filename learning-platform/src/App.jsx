import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Tech from "./Tech/Tech";
import Contact from "./Contact/Contact";
import CourseDetails from "./Courses/CourseDetails";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Home/Navbar";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSign,setShowSign]=useState(false)

  const onLoginClick = () => {
    setShowLogin(true);
  };

  const onCloseLogin = () => {
    setShowLogin(false);
  };
   const onSignup = () => {
    setShowSign(true);
  };

  const onCloseSignup = () => {
    setShowSign(false);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        {/* Navbar Always At Top */}
        <Navbar onLoginClick={onLoginClick} onSignup={onSignup} />

        {/* Login Popup */}
        {showLogin && <LoginForm onClose={onCloseLogin} />}
        {showSign && <SignupForm onClose={onCloseSignup} />}
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />

          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
