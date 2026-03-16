import { Link } from "react-router-dom";

const team = [
  { name: "J. Srinivas Reddy", role: "Founder & Senior Partner", qual: "FCA, DISA", exp: "25+ yrs", areas: ["Direct Tax","Transfer Pricing","Audit"], initials: "JSR", color: "from-yellow-600 to-yellow-800" },
  { name: "Priya Reddy", role: "Partner – Taxation", qual: "FCA, GST Expert", exp: "18+ yrs", areas: ["GST","Indirect Tax","Litigation"], initials: "PR", color: "from-rose-600 to-rose-900" },
  { name: "Kiran Kumar", role: "Partner – Audit", qual: "FCA, FAFD", exp: "15+ yrs", areas: ["Statutory Audit","Internal Audit","Forensic"], initials: "KK", color: "from-emerald-700 to-emerald-900" },
  { name: "Sunita Agarwal", role: "Partner – Corporate Laws", qual: "FCA, CS", exp: "12+ yrs", areas: ["Corporate Laws","FEMA","MCA"], initials: "SA", color: "from-purple-700 to-purple-900" },
];

export default function TeamSection() {
  return (
    <section className="py-20" style={{ background: "#0a1628" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-body font-semibold text-sm tracking-widest uppercase mb-3">Our People</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">Meet Our Expert Team</h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-400 font-body max-w-xl mx-auto">
            A team of 12 qualified FCAs with deep expertise across all areas of finance, taxation, audit and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member) => (
            <div key={member.name} className="card-lift group rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-500/40">
              <div className={`bg-gradient-to-br ${member.color} p-8 flex items-center justify-center`}>
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-white">{member.initials}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-white text-lg leading-tight">{member.name}</h3>
                <p className="text-yellow-400 text-sm font-body mt-1">{member.role}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 text-xs font-body">{member.qual}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-400 text-xs font-body">{member.exp}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-4">
                  {member.areas.map((area) => (
                    <span key={area} className="px-2 py-0.5 text-xs rounded bg-yellow-500/10 text-yellow-300 font-body border border-yellow-500/20">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qualifications bar */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Qualified & Certified Professionals</h3>
              <p className="text-gray-400 font-body leading-relaxed text-sm">
                Our team holds FCA, CMA, DISA, FAFD, GST Certification, CCA, and Insolvency Professional qualifications. We also collaborate with IT professionals, lawyers, chartered engineers, and ex-bankers.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["FCA","CMA","DISA","FAFD","GST Expert","CS","IP","CCA"].map((q) => (
                <span key={q} className="px-4 py-2 rounded-full border border-yellow-500/40 text-yellow-300 text-sm font-body bg-yellow-500/10">
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/team" className="btn-outline">View Full Team</Link>
        </div>
      </div>
    </section>
  );
}