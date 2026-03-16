import { Link } from "react-router-dom";

const partners = [
  {
    name: "J. Srinivas Reddy", role: "Founder & Senior Partner",
    qual: "FCA, DISA", exp: "25+ years", initials: "JSR",
    color: "from-yellow-600 to-yellow-800",
    bio: "J. Srinivas Reddy founded the firm in 2004 with a vision to build a client-centric CA practice. He specializes in direct taxation, transfer pricing, international tax, and complex litigation matters before ITAT and High Courts.",
    areas: ["Direct Tax", "Transfer Pricing", "ITAT Litigation", "NRI Taxation", "Corporate Tax"],
  },
  {
    name: "Priya Reddy", role: "Partner – Indirect Taxation",
    qual: "FCA, GST Expert", exp: "18+ years", initials: "PR",
    color: "from-rose-600 to-rose-900",
    bio: "Priya leads the GST and indirect taxation practice. She has extensive experience in GST implementation, audits, refunds and representation before GST authorities. Previously with a Big 4 firm, she brings a corporate consulting perspective.",
    areas: ["GST Compliance", "GST Audit", "Indirect Tax Litigation", "ITC Optimization"],
  },
  {
    name: "Kiran Kumar", role: "Partner – Audit & Assurance",
    qual: "FCA, FAFD", exp: "15+ years", initials: "KK",
    color: "from-emerald-700 to-emerald-900",
    bio: "Kiran heads the audit and assurance vertical. He is a certified forensic accountant and has conducted statutory, internal and forensic audits for banks, PSUs, listed companies and government bodies.",
    areas: ["Statutory Audit", "Bank Audit", "Internal Audit", "Forensic Audit", "Due Diligence"],
  },
  {
    name: "Sunita Agarwal", role: "Partner – Corporate Laws",
    qual: "FCA, CS", exp: "12+ years", initials: "SA",
    color: "from-purple-700 to-purple-900",
    bio: "Sunita is a qualified CA and Company Secretary specializing in corporate laws, MCA compliance, SEBI regulations and FEMA. She advises on company formation, restructuring, mergers and foreign direct investment.",
    areas: ["Corporate Laws", "MCA Compliance", "SEBI", "FEMA", "LLP & Companies"],
  },
];

const associates = [
  { name: "Rajesh Verma", role: "Senior Associate – Direct Tax", qual: "ACA" },
  { name: "Meena Krishnan", role: "Senior Associate – GST", qual: "ACA" },
  { name: "Anil Sharma", role: "Associate – Audit", qual: "CA Inter" },
  { name: "Deepika Rao", role: "Associate – Accounting", qual: "ACA, CMA" },
  { name: "Naveen Teja", role: "Associate – Corporate Laws", qual: "ACA" },
  { name: "Kavitha Reddy", role: "Associate – Tax & Compliance", qual: "ACA" },
  { name: "Siddharth Nair", role: "IT & Systems Associate", qual: "B.Tech" },
  { name: "Pooja Mehta", role: "Client Relations Manager", qual: "MBA Finance" },
];

export default function Team() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-4">Our Team</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            Meet the <span className="gold-text">Professionals</span>
          </h1>
          <p className="text-gray-300 font-body text-lg max-w-2xl">
            A qualified team of FCAs and associates with expertise spanning taxation, audit, corporate laws and international finance.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="space-y-8">
            {partners.map((p, i) => (
              <div key={p.name} className="card-lift rounded-2xl overflow-hidden border border-gray-100 grid lg:grid-cols-3">
                {/* Avatar */}
                <div className={`bg-gradient-to-br ${p.color} p-10 flex flex-col items-center justify-center text-white text-center ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <span className="text-3xl font-display font-bold">{p.initials}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="text-white/80 text-sm font-body mt-1">{p.role}</p>
                  <div className="flex gap-2 mt-3 flex-wrap justify-center">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-body">{p.qual}</span>
                    <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-body">{p.exp}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:col-span-2 flex flex-col justify-center">
                  <p className="text-gray-600 font-body leading-relaxed mb-6">{p.bio}</p>
                  <div>
                    <p className="font-semibold text-gray-900 font-body text-sm mb-3">Areas of Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {p.areas.map((a) => (
                        <span key={a} className="px-3 py-1 text-sm rounded-full border border-yellow-300 text-yellow-800 bg-yellow-50 font-body">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">The Team</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Associates & Staff</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {associates.map((a) => (
              <div key={a.name} className="card-lift bg-white rounded-xl p-5 border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold font-display text-lg"
                  style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>
                  {a.name[0]}
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base">{a.name}</h3>
                <p className="text-gray-500 text-xs font-body mt-1">{a.role}</p>
                <span className="inline-block mt-2 px-3 py-0.5 rounded-full bg-yellow-50 text-yellow-800 text-xs font-body border border-yellow-200">
                  {a.qual}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-10 text-white"
            style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-4">Our Collective Expertise</h2>
                <p className="text-gray-300 font-body leading-relaxed mb-6">
                  Together our team holds qualifications including FCA, CMA, DISA, FAFD, GST Certification, CCA, Insolvency Professional and CS. We collaborate with IT professionals, lawyers, chartered engineers, and ex-bankers to offer truly comprehensive solutions.
                </p>
                <Link to="/contact" className="btn-primary">Work With Us →</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["FCA","CMA","DISA","FAFD","GST Expert","CS","Insolvency Professional","CCA","CISA","MBA Finance"].map((q) => (
                  <span key={q} className="px-4 py-2 rounded-full border border-yellow-500/40 text-yellow-300 text-sm font-body bg-yellow-500/10">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Join Our Growing Team</h2>
          <p className="text-gray-300 font-body mb-8">
            We're always looking for talented CA professionals. If you're passionate about excellence in finance, we'd love to hear from you.
          </p>
          <Link to="/contact" className="btn-primary inline-block">View Openings →</Link>
        </div>
      </section>
    </div>
  );
}