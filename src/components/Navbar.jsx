import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
  }, [location]);

  const serviceItems = [
    { label: "Direct Tax", id: "direct-tax" },
    { label: "Indirect Tax - GST", id: "gst" },
    { label: "Audit and Assurance", id: "audit" },
    { label: "Corporate Laws", id: "corporate" },
    { label: "Accounting and BPO", id: "accounting" },
    { label: "Management Consultancy", id: "consultancy" },
    { label: "FEMA and International Tax", id: "fema" },
    { label: "NGOs and Trusts", id: "ngo" },
  ];

  const handleServiceClick = (serviceId) => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileServicesOpen(false);

    sessionStorage.removeItem("selectedService");
    sessionStorage.setItem("selectedService", serviceId);

    if (location.pathname === "/services") {
      // Already on services page — fire event directly to change service
      window.dispatchEvent(new CustomEvent("changeService", { detail: serviceId }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/services");
    }
  };

  const handleGetQuote = () => {
    setMobileOpen(false);
    if (location.pathname === "/contact") {
      const el = document.getElementById("contact-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/contact");
      setTimeout(() => {
        const el = document.getElementById("contact-form");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  };

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
              JS Reddy and Associates
            </span>
            <span
              className="text-xs font-body tracking-widest uppercase"
              style={{ color: "#c9a84c" }}
            >
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Home */}
            <Link to="/"
              className="px-4 py-2 text-sm font-medium font-body"
              style={{ color: location.pathname === "/" ? "#fcd34d" : "white" }}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/about"
                className="px-4 py-2 text-sm font-medium font-body"
                style={{ color: location.pathname === "/about" ? "#fcd34d" : "white" }}
              >
                About ▾
              </Link>
              {activeDropdown === "about" && (
                <div
                  className="absolute top-full left-0 w-48 py-2 z-50 rounded-b-lg"
                  style={{
                    background: "#0a1628",
                    borderTop: "2px solid #c9a84c",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  <Link to="/about"
                    className="block px-5 py-2.5 text-sm font-body text-gray-300 hover:text-yellow-300 hover:bg-white/5">
                    About Us
                  </Link>
                  <Link to="/team"
                    className="block px-5 py-2.5 text-sm font-body text-gray-300 hover:text-yellow-300 hover:bg-white/5">
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="px-4 py-2 text-sm font-medium font-body"
                style={{ color: location.pathname === "/services" ? "#fcd34d" : "white" }}
              >
                Services ▾
              </button>
              {activeDropdown === "services" && (
                <div
                  className="absolute top-full left-0 w-64 py-2 z-50 rounded-b-lg"
                  style={{
                    background: "#0a1628",
                    borderTop: "2px solid #c9a84c",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  {serviceItems.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleServiceClick(s.id)}
                      className="w-full text-left px-5 py-2.5 text-sm font-body text-gray-300 hover:text-yellow-300 hover:bg-white/5 transition-colors"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Team */}
            <Link to="/team"
              className="px-4 py-2 text-sm font-medium font-body"
              style={{ color: location.pathname === "/team" ? "#fcd34d" : "white" }}
            >
              Team
            </Link>

            {/* Blog */}
            <Link to="/blog"
              className="px-4 py-2 text-sm font-medium font-body"
              style={{ color: location.pathname === "/blog" ? "#fcd34d" : "white" }}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link to="/contact"
              className="px-4 py-2 text-sm font-medium font-body"
              style={{ color: location.pathname === "/contact" ? "#fcd34d" : "white" }}
            >
              Contact
            </Link>

            {/* Get a Quote */}
            <button onClick={handleGetQuote} className="ml-4 btn-primary text-sm">
              Get a Quote
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ background: "rgba(201,168,76,0.2)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className="block h-0.5 bg-yellow-400 transition-all duration-300"
                style={{ transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
              <span className="block h-0.5 bg-yellow-400 transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="block h-0.5 bg-yellow-400 transition-all duration-300"
                style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden mobile-menu-open"
          style={{
            background: "#0a1628",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            maxHeight: "85vh",
            overflowY: "auto",
          }}
        >
          <div className="px-4 py-4 space-y-1">

            <Link to="/" className="block px-4 py-3 font-medium font-body rounded"
              style={{ color: location.pathname === "/" ? "#fcd34d" : "white" }}>
              Home
            </Link>

            <Link to="/about" className="block px-4 py-3 font-medium font-body rounded"
              style={{ color: location.pathname === "/about" ? "#fcd34d" : "white" }}>
              About
            </Link>
            <div className="pl-4 space-y-1">
              <Link to="/about" className="block px-4 py-2 text-sm font-body"
                style={{ color: "#9ca3af" }}>— About Us</Link>
              <Link to="/team" className="block px-4 py-2 text-sm font-body"
                style={{ color: "#9ca3af" }}>— Our Team</Link>
            </div>

            {/* Services toggle */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full text-left px-4 py-3 font-medium font-body rounded flex items-center justify-between"
              style={{ color: location.pathname === "/services" ? "#fcd34d" : "white" }}
            >
              <span>Services</span>
              <span className="text-yellow-400 text-sm"
                style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", display: "inline-block", transition: "transform 0.3s" }}>
                ▾
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-1">
                {serviceItems.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleServiceClick(s.id)}
                    className="w-full text-left px-4 py-2 text-sm font-body"
                    style={{ color: "#9ca3af" }}
                  >
                    — {s.label}
                  </button>
                ))}
              </div>
            )}

            <Link to="/team" className="block px-4 py-3 font-medium font-body rounded"
              style={{ color: location.pathname === "/team" ? "#fcd34d" : "white" }}>
              Team
            </Link>

            <Link to="/blog" className="block px-4 py-3 font-medium font-body rounded"
              style={{ color: location.pathname === "/blog" ? "#fcd34d" : "white" }}>
              Blog
            </Link>

            <Link to="/contact" className="block px-4 py-3 font-medium font-body rounded"
              style={{ color: location.pathname === "/contact" ? "#fcd34d" : "white" }}>
              Contact
            </Link>

            <div className="pt-3 pb-2">
              <button onClick={handleGetQuote} className="btn-primary w-full text-center text-sm">
                Get a Quote
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}