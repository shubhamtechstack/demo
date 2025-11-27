function Projects(){
     // ✅ PROJECTS ARRAY MUST BE INSIDE COMPONENT
  const projects = [
    { title: "Portfolio Website", tech: "React, Tailwind" },
    { title: "Bike Rental App", tech: "React, Spring Boot" },
    { title: "Medical Data Extractor", tech: "Python, OCR" },
    { title: "Tiffin Service Website", tech: "HTML, JS" },
  ];

  const clients = [
    { name: "Amit Sharma", review: "Amazing service, fast delivery!" },
    { name: "Riya Verma", review: "Professional design and clean UI." },
    { name: "Rahul Mehta", review: "Highly recommended developer." },
  ];
    return(
        <>
         <section id="portfolio" className="py-20 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:border hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.tech}</p>
              <button className="mt-4 bg-cyan-400 text-black px-5 py-2 rounded-lg hover:bg-cyan-500">
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>
        </>
    )
}
export default Projects