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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-3"
      style={{ background: "#0a1628", boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold font-display leading-tight text-white">
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
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium font-body transition-colors duration-200 animated-underline text-white hover:text-yellow-300 ${
                    location.pathname === link.path ? "text-yellow-300" : ""
                  }`}
                >
                  {link.label}
                  {link.dropdown && <span className="ml-1 text-xs">▾</span>}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-56 shadow-xl border-t-2 border-yellow-500 py-2 z-50"
                    style={{ background: "#0a1628" }}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-300 hover:bg-white/5 font-body transition-colors"
                      >
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

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ background: "rgba(201,168,76,0.2)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu — always dark */}
      {mobileOpen && (
        <div className="lg:hidden mobile-menu-open border-t border-white/10"
          style={{ background: "#0a1628" }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 font-medium font-body rounded transition-colors text-white hover:text-yellow-300 hover:bg-white/5 ${
                    location.pathname === link.path ? "text-yellow-300" : ""
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-yellow-300 font-body transition-colors"
                      >
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