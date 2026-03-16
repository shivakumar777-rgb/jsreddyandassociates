import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Excellence in",
    highlight: "Chartered Accountancy",
    subtitle: "Trusted by businesses across Telangana for comprehensive tax, audit, and financial advisory services with 20+ years of expertise.",
    cta: "Explore Services", ctaLink: "/services",
    secondary: "Meet Our Team", secondaryLink: "/team",
  },
  {
    title: "Simplifying",
    highlight: "Direct & Indirect Taxation",
    subtitle: "Expert guidance on Income Tax, GST compliance, transfer pricing, and international taxation to optimize your tax strategy.",
    cta: "Our Tax Services", ctaLink: "/services",
    secondary: "Contact Us", secondaryLink: "/contact",
  },
  {
    title: "Comprehensive",
    highlight: "Audit & Assurance",
    subtitle: "Providing reliable audit services to PSUs, corporates, banks and government bodies with integrity and precision.",
    cta: "Know More", ctaLink: "/services",
    secondary: "Get a Quote", secondaryLink: "/contact",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "12", label: "Expert CAs" },
  { value: "100%", label: "Compliance Rate" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setCurrent((prev) => (prev + 1) % slides.length); setAnimating(false); }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-pattern"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #112240 60%, #0d1f3c 100%)" }}>

      {/* Decorative bg circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className={`transition-all duration-400 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-300 text-sm font-body tracking-wide">ICAI Registered Firm · Hyderabad</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-6">
              {slide.title}{" "}
              <span className="gold-text block mt-1">{slide.highlight}</span>
            </h1>

            <p className="text-gray-300 text-lg font-body leading-relaxed mb-8 max-w-xl">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to={slide.ctaLink} className="btn-primary">{slide.cta} →</Link>
              <Link to={slide.secondaryLink} className="btn-outline">{slide.secondary}</Link>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-10">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-yellow-400" : "w-3 bg-white/30"}`} />
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="card-lift p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="text-4xl font-display font-bold mb-2 gold-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg border border-yellow-500/20 bg-yellow-500/5 flex items-center gap-4 float-badge">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">🏆</div>
              <div>
                <div className="text-white font-medium font-body text-sm">Trusted by 500+ clients</div>
                <div className="text-gray-400 text-xs font-body">Across Telangana & Andhra Pradesh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-lg border border-white/10 bg-white/5 text-center">
              <div className="text-2xl font-display font-bold gold-text">{stat.value}</div>
              <div className="text-gray-400 text-xs font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}