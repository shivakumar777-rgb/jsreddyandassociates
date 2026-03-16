import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "12", label: "Expert CAs" },
  { value: "8", label: "Service Areas" },
];

const testimonials = [
  {
    name: "Ramesh Naidu",
    company: "MD, Naidu Constructions Pvt Ltd",
    text: "JS Reddy & Associates have been handling our tax and audit requirements for over a decade. Their team is prompt, professional and always ahead of compliance deadlines.",
  },
  {
    name: "Dr. Anjali Sharma",
    company: "Director, Healthcare Solutions",
    text: "Outstanding service on GST and corporate law matters. They simplify complex regulations and ensure we're always compliant. Highly recommended for any business.",
  },
  {
    name: "Suresh Kumar",
    company: "Founder, TechVentures",
    text: "As a startup, we needed expert guidance on company registration and tax planning. JSR & Associates provided exactly that — affordable, thorough and reliable.",
  },
];

const blogs = [
  {
    date: "March 10, 2026",
    tag: "Direct Tax",
    title: "Key Changes in Income Tax for FY 2025-26 You Must Know",
    desc: "The Finance Act introduced several amendments affecting individual taxpayers, corporates and NRIs. Here's a comprehensive summary.",
  },
  {
    date: "February 22, 2026",
    tag: "GST",
    title: "GST Audit: Common Mistakes and How to Avoid Them",
    desc: "Filing errors and mismatches are the top reasons for GST audit notices. Learn how to review your GSTR filings and stay compliant.",
  },
  {
    date: "January 15, 2026",
    tag: "Corporate Laws",
    title: "LLP vs Private Limited Company: Which is Right for You?",
    desc: "A structured comparison of compliance costs, tax treatment, liability and operational flexibility to help you make the right choice.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />

      {/* Stats bar */}
      <section style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-yellow-900 font-body text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <TeamSection />

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Client Stories
            </p>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 card-lift">
                <div className="quote-mark mb-2">"</div>
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm font-body">{t.name}</div>
                    <div className="text-gray-400 text-xs font-body">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Knowledge Hub
            </p>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Latest Articles & Updates</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {blogs.map((b, i) => (
              <div key={i} className="card-lift group rounded-xl overflow-hidden border border-gray-100 bg-white">
                <div className="h-40 flex items-end p-5"
                  style={{ background: `linear-gradient(135deg, #0a1628, #${i === 0 ? "1a2f4e" : i === 1 ? "1e3a5f" : "162b45"})` }}>
                  <span className="px-3 py-1 rounded-full text-xs font-body font-semibold text-yellow-900 bg-yellow-400">
                    {b.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs font-body mb-2">{b.date}</p>
                  <h3 className="font-display font-semibold text-gray-900 text-lg leading-snug mb-3 group-hover:text-yellow-800 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-body leading-relaxed mb-4">{b.desc}</p>
                  <Link to="/blog" className="text-yellow-700 text-sm font-semibold font-body hover:text-yellow-900 transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-outline">View All Articles</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Simplify Your Compliance?
          </h2>
          <p className="text-gray-300 font-body mb-8 text-lg">
            Schedule a free consultation with our experts today. No obligation, just clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book Free Consultation →</Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}