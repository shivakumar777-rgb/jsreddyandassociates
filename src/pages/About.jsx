import { Link } from "react-router-dom";

const values = [
  { icon: "🎯", title: "Integrity", desc: "We operate with transparency and honesty in every client engagement, maintaining the highest ethical standards." },
  { icon: "💡", title: "Expertise", desc: "Our team of qualified FCAs brings deep technical knowledge across all domains of finance and law." },
  { icon: "⚡", title: "Responsiveness", desc: "We understand compliance deadlines are critical. Prompt, reliable service is our commitment." },
  { icon: "🔒", title: "Confidentiality", desc: "All client data is handled with the utmost discretion and strict data security protocols." },
  { icon: "📈", title: "Value Addition", desc: "Beyond compliance, we help clients discover savings, efficiencies and growth opportunities." },
  { icon: "🤝", title: "Long-term Partnership", desc: "We build lasting relationships — understanding your business deeply to advise proactively." },
];

const milestones = [
  { year: "2004", title: "Firm Founded", desc: "JS Reddy & Associates established in Hyderabad by J. Srinivas Reddy, FCA." },
  { year: "2008", title: "Expanded to Corporate Laws", desc: "Added dedicated corporate secretarial and MCA compliance practice." },
  { year: "2012", title: "100 Clients Milestone", desc: "Crossed 100 active clients across tax, audit, and accounting verticals." },
  { year: "2017", title: "GST Practice Launch", desc: "Set up a full GST advisory and compliance team as India transitioned to GST." },
  { year: "2020", title: "International Tax Practice", desc: "Launched FEMA, transfer pricing and NRI taxation services." },
  { year: "2024", title: "500+ Clients", desc: "Proud to serve over 500 clients across Telangana and Andhra Pradesh." },
];

export default function About() {
  return (
    <div style={{ marginTop: "-1px" }}>

      {/* Hero */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #112240)", paddingTop: "100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-4">
              About Us
            </p>
            <h1
              className="font-display font-bold mb-6 leading-tight text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Building Trust Through
              <br />
              <span className="gold-text">Financial Excellence</span>
            </h1>
            <p className="text-gray-300 font-body text-lg leading-relaxed">
              For over two decades, JS Reddy & Associates has been a cornerstone
              of financial advisory in Hyderabad — helping businesses, individuals,
              and institutions navigate the complex landscape of taxation, audit,
              and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                From a Single Office to a Trusted Institution
              </h2>
              <div className="section-divider mb-6" />
              <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  Founded in 2004 by J. Srinivas Reddy, a Fellow Chartered
                  Accountant with a vision to provide world-class financial
                  services to businesses in Hyderabad, JS Reddy & Associates has
                  grown steadily into one of the most respected CA firms in
                  Telangana.
                </p>
                <p>
                  What began as a solo practice focused on income tax has evolved
                  into a full-service firm with 12 qualified partners and
                  associates, covering everything from direct and indirect
                  taxation to corporate laws, audit, international taxation and
                  management consultancy.
                </p>
                <p>
                  We have served PSUs, banks, startups, government departments,
                  foreign subsidiaries, NGOs and individual HNIs — bringing the
                  same level of commitment and precision to every engagement.
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-10 text-white"
              style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}
            >
              <h3 className="font-display text-2xl font-bold mb-6">
                Our Mission & Vision
              </h3>
              <div className="space-y-5">
                <div className="p-5 rounded-lg bg-white/10 border border-white/10">
                  <div className="text-yellow-400 font-semibold font-body mb-2">
                    🎯 Mission
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    To deliver accurate, timely, and value-added financial
                    services that empower our clients to achieve compliance and
                    business goals with confidence.
                  </p>
                </div>
                <div className="p-5 rounded-lg bg-white/10 border border-white/10">
                  <div className="text-yellow-400 font-semibold font-body mb-2">
                    🌟 Vision
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    To be the most trusted Chartered Accountancy firm in
                    Telangana, known for professional integrity, technical
                    excellence and long-term client partnerships.
                  </p>
                </div>
                <div className="p-5 rounded-lg bg-white/10 border border-white/10">
                  <div className="text-yellow-400 font-semibold font-body mb-2">
                    ⭐ Core Belief
                  </div>
                  <p className="text-gray-300 text-sm font-body leading-relaxed">
                    Every client deserves personalised attention, transparent
                    communication, and solutions that truly add value — not just
                    compliance checkboxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Our Core Values
            </p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-lift p-6 bg-white rounded-xl border border-gray-100"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-gray-900 text-xl mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
                Who We Serve
              </p>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                Clients Across Every Sector
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                We work with a diverse range of clients — from large corporates
                and PSUs to small startups and individual professionals. Our
                approach adapts to every client's size, sector, and complexity.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🏢", label: "Corporates & Pvt Ltd" },
                  { icon: "🏦", label: "Banks & NBFCs" },
                  { icon: "🏗️", label: "PSUs & Govt Depts" },
                  { icon: "🚀", label: "Startups & SMEs" },
                  { icon: "🌍", label: "NRIs & HNIs" },
                  { icon: "🌐", label: "Foreign Subsidiaries" },
                  { icon: "❤️", label: "NGOs & Trusts" },
                  { icon: "👨‍⚕️", label: "Professionals" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <span className="text-xl">{c.icon}</span>
                    <span className="text-gray-700 font-body text-sm font-medium">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Direct Tax Clients", percent: 95 },
                { label: "GST Compliance", percent: 90 },
                { label: "Audit & Assurance", percent: 85 },
                { label: "Corporate Laws", percent: 80 },
                { label: "International Tax", percent: 70 },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-body text-sm font-medium">
                      {bar.label}
                    </span>
                    <span className="text-yellow-700 font-body text-sm font-semibold">
                      {bar.percent}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${bar.percent}%`,
                        background: "linear-gradient(90deg, #c9a84c, #e8c97a)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Our Journey
            </p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Milestones Over the Years
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="space-y-5">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex gap-6 items-start card-lift p-5 rounded-xl bg-white border border-gray-100"
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
                >
                  {m.year}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-gray-900 text-lg">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 font-body text-sm mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 font-body mb-8">
            Reach out to our team for a free consultation and discover how we
            can help your business grow with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us Today →
            </Link>
            <Link to="/services" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}