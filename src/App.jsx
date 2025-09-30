import DataImage, { listTools, listProyek } from "./data.js";

function App() {
  // Function untuk smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section className="Hero bg-zinc-900 py-16 md:py-24 sm:py-24" id="Home">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-12">
          {/* Text Section */}
          <div>
            {/* Quote */}
            <div className="flex items-center gap-3 mb-6 bg-gradient-to-r from-orange-500 to-orange-700 w-fit p-3 rounded-2xl text-white text-sm sm:text-base">
              <img
                src={DataImage.ProfileImage}
                alt="Profile"
                className="w-10 h-10 rounded-md object-cover"
              />
              <q>The future is written by those who can understand today’s data.</q>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
              Hi, I am Rian Syaputra Ainun Naim
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#959595] mb-6">
              Junior Data Analyst & Junior Web Developer
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#" onClick={() => scrollToSection("Projects")}
                className="bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-3 rounded-2xl text-white font-medium hover:from-orange-700 hover:to-orange-500 transition-all"
              >
                View My Projects <i className="ri-arrow-down-s-line ri-lg"></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-[2px] rounded-2xl bg-gradient-to-r from-orange-500 to-orange-700">
            <img
              src={DataImage.ProfileImage}
              alt="Profile"
              className="w-[290px] max-w-full h-auto object-contain rounded-2xl bg-white"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="About bg-zinc-900 py-16 md:py-24 sm:py-24" id="About">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 lg:px-12">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-700 p-[2px] rounded-2xl shadow-lg ">
              <img
                src={DataImage.AboutImage}
                alt="Profile"
                className="w-[290px] h-[495px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-white">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
              About Me
            </h2>

            {/* Subtitle */}
            <p className="text-[#959595] text-sm sm:text-base mb-6 text-center md:text-left">
              Data Analyst and Web Developer based in Indonesia
            </p>

            {/* Description */}
            <p className="text-[#c9c9c9] leading-relaxed mb-8 text-justify">
              As a fresh graduate of computer science from Mulawarman University, 
              I have a strong interest in web development, data analytics, database design, machine learning, 
              and the Internet of Things. I'm excited to further deepen my knowledge and experience in data 
              analytics and machine learning to solve real-world problems.
            </p>

            {/* Button */}
            <a
              href="/CV_Rian.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-3 rounded-2xl text-white font-medium hover:from-orange-700 hover:to-orange-500 transition-all"
            >
              <i className="ri-download-2-line mr-2"></i> Download CV
            </a>
          </div>

          {/* Familiar Tools Section */}
          <div className="text-white col-span-2 mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Familiar Tools
            </h2>
            {/* Subtitle */}
            <p className="text-[#959595] text-sm sm:text-base mb-6 text-center">
              The following are the tools that I often use
            </p>

            {/* Tools Grid */}
            <div className="tools-box grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
              {listTools.map((tool) => (
                <div
                  key={tool.id}
                  className="flex flex-row items-center gap-3 p-3 border border-zinc-600 rounded-xl hover:bg-zinc-800 transition group"
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-800 p-2 rounded-md group-hover:bg-zinc-900"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-xs sm:text-sm md:text-base">
                      {tool.nama}
                    </h4>
                    <p className="opacity-50 text-[10px] sm:text-xs md:text-sm">
                      {tool.ket}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="Projects bg-zinc-900 text-white py-16 md:py-24 sm:py-24" id="Projects">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center ">
            Projects
          </h2>
          <p className="text-[#959595] text-sm sm:text-base mb-10 text-center ">
            Some projects that I have worked on
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="relative flex flex-col border border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition group bg-zinc-900"
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Hover Overlay (deskripsi singkat) */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 text-center transition-opacity duration-300 rounded-t-2xl">
                    <p className="text-sm sm:text-base">{proyek.desk}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition">
                    {proyek.nama}
                  </h3>
                  <p className="text-sm text-[#b5b5b5] mb-4 flex-1 leading-relaxed">
                    {proyek.deskripsi}
                  </p>

                  {/* Tools used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs py-1 px-3 border border-zinc-600 rounded-md font-medium text-[#959595] bg-zinc-800/50"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={proyek.link} target="_blank" rel="noopener noreferrer"
                    className="mt-auto text-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl text-white font-medium hover:from-orange-700 hover:to-orange-500 transition cursor-pointer"
                  >
                    View Project <i className="ri-arrow-right-line ri-lg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section className="Contact bg-zinc-900 py-16 md:py-24 sm:py-24" id="Contact">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-white">
            Contact Me
          </h2>
          <p className="text-[#959595] text-sm sm:text-base mb-10 text-center">
            Get in touch with me for any questions or collaboration opportunities
          </p>

          {/* Form */}
          <form 
            action="https://formsubmit.co/riansyaputra220902@gmail.com" 
            method="POST"
            className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
          >
            
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-sm sm:text-base text-white font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border border-zinc-600 bg-zinc-800 text-white rounded-xl p-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-sm sm:text-base text-white font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border border-zinc-600 bg-zinc-800 text-white rounded-xl p-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                  required
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm sm:text-base text-white font-medium">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border border-zinc-600 bg-zinc-800 text-white rounded-xl p-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm sm:text-base text-white font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="border border-zinc-600 bg-zinc-800 text-white rounded-xl p-3 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl text-white font-medium hover:from-orange-700 hover:to-orange-500 transition cursor-pointer"
              >
                Send Message <i className="ri-mail-send-line ri-lg"></i>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section className="Footer bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-orange-500">{"</Rian's Portfolio>"}</h1>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <button
              onClick={() => scrollToSection("Home")}
              className="text-gray-400 hover:text-orange-500 transition cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("About")}
              className="text-gray-400 hover:text-orange-500 transition cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("Projects")}
              className="text-gray-400 hover:text-orange-500 transition cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("Contact")}
              className="text-gray-400 hover:text-orange-500 transition cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="mailto:riansyaputra220902@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition">
              <i className="ri-mail-line ri-lg"></i>
            </a>
            <a href="https://www.instagram.com/heloriyan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition">
              <i className="ri-instagram-line ri-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/riansyaputra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition">
              <i className="ri-linkedin-line ri-lg"></i>
            </a>
            <a href="https://github.com/riansyaputra123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition">
              <i className="ri-github-line ri-lg"></i>
            </a>
            <a href="https://wa.me/6282246391952" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-zinc-600 rounded-full text-gray-400 hover:text-orange-500 hover:border-orange-500 transition">
              <i className="ri-whatsapp-line ri-lg"></i>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6 text-gray-400">
            <div className="flex items-center gap-2">
              <i className="ri-mail-line"></i>
              <span>riansyaputra220902@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-phone-line"></i>
              <span>+62 822-4639-1952</span>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-zinc-700 mb-4" />

          {/* Copyright */}
          <p className="text-center text-gray-500 text-sm">
            © 2025 Rian Syaputra Ainun Naim. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
