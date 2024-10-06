import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../public/Images/smbulllogo.jpeg";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 transition-colors duration-300 ease-in-out ${
          isScrolled ? "bg-[#a6c465] shadow-lg" : "bg-transparent"
        } z-50`}
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto " />
          </NavLink>
          <div className="lg:hidden">
            <FiMenu
              onClick={() => setMenu(true)}
              className="
            text-3xl sm:text-4xl md:text-5xl text-[#a6c465]  
            rounded-full p-1 sm:p-2 cursor-pointer bg-white "
            />
          </div>

          <nav className="hidden font-serif text-white lg:flex items-center gap-6 sm:gap-8 md:gap-10">
            <NavLink
              to="/"
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              About Us
            </NavLink>
            <NavLink
              to="/service"
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              Services
            </NavLink>
            <NavLink
              to="/Product"
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              Client Telle
            </NavLink>
            <NavLink
              to="/contact"
              className="text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              Contact Us
            </NavLink>
          </nav>

          {isSideMenuOpen && (
            <div
              className="fixed h-screen w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 
          right-0 lg:hidden"
            >
              <section
                className="text-white bg-black flex-col absolute left-0 top-0 h-screen 
            bg-transparent p-8 gap-8 z-50 w-full text-center flex"
              >
                <IoCloseOutline
                  onClick={() => setMenu(false)}
                  className="mt-0 mb-8 text-3xl sm:text-4xl md:text-5xl text-[#a6c465] rounded-full p-1 sm:p-2 cursor-pointer
                 bg-white absolute right-5 top-5 "
                />

                <NavLink
                  to="/"
                  className="text-white font-serif font-bold text-xl sm:text-2xl"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className="text-white font-serif font-bold text-xl sm:text-2xl"
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/service"
                  className="text-white font-bold text-xl sm:text-2xl"
                >
                  Services
                </NavLink>

                <NavLink
                  to="/Product"
                  className="text-white font-serif font-bold text-xl sm:text-2xl"
                >
                  Client Telle
                </NavLink>

                <NavLink
                  to="/contact"
                  className="text-white font-serif font-bold text-xl sm:text-2xl"
                >
                  Contact Us
                </NavLink>

          
                <div className="flex justify-center items-center text-5xl sm:text-3xl md:text-4xl gap-6 sm:gap-8 md:gap-10 mt-8">
                  <Link
                    to="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>

                  <Link
                    to="https://www.instagram.com/accounts/login/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </Link>

                  <Link
                    to="https://www.youtube.com/channel/YourChannelID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoYoutube />
                  </Link>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
