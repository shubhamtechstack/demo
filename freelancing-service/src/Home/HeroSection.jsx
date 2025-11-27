function HeroSection(){
    return(
        <>
        <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white pt-20"
      >
        <div className="text-center space-y-6 max-w-3xl px-6">
          <h1 className="text-5xl font-bold leading-tight">
            I Build <span className="text-cyan-400">Modern Websites</span> That
            Convert
          </h1>
          <p className="text-gray-300 text-lg">
            Freelance Web Developer | React | Frontend | Backend Integration
          </p>
          <div className="flex justify-center gap-5">
            <a
              href="#portfolio"
              className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 transition"
            >
              View Work
            </a>
            <a
            
              className="border border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>
        </>
    )
}
export default HeroSection



