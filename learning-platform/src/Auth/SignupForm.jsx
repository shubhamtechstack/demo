import React from "react";

const SignupForm = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          if (typeof onClose === "function") onClose();
        }
      }}
    >
      <div
        className="bg-white p-6 rounded-xl w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded mb-3"
          required
        />

        {/* Signup Button */}
        <button
          className="w-full bg-purple-600 text-white py-2 rounded-md"
          onClick={() => {
            if (typeof onClose === "function") onClose();
          }}
        >
          Sign Up
        </button>

        {/* Close */}
        <button
          className="w-full mt-3 text-red-600 font-semibold"
          onClick={() => {
            if (typeof onClose === "function") onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
