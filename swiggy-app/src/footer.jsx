 function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-20 flex flex-col items-center">
      {/* BRAND */}
      <h2 className="text-3xl font-bold mb-4">FoodExpress</h2>
      <p className="text-gray-400 max-w-xl text-center mb-6 px-4">
        Delivering fresh and delicious meals to your doorstep. Fast, easy, and reliable.
      </p>

      {/* LINKS */}
      <div className="flex gap-8 text-gray-300 text-lg mb-6">
        <a className="hover:text-white transition cursor-pointer">Home</a>
        <a className="hover:text-white transition cursor-pointer">Menu</a>
        <a className="hover:text-white transition cursor-pointer">About</a>
        <a className="hover:text-white transition cursor-pointer">Contact</a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 text-xl">
        <span className="hover:text-red-400 cursor-pointer transition">🐦</span>
        <span className="hover:text-red-400 cursor-pointer transition">📘</span>
        <span className="hover:text-red-400 cursor-pointer transition">📸</span>
      </div>

      {/* COPYRIGHT */}
      <p className="text-gray-500 text-sm mt-6">© 2025 FoodExpress. All rights reserved.</p>
    </footer>
  );
}
export default Footer