import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Direct Tax", "GST", "Corporate Laws", "Audit", "FEMA", "Compliance"];

const posts = [
  { date: "March 10, 2026", category: "Direct Tax", readTime: "7 min read",
    title: "Key Changes in Income Tax for FY 2025-26 You Must Know",
    desc: "The Finance Act introduced several amendments affecting individual taxpayers, corporates and NRIs — new tax slabs, revised deductions, and updated TDS rates." },
  { date: "February 22, 2026", category: "GST", readTime: "5 min read",
    title: "GST Audit: Common Mistakes and How to Avoid Them",
    desc: "Filing errors and GSTR-2A mismatches are the top reasons businesses receive GST audit notices. Learn how to review your returns and stay audit-ready." },
  { date: "February 8, 2026", category: "Corporate Laws", readTime: "8 min read",
    title: "LLP vs Private Limited Company: Which is Right for Your Business?",
    desc: "A structured comparison of compliance burden, tax treatment, liability protection, and operational flexibility to help entrepreneurs choose wisely." },
  { date: "January 25, 2026", category: "FEMA", readTime: "10 min read",
    title: "NRI Tax Guide 2025-26: Residential Status, DTAA & Remittances",
    desc: "Determining residential status, understanding DTAA benefits, taxability of foreign income, and key compliance requirements for Non-Resident Indians." },
  { date: "January 12, 2026", category: "Audit", readTime: "6 min read",
    title: "Statutory Audit Checklist for Private Limited Companies",
    desc: "A practical checklist for finance teams and auditors covering documentation, schedules, provisions and disclosures for a smooth statutory audit." },
  { date: "December 28, 2025", category: "Compliance", readTime: "4 min read",
    title: "Annual Compliance Calendar 2026: Key Dates for Every Business",
    desc: "A month-by-month compliance calendar covering ITR, GST returns, ROC filings, TDS deposits and other key regulatory due dates." },
  { date: "December 10, 2025", category: "Direct Tax", readTime: "9 min read",
    title: "Transfer Pricing in India: Documentation Requirements & Penalties",
    desc: "Understanding Form 3CEB, master file obligations, CbCR reporting thresholds and penalties for non-compliance in transfer pricing documentation." },
  { date: "November 20, 2025", category: "GST", readTime: "7 min read",
    title: "Input Tax Credit: Conditions, Reversals and Recent Amendments",
    desc: "A detailed guide to ITC eligibility, blocked credits under Section 17(5), reversal rules, and how recent GST council decisions impact your ITC claims." },
  { date: "November 5, 2025", category: "Corporate Laws", readTime: "5 min read",
    title: "Annual Filing for Companies: AOC-4 and MGT-7 — A Complete Guide",
    desc: "Step-by-step guidance on preparing and filing annual returns with the ROC, including documents required, fee structure and late filing penalties." },
];

const tagColors = {
  "Direct Tax": "bg-blue-100 text-blue-800",
  "GST": "bg-green-100 text-green-800",
  "Corporate Laws": "bg-purple-100 text-purple-800",
  "Audit": "bg-orange-100 text-orange-800",
  "FEMA": "bg-teal-100 text-teal-800",
  "Compliance": "bg-red-100 text-red-800",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-4">Knowledge Hub</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            Articles & <span className="gold-text">Tax Updates</span>
          </h1>
          <p className="text-gray-300 font-body text-lg max-w-2xl">
            Stay informed with our expert articles on income tax, GST, corporate laws, FEMA and compliance best practices.
          </p>
          {/* Search */}
          <div className="mt-8 max-w-lg">
            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
              <span className="text-gray-400">🔍</span>
              <input type="text" placeholder="Search articles..."
                value={search} onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 font-body text-sm focus:outline-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-yellow-500 text-white shadow-md"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-yellow-400 hover:text-yellow-700"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 font-body">
              No articles found. Try a different search or category.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((post, i) => (
                <div key={i} className="card-lift group rounded-xl overflow-hidden bg-white border border-gray-100">
                  <div className="h-36 flex items-end p-5"
                    style={{ background: `linear-gradient(135deg, #0a1628, #${["1a2f4e","1e3a5f","162b45","0d2035"][i % 4]})` }}>
                    <span className={`px-3 py-1 rounded-full text-xs font-body font-semibold ${tagColors[post.category] || "bg-yellow-100 text-yellow-800"}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-xs font-body">{post.date}</span>
                      <span className="text-gray-400 text-xs font-body">{post.readTime}</span>
                    </div>
                    <h3 className="font-display font-semibold text-gray-900 text-lg leading-snug mb-3 group-hover:text-yellow-800 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-body leading-relaxed mb-4 line-clamp-3">
                      {post.desc}
                    </p>
                    <button className="text-yellow-700 text-sm font-semibold font-body hover:text-yellow-900 transition-colors">
                      Read Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-3">Never Miss a Tax Update</h2>
          <p className="text-gray-300 font-body mb-8">
            Subscribe for fortnightly updates on GST circulars, income tax notifications and compliance reminders.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 font-body text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <button className="btn-primary whitespace-nowrap">Subscribe →</button>
          </div>
        </div>
      </section>
    </div>
  );
}