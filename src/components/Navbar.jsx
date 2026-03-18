import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About", path: "/about",
    dropdown: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/team" },
    ],
  },
  {
    label: "Services", path: "/services",
    dropdown: [
      { label: "Direct Tax", path: "/services" },
      { label: "Indirect Tax – GST", path: "/services" },
      { label: "Audit & Assurance", path: "/services" },
      { label: "Corporate Laws", path: "/services" },
      { label: "Accounting & BPO", path: "/services" },
      { label: "Management Consultancy", path: "/services" },
    ],
  },
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Always dark background on mobile so hamburger is visible
  const isMobileDark = !scrolled && !mobileOpen;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileOpen ? "bg-white shadow-lg py-2" : "py-4"
    }`}
    style={{ background: scrolled || mobileOpen ? "white" : "rgba(10,22,40,0.95)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold font-display leading-tight"
              style={{ color: scrolled || mobileOpen ? "#0a1628" : "white" }}>
              JS Reddy & Associates
            </span>
            <span className="text-xs font-body tracking-widest uppercase"
              style={{ color: "#c9a84c" }}>
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <Link to={link.path}
                  className={`px-4 py-2 text-sm font-medium font-body transition-colors duration-200 animated-underline ${
                    scrolled ? "text-gray-700 hover:text-yellow-700" : "text-white hover:text-yellow-300"
                  } ${location.pathname === link.path ? (scrolled ? "text-yellow-700" : "text-yellow-300") : ""}`}>
                  {link.label}
                  {link.dropdown && <span className="ml-1 text-xs">▾</span>}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-yellow-500 py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link key={item.label} to={item.path}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-800 font-body transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="ml-4 btn-primary text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Hamburger — always visible */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ background: "rgba(201,168,76,0.15)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""} bg-yellow-400`} />
              <span className={`block h-0.5 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""} bg-yellow-400`} />
              <span className={`block h-0.5 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""} bg-yellow-400`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl mobile-menu-open border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link to={link.path}
                  className="block px-4 py-3 text-gray-800 font-medium font-body hover:bg-yellow-50 hover:text-yellow-800 rounded transition-colors">
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link key={item.label} to={item.path}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-yellow-700 font-body transition-colors">
                        — {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 pb-2">
              <Link to="/contact" className="btn-primary block text-center text-sm">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}