import React from "react";
import { motion } from "framer-motion";
import {useNavigate,BrowserRouter} from "react-router-dom"
const Landing = () => {
  const navigate=useNavigate()
  function handlelogin(){
    navigate("./aboutus")
  }
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-400 to-red-600 flex flex-col items-center justify-center text-white p-6">
      {/* NAVBAR */}
      <div className="w-full max-w-6xl flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">FoodExpress</h1>
        <button onClick={handlelogin} className="bg-white text-red-600 px-4 py-2 rounded-xl font-semibold shadow">
          Login
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl mt-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Delicious Food, 
            <span className="block">Delivered Fast!</span>
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-md">
            Order from your favourite restaurants and get hot, fresh meals delivered straight to your doorstep.
          </p>
          <button className="bg-white text-red-600 px-6 py-3 rounded-2xl text-lg font-semibold shadow-md hover:scale-105 transition">
            Order Now
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Ch=1335%2Cq=85%2Cw=2000/wp-content/uploads/national-fast-food-day.jpg"
          alt="Food"
          className="w-90 md:w-96 drop-shadow-2xl rounded-3xl  shadow-2xs"
        />
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
        {[
          { title: "Fast Delivery", text: "Super quick delivery at your location." },
          { title: "Fresh Ingredients", text: "Quality food from top-rated restaurants." },
          { title: "Easy Payment", text: "Multiple online payment methods supported." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg border border-white/30"
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="opacity-90">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


export default Landing;
