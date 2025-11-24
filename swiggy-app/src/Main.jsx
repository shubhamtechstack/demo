 function Mainapp() {
  return (
    <div className="w-full bg-white py-20 flex flex-col items-center">
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Explore Our Popular Dishes
      </h2>
      <p className="text-gray-600 max-w-2xl text-center mb-12 px-4">
        Taste the best meals prepared by top-rated chefs using the freshest ingredients.
      </p>

      {/* GRID OF ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {[
          {
            title: "Cheese Burger",
            price: "$12",
            img: "https://blog-content.omahasteaks.com/wp-content/uploads/2023/02/The-Mack-Burger-recipe-scaled.jpg",
          },
          {
            title: "Italian Pizza",
            price: "$18",
            img: "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
          },
          {
            title: "French Fries",
            price: "$8",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Wn8kqLfBzqQ7gBGuNClgIudF4lz0NlMMNg&s",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-red-500 text-xl font-bold mt-2">{item.price}</p>
            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Main