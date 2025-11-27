function ContactForm(){
    return(
        <>
        <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Send Me a <span className="text-cyan-500">Message</span>
          </h2>

          <form className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg focus:outline-cyan-400"
            ></textarea>

            <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

        </>
    )
}
export default ContactForm