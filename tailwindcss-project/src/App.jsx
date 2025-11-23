import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-[80vh] bg-gray-300 text-gray-800 flex flex-col">

      {/* Navbar */}
      <header className="bg-gray-300 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">TailwindApp</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Build Beautiful UI with Tailwind CSS
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Tailwind CSS gives you the power to create modern designs with utility
          classes. Customize everything with ease.
        </p>

        <button onClick={() => window.open("https://v3.tailwindcss.com/","_blank")} className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* Card Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
          <p className="text-gray-600">Write less CSS & build interfaces faster.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
          <p className="text-gray-600">Your design adapts to all screens automatically.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Modern Styling</h3>
          <p className="text-gray-600">Beautiful UI with utility-based CSS classes.</p>
        </div>
      </section>

    </div>
    </>
  )
}

export default App
