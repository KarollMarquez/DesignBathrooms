import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/x.svg";
import Youtube from "../assets/icons/youtube.svg";
import Tiktok from "../assets/icons/tiktok.svg";
import Tumblr from "../assets/icons/tumblr.svg";
import Pinterest from "../assets/icons/pinterest.svg";
import {handleShare} from '../share.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [shareOpen, setShareOpen] = useState(false);

  const links = [
    { name: "Projects", sub: ["Sculpted Serenity", "Marble Radiance", "Monochrome Masterpiece","Nordic Luminosity", "Skyline Retreat", "Celestial Marble", "Luminous Harmony", "Elysian Bath","Midnight Veins", "Marble Illusions"," Essential Elegance"] },
    { name: "Features", sub: ["Glass", "LEDs", "Standing Showers", "Tubs", "Vanity", "XL Bathrooms"] },
    { name: "Before/After"},
    { name: "About" },
    { name: "Contact" },
  ];

  const handleBack = () => setActiveMenu(null);

  return (
    <nav className="fixed w-full top-0 z-50 text-white font-george bg-[#3c3c3c]">
      <div className="flex items-center justify-between p-6 px-8 mx-auto">
        <h1 className="text-3xl tracking-wide">Designo Bathrooms</h1>

        {/* === DESKTOP MENU === */}
        <ul className="hidden md:flex gap-4 text-sm tracking-wide relative items-center">
          {links.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <div
                className={`px-3 py-2 transition-colors ${
                  link.sub ? "" : "hover:bg-[#A4C179] hover:text-black"
                }`}
              >
                {link.name}
              </div>

              {/* Submenú */}
              {link.sub && (
                <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-[#3c3c3c] z-40">
                  {link.sub.map((subItem) => (
                    <li
                      key={subItem}
                      className="px-4 py-2 hover:bg-[#A4C179] hover:text-black transition-colors whitespace-nowrap"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Redes sociales */}
          <li className="flex items-center gap-4 ml-4">
            {[ 
              { icon: Facebook, url: "https://facebook.com" },
              { icon: Instagram, url: "https://www.instagram.com/designobuilders/" },
              { icon: Youtube, url: "https://www.youtube.com/@DesignoBuilders" },
              { icon: Tiktok, url: "https://www.tiktok.com/@designobuilders" },
              { icon: Twitter, url: "https://x.com/DesignoBuilders" }
            ].map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon}
                  alt="social icon"
                  className="w-5 h-5 hover:opacity-70 cursor-pointer transition"
                />
              </a>
            ))}

            {/* Share button */}
            <div className="relative">
              <button
                onClick={() => setShareOpen(!shareOpen)}
                className="flex items-center gap-1 hover:text-[#A4C179] transition"
              >
                <span>Share</span>
              </button>

              {shareOpen && (
                <ul className="absolute right-0 mt-2 bg-[#3c3c3c] shadow-md flex flex-col text-sm z-50 w-40">
                  {[{ name: "Facebook", icon: Facebook },
                    { name: "Instagram", icon: Instagram },
                    { name: "Twitter", icon: Twitter },
                    { name: "Tumblr", icon: Tumblr },
                    { name: "Pinterest", icon: Pinterest }
                  ].map(({ name, icon }) => (
                    <li
                      key={name}
                      onClick={() => handleShare(name)}
                      className="flex items-center gap-2 pl-3 py-2 hover:bg-[#A4C179] hover:text-black cursor-pointer"
                    >
                      <img src={icon} alt={name} className="w-4 h-4" />
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>

        {/* === MOBILE TOGGLE === */}
        <button
          onClick={() => {
            setOpen(!open);
            setActiveMenu(null);
          }}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {open && (
        <div className="fixed inset-0 bg-[#3c3c3c]/95 flex flex-col items-center justify-center text-white text-xl transition-all duration-300">
          {!activeMenu && (
            <div className="flex flex-col items-center space-y-6">
              {links.map((link) => (
                <div key={link.name} className="text-center w-full">
                  {link.sub ? (
                    <button
                      onClick={() => setActiveMenu(link.name)}
                      className="w-full py-2 hover:bg-[#A4C179] hover:text-black transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full py-2 hover:bg-[#A4C179] hover:text-black transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}

              {/* Redes sociales en mobile */}
              <div className="flex gap-4 pt-4">
                {[Facebook, Instagram, Youtube, Tiktok, Twitter].map((icon, i) => (
                  <img
                    key={i}
                    src={icon}
                    alt="social"
                    className="w-6 h-6 hover:opacity-70 transition"
                  />
                ))}
              </div>
            </div>
          )}

          {activeMenu && (
            <div className="flex flex-col items-center space-y-4 w-full">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-base hover:text-[#A4C179]"
              >
                <ArrowLeft size={20} /> Back
              </button>

              {links
                .find((link) => link.name === activeMenu)
                ?.sub.map((subItem) => (
                  <button
                    key={subItem}
                    onClick={() => setOpen(false)}
                    className="w-full py-2 hover:bg-[#A4C179] hover:text-black transition-colors"
                  >
                    {subItem}
                  </button>
                ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
