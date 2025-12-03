import React, { useState } from "react";
import LandingPage from "./Landing";
import Navbar from "./Navbar";
import PopularCourses from "./PopularCourses";
import TestimonialsSection from "./Testimonials";
import Footer from "./Footer";
import LoginForm from "../Auth/LoginForm";

export default function Home() {
  
  return (
    <>
      {/* Pass prop name exactly as Navbar expects (onLoginClick) */}
 

      <LandingPage />
      <PopularCourses />
      <TestimonialsSection />
      <Footer />

    </>
  );
}
