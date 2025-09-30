import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home"); // default active menu

  const menuItems = ["Home", "About", "Projects", "Contact"];

  // Scroll listener untuk update menu active sesuai section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      menuItems.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveMenu(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi scroll smooth
  const handleClick = (e, item) => {
    e.preventDefault();
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveMenu(item);
    setIsOpen(false); // tutup menu mobile
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 backdrop-blur-sm border-b border-zinc-700 bg-zinc-900/80">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            {"</Rian's Portfolio>"}
          </h1>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 text-base lg:text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleClick(e, item)}
                className={`relative px-3 py-1 transition-all duration-300 ${
                  activeMenu === item
                    ? "text-orange-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-orange-700 after:rounded-full"
                    : "text-[#959595] hover:text-orange-500 hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-gradient-to-r hover:after:from-orange-500 hover:after:to-orange-700 hover:after:rounded-full"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-1/2 h-full bg-zinc-900/90 backdrop-blur-lg shadow-lg md:hidden flex flex-col items-start gap-6 p-6"
            >
              <button
                className="self-end text-white mb-4"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={(e) => handleClick(e, item)}
                  className={`w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeMenu === item
                      ? "text-white underline decoration-2 decoration-gradient-to-r from-orange-500 to-orange-700"
                      : "text-[#959595] hover:text-white hover:underline hover:decoration-2 hover:decoration-gradient-to-r hover:from-orange-500 hover:to-orange-700"
                  }`}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
