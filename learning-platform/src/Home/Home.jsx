import React, { useState } from "react";
import LandingPage from "./Landing";
import Navbar from "./Navbar";
import PopularCourses from "./PopularCourses";
import TestimonialsSection from "./Testimonials";
import Footer from "./Footer";
import LoginForm from "../Auth/LoginForm";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const onLoginClick = () => {
    setShowLogin(true);
  };

  const onCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      {/* Pass prop name exactly as Navbar expects (onLoginClick) */}
      <Navbar onLoginClick={onLoginClick} />

      {showLogin && <LoginForm onClose={onCloseLogin} />}
      <LandingPage />
      <PopularCourses />
      <TestimonialsSection />
      <Footer />

    </>
  );
}
