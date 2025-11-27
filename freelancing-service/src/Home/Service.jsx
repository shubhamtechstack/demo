function Service(){
    return(
        <>
         <section id="services" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          What I <span className="text-cyan-500">Offer</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {[
            "Website Development",
            "React Frontend",
            "Backend Integration",
            "UI/UX Design",
            "SEO Optimization",
            "Deployment & Hosting",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">
                High-quality professional service with fast delivery.
              </p>
            </div>
          ))}
        </div>
      </section></>
    )
}
export default Service