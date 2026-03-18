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
      <section
        className="py-16 sm:py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-4">
            Our Services
          </p>
          <h1
            className="font-display font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
          >
            Comprehensive Financial
            <br className="hidden sm:block" />
            <span className="gold-text"> & Legal Services</span>
          </h1>
          <p className="text-gray-300 font-body text-base sm:text-lg max-w-2xl leading-relaxed">
            From tax planning and audits to corporate laws and international
            taxation — we offer a full suite of CA services under one roof.
          </p>
        </div>
      </section>

      {/* Mobile scrollable tabs */}
      <section className="lg:hidden py-4 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 px-4" style={{ width: "max-content" }}>
            {allServices.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all border ${
                  active === s.id
                    ? "border-yellow-500 text-yellow-800"
                    : "bg-gray-50 border-gray-200 text-gray-600"
                }`}
                style={
                  active === s.id
                    ? { background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }
                    : {}
                }
              >
                <span>{s.icon}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main layout */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Sidebar desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm sticky top-24">
                {allServices.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-left border-b border-gray-50 transition-all ${
                      active === s.id
                        ? "bg-yellow-50 border-l-4 border-l-yellow-500"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <span className={`font-body font-medium text-sm ${
                      active === s.id ? "text-yellow-800" : "text-gray-700"
                    }`}>
                      {s.title}
                    </span>
                    {active === s.id && (
                      <span className="ml-auto text-yellow-500 text-xs">●</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content panel */}
            <div className="lg:col-span-2">
              {selected && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start sm:items-center gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center text-xl sm:text-2xl">
                      {selected.icon}
                    </div>
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                        {selected.title}
                      </h2>
                      <p className="text-gray-500 font-body text-sm mt-1">
                        {selected.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="section-divider mb-6" />

                  <h3 className="font-display font-semibold text-gray-900 text-lg mb-4">
                    What's Included:
                  </h3>

                  <ul className="space-y-3">
                    {selected.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                          style={{
                            background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                          }}
                        >
                          ✓
                        </span>
                        <span className="text-gray-600 font-body text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="btn-primary text-center">
                      Enquire About This Service →
                    </Link>
                    <Link to="/contact" className="btn-outline text-center">
                      Request a Quote
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Why Clients Choose Us
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "🏅", title: "ICAI Certified", desc: "Registered firm with qualified FCAs" },
              { icon: "⏱️", title: "Deadline Focused", desc: "Never miss a compliance date" },
              { icon: "💰", title: "Cost Effective", desc: "Premium services at fair pricing" },
              { icon: "🔐", title: "Data Security", desc: "Your information is always safe" },
            ].map((f) => (
              <div
                key={f.title}
                className="p-4 sm:p-6 rounded-xl bg-gray-50 border border-gray-100 card-lift text-center"
              >
                <div className="text-3xl sm:text-4xl mb-3">{f.icon}</div>
                <h3 className="font-display font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Need a Specific Service?
          </h2>
          <p className="text-gray-300 font-body mb-8 text-sm sm:text-base">
            Contact our team and we'll guide you to the right solution for your situation.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Talk to Our Experts →
          </Link>
        </div>
      </section>
    </div>
  );
}