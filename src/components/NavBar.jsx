import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowLeft, Phone, MapPin } from "lucide-react";
import Maps from "../assets/icons/maps.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/x.svg";
import Youtube from "../assets/icons/youtube.svg";
import Tiktok from "../assets/icons/tiktok.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const links = [
    {
      name: "Projects",
      sub: [
        { name: "Sculpted Serenity", path: "/projects/sculpted-serenity" },
        { name: "Marble Radiance", path: "/projects/marble-radiance" },
        { name: "Monochrome Masterpiece", path: "/projects/monochrome-masterpiece" },
        { name: "Nordic Luminosity", path: "/projects/nordic-luminosity" },
        { name: "Skyline Retreat", path: "/projects/skyline-retreat" },
        { name: "Celestial Marble", path: "/projects/celestial-marble" },
        { name: "Luminous Harmony", path: "/projects/luminous-harmony" },
        { name: "Elysian Bath", path: "/projects/elysian-bath" },
        { name: "Midnight Veins", path: "/projects/midnight-veins" },
        { name: "Marble Illusions", path: "/projects/marble-illusions" }
      ]
    },
    {
      name: "Features",
      sub: [
        { name: "Glass", path: "/features/glass" },
        { name: "LEDs", path: "/features/leds" },
        { name: "Standing Showers", path: "/features/standing-showers" },
        { name: "Tubs", path: "/features/tubs" },
        { name: "Vanity", path: "/features/vanity" },
        { name: "XL Bathrooms", path: "/features/xl-bathrooms" }
      ]
    },
    { name: "Before/After", path: "/before-after" },
    { name: "About", path: "/about" },
  ];

  const handleBack = () => setActiveMenu(null);

  return (
    <nav className="fixed w-full top-0 z-50 text-white font-george bg-[#02283b]">
      <div className="w-full bg-transparent pt-2">
        <div className="mx-auto px-8 py-2 flex items-center justify-between text-sm text-white">
          <a
            href="tel:703-775-1113"
            aria-label="Call 703-775-1113"
            className="flex items-center gap-2 ml-4 underline underline-offset-2"
            style={{ textDecorationColor: '#4ba5d3' }}
          >
            <Phone size={16} className="text-[#4ba5d3]" />
            <span className="sm:inline">703-775-1113</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=1655%20Fort%20Myer%20Drive%2C%207th%20Floor%2C%20Arlington%2C%20VA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-white underline underline-offset-2"
            style={{ textDecorationColor: '#4ba5d3' }}
          >
            <MapPin size={16} className="text-[#4ba5d3]" />
            <span className="text-sm">1655 Fort Myer Drive, 7th Floor, Arlington, VA</span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center pl-4 md:pl-6">
            <img src="/images/logo.jpg" alt="Designo logo" className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] object-contain align-middle" />
          </Link>
        </div>

        {/* === DESKTOP MENU === */}
        <ul className="hidden md:flex gap-4 text-sm tracking-wide relative items-center">
          {links.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              {link.sub ? (
                <>
                  <div className="px-3 py-2">
                    {link.name}
                  </div>
                  {/* Submenú */}
                  <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#02283b] z-40">
                    {link.sub.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          to={subItem.path}
                          className="block px-4 py-2 hover:bg-[#609bb9] hover:text-black transition-colors whitespace-nowrap"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="block px-3 py-2 hover:bg-[#609bb9] hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}

          {/* Redes sociales */}
          <li className="hidden lg:flex items-center gap-4 ml-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=1655%20Fort%20Myer%20Drive%2C%207th%20Floor%2C%20Arlington%2C%20VA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Maps} alt="google maps" className="w-5 h-5 hover:opacity-70 cursor-pointer transition" />
            </a>

            <a href="https://www.instagram.com/designobuilders/" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="instagram" className="w-5 h-5 hover:opacity-70 cursor-pointer transition" />
            </a>

            <a href="https://www.youtube.com/@DesignoBuilders" target="_blank" rel="noopener noreferrer">
              <img src={Youtube} alt="youtube" className="w-5 h-5 hover:opacity-70 cursor-pointer transition" />
            </a>

            <a href="https://www.tiktok.com/@designobuilders" target="_blank" rel="noopener noreferrer">
              <img src={Tiktok} alt="tiktok" className="w-5 h-5 hover:opacity-70 cursor-pointer transition" />
            </a>

            <a href="https://x.com/DesignoBuilders" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="x" className="w-5 h-5 hover:opacity-70 cursor-pointer transition" />
            </a>
          </li>
        </ul>

        {/* === MOBILE TOGGLE === */}
        <button
          onClick={() => {
            setOpen(!open);
            setActiveMenu(null);
          }}
          className="md:hidden text-white relative z-[60]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {open && (
        <div className="fixed inset-0 bg-[#02283b]/95 flex flex-col items-center justify-center text-white text-xl transition-all duration-300">
          {!activeMenu && (
            <div className="flex flex-col items-center space-y-6">
              {links.map((link) => (
                <div key={link.name} className="text-center w-full">
                  {link.sub ? (
                    <button
                      onClick={() => setActiveMenu(link.name)}
                      className="w-full py-2 hover:bg-[#609bb9] hover:text-black transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="block w-full py-2 hover:bg-[#609bb9] hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Redes sociales en mobile */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1655%20Fort%20Myer%20Drive%2C%207th%20Floor%2C%20Arlington%2C%20VA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Maps} alt="google maps" className="w-6 h-6 hover:opacity-70 transition" />
                </a>

                <a href="https://www.instagram.com/designobuilders/" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="instagram" className="w-6 h-6 hover:opacity-70 transition" />
                </a>

                <a href="https://www.youtube.com/@DesignoBuilders" target="_blank" rel="noopener noreferrer">
                  <img src={Youtube} alt="youtube" className="w-6 h-6 hover:opacity-70 transition" />
                </a>

                <a href="https://www.tiktok.com/@designobuilders" target="_blank" rel="noopener noreferrer">
                  <img src={Tiktok} alt="tiktok" className="w-6 h-6 hover:opacity-70 transition" />
                </a>

                <a href="https://x.com/DesignoBuilders" target="_blank" rel="noopener noreferrer">
                  <img src={Twitter} alt="x" className="w-6 h-6 hover:opacity-70 transition" />
                </a>              
              </div>
            </div>
          )}

          {activeMenu && (
            <div className="flex flex-col items-center space-y-4 w-full">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-base hover:text-[#609bb9]"
              >
                <ArrowLeft size={20} /> Back
              </button>

              {links
                .find((link) => link.name === activeMenu)
                ?.sub.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.path}
                    onClick={() => setOpen(false)}
                    className="block w-full py-2 hover:bg-[#609bb9] hover:text-black transition-colors text-center"
                  >
                    {subItem.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
