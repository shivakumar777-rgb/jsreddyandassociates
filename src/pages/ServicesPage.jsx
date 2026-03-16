import { useState } from "react";
import { Link } from "react-router-dom";

const allServices = [
  {
    id: "direct-tax", title: "Direct Tax", icon: "📋",
    shortDesc: "Comprehensive income tax planning and compliance for corporates and individuals.",
    items: [
      "Income Tax Return filing for individuals, firms, LLPs and companies",
      "TDS compliance — deduction, deposit and quarterly returns",
      "Advance tax computation and planning",
      "Tax assessment representation before Assessing Officer",
      "CIT(A), DRP and ITAT appeals and litigation",
      "Transfer Pricing documentation, TP study, Master File and CbCR",
      "Advance Pricing Agreements (APA) and Safe Harbour applications",
      "Corporate tax planning and optimization strategies",
      "Tax audits under Section 44AB",
      "NRI and HNI tax planning, DTAA advisory",
      "Black Money Act and Benami Transactions compliance",
      "PMLA advisory and internal controls",
    ],
  },
  {
    id: "gst", title: "Indirect Tax – GST", icon: "🧾",
    shortDesc: "End-to-end GST compliance, refunds, audits and litigation support.",
    items: [
      "GST registration for all types of entities",
      "Monthly, quarterly and annual GST return filing (GSTR-1, 3B, 9, 9C)",
      "Input Tax Credit (ITC) reconciliation and optimization",
      "GST audit and departmental representation",
      "GST refund processing for exports and inverted duty structure",
      "E-way bill compliance and advisory",
      "GST impact analysis for new businesses",
      "Advance rulings and clarifications",
      "GST litigation support at AAR, AAAR and High Courts",
      "Annual GST health check and compliance review",
    ],
  },
  {
    id: "audit", title: "Audit & Assurance", icon: "✅",
    shortDesc: "Independent, objective audit services trusted by corporates, banks and PSUs.",
    items: [
      "Statutory audit of companies under Companies Act 2013",
      "Tax audit under Income Tax Act",
      "Internal audit and management audit",
      "Bank branch audit and concurrent audit",
      "PSU audit and government department audit",
      "Stock audit, revenue audit and special purpose audits",
      "Forensic audit and fraud investigation",
      "Due diligence for mergers, acquisitions and investments",
      "RERA audit for real estate developers",
      "Certification and verification services",
    ],
  },
  {
    id: "corporate", title: "Corporate Laws", icon: "🏢",
    shortDesc: "Company formation, MCA compliance, and corporate governance advisory.",
    items: [
      "Company incorporation — Private Limited, Public Limited, OPC",
      "LLP formation and conversions",
      "ROC annual filings — AOC-4, MGT-7, ADT-1",
      "Board secretarial services and minutes preparation",
      "Director KYC, DIN and DSC services",
      "Charge creation and satisfaction with MCA",
      "SEBI regulations and compliance advisory",
      "Winding up and strike-off of companies",
      "Foreign subsidiary formation and FEMA compliance",
      "NCLT matters and restructuring advisory",
    ],
  },
  {
    id: "accounting", title: "Accounting & BPO", icon: "📊",
    shortDesc: "Outsourced bookkeeping, payroll and financial reporting services.",
    items: [
      "Day-to-day bookkeeping and ledger maintenance",
      "Monthly financial statements — P&L, Balance Sheet",
      "Accounts payable and receivable management",
      "Payroll processing including PF, ESI, PT deductions",
      "Management Information System (MIS) reports",
      "Bank reconciliation statements",
      "Fixed asset register maintenance",
      "ERP and accounting software implementation support",
      "Year-end closing and finalization of accounts",
      "Virtual CFO services for startups and SMEs",
    ],
  },
  {
    id: "consultancy", title: "Management Consultancy", icon: "💼",
    shortDesc: "Strategic advisory to help businesses grow, invest, and manage risk.",
    items: [
      "Business plan preparation and feasibility studies",
      "Project financing and term loan documentation",
      "Investment structuring for optimal tax efficiency",
      "Organizational restructuring and due diligence",
      "Startup advisory — funding, valuation, compliance",
      "Cash flow planning and working capital management",
      "Risk assessment and internal control review",
      "Cost optimization studies",
      "CMA data preparation for bank loans",
      "Strategic advisory for family businesses and succession planning",
    ],
  },
  {
    id: "fema", title: "FEMA & International Tax", icon: "🌏",
    shortDesc: "Foreign exchange, cross-border transactions and international taxation.",
    items: [
      "FEMA compliance advisory for inbound and outbound investments",
      "RBI approvals for ECB, ODI, FDI and other transactions",
      "NRI taxation — residential status, DTAA benefits",
      "Transfer pricing documentation and APA",
      "DTAA analysis and withholding tax advisory",
      "Foreign remittance certifications (Form 15CA/15CB)",
      "FCRA registration and compliance for NGOs",
      "Expatriate taxation and shadow payroll",
      "Representation before FEMA authorities",
    ],
  },
  {
    id: "ngo", title: "NGOs & Trusts", icon: "❤️",
    shortDesc: "Tax and compliance support for charitable organizations and trusts.",
    items: [
      "Trust and society formation and registration",
      "Section 12A and 12AB registration for tax exemption",
      "Section 80G registration for donor deductions",
      "FCRA registration and annual returns",
      "Darpan portal registration",
      "Annual compliance returns for NGOs",
      "Audit of trusts and charitable institutions",
      "Advisory on taxability of receipts and grants",
      "CSR compliance advisory for corporates",
    ],
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState("direct-tax");
  const selected = allServices.find((s) => s.id === active);

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-4">Our Services</p>
          <h1 className="font-display text-5xl font-bold mb-4 leading-tight">
            Comprehensive Financial<br />
            <span className="gold-text">& Legal Services</span>
          </h1>
          <p className="text-gray-300 font-body text-lg max-w-2xl">
            From tax planning and audits to corporate laws and international taxation — we offer a full suite of CA services under one roof.
          </p>
        </div>
      </section>

      {/* Mobile service tabs */}
      <section className="lg:hidden py-6 bg-white border-b border-gray-100 overflow-x-auto">
        <div className="flex gap-2 px-4 min-w-max">
          {allServices.map((s) => (
            <button key={s.id} onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all ${
                active === s.id
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-yellow-50"
              }`}>
              <span>{s.icon}</span> {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* Services layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Sidebar — desktop only */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm sticky top-24">
                {allServices.map((s) => (
                  <button key={s.id} onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-left border-b border-gray-50 transition-all ${
                      active === s.id
                        ? "bg-yellow-50 border-l-4 border-l-yellow-500"
                        : "hover:bg-gray-50"
                    }`}>
                    <span className="text-xl">{s.icon}</span>
                    <span className={`font-body font-medium text-sm ${active === s.id ? "text-yellow-800" : "text-gray-700"}`}>
                      {s.title}
                    </span>
                    {active === s.id && <span className="ml-auto text-yellow-500 text-xs">●</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              {selected && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center text-2xl">
                      {selected.icon}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-bold text-gray-900">{selected.title}</h2>
                      <p className="text-gray-500 font-body text-sm mt-1">{selected.shortDesc}</p>
                    </div>
                  </div>

                  <div className="section-divider mb-6" />

                  <h3 className="font-display font-semibold text-gray-900 text-lg mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {selected.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                          style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}>
                          ✓
                        </span>
                        <span className="text-gray-600 font-body text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                    <Link to="/contact" className="btn-primary">Enquire About This Service →</Link>
                    <Link to="/contact" className="btn-outline">Request a Quote</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Why Clients Choose Us</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏅", title: "ICAI Certified", desc: "Registered firm with qualified FCAs" },
              { icon: "⏱️", title: "Deadline Focused", desc: "Never miss a compliance date" },
              { icon: "💰", title: "Cost Effective", desc: "Premium services at fair pricing" },
              { icon: "🔐", title: "Data Security", desc: "Your information is always safe" },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-xl bg-gray-50 border border-gray-100 card-lift text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-display font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-gray-300 font-body mb-8">
            Contact our team and we'll guide you to the right solution for your situation.
          </p>
          <Link to="/contact" className="btn-primary inline-block">Talk to Our Experts →</Link>
        </div>
      </section>
    </div>
  );
}