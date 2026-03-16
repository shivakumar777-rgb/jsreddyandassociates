import { Link } from "react-router-dom";

const highlights = [
  { icon: "🏛️", label: "ICAI Registered", desc: "Certified chartered accountancy firm" },
  { icon: "📍", label: "Hyderabad Based", desc: "Serving Telangana & Andhra Pradesh" },
  { icon: "🤝", label: "Client First", desc: "Personalised, responsive service" },
  { icon: "⚖️", label: "Full Compliance", desc: "100% regulatory adherence" },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left visual */}
          <div className="relative">
            <div className="rounded-2xl p-10 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `radial-gradient(circle at 70% 30%, #c9a84c 0%, transparent 60%)` }} />
              <p className="font-body text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">About Us</p>
              <h3 className="font-display text-3xl font-bold mb-6 leading-snug">Two Decades of Financial Excellence</h3>
              <p className="text-gray-300 font-body leading-relaxed mb-4">
                JS Reddy & Associates is a reputed Chartered Accountancy firm based in Hyderabad, Telangana. Founded on the principles of integrity, accuracy, and client commitment, we have grown to serve over 500 clients across diverse sectors.
              </p>
              <p className="text-gray-300 font-body leading-relaxed">
                Our qualified team of FCAs brings expertise spanning direct and indirect taxation, statutory audits, corporate laws, FEMA compliance, and management consultancy — delivering end-to-end financial solutions under one roof.
              </p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-yellow-300 font-display italic text-lg">
                  "Trusted advisors who treat your business as our own."
                </p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-5 w-44 float-badge">
              <div className="text-3xl font-display font-bold gold-text">20+</div>
              <div className="text-gray-500 text-sm font-body mt-1">Years of trusted service</div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Your Reliable Financial Partner</h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-600 font-body leading-relaxed mb-8">
              We combine deep technical knowledge with a personal touch. Whether you're a startup looking for compliance support or a large corporation needing audit and tax strategies, our team delivers tailored solutions that work.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 card-lift">
                  <span className="text-2xl">{h.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 font-body text-sm">{h.label}</div>
                    <div className="text-gray-500 text-xs font-body mt-0.5">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="font-semibold text-gray-800 font-body mb-3">Who We Serve:</p>
              <div className="flex flex-wrap gap-2">
                {["Corporates","SMEs","Startups","PSUs","Banks","NRIs","HNIs","NGOs","Govt. Depts"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full border border-yellow-300 text-yellow-800 bg-yellow-50 font-body">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/about" className="btn-primary">Read Full Story →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}