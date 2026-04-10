import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const allServices = [
  {
    id: "direct-tax", title: "Direct Tax", icon: "📋",
    shortDesc: "Comprehensive income tax planning and compliance for corporates and individuals.",
    items: [
      "Income Tax Return filing for individuals, firms, LLPs and companies",
      "TDS compliance - deduction, deposit and quarterly returns",
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
    id: "gst", title: "Indirect Tax - GST", icon: "🧾",
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
    id: "audit", title: "Audit and Assurance", icon: "✅",
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
      "Company incorporation - Private Limited, Public Limited, OPC",
      "LLP formation and conversions",
      "ROC annual filings - AOC-4, MGT-7, ADT-1",
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
    id: "accounting", title: "Accounting and BPO", icon: "📊",
    shortDesc: "Outsourced bookkeeping, payroll and financial reporting services.",
    items: [
      "Day-to-day bookkeeping and ledger maintenance",
      "Monthly financial statements - P and L, Balance Sheet",
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
      "Startup advisory - funding, valuation, compliance",
      "Cash flow planning and working capital management",
      "Risk assessment and internal control review",
      "Cost optimization studies",
      "CMA data preparation for bank loans",
      "Strategic advisory for family businesses and succession planning",
    ],
  },
  {
    id: "fema", title: "FEMA and International Tax", icon: "🌏",
    shortDesc: "Foreign exchange, cross-border transactions and international taxation.",
    items: [
      "FEMA compliance advisory for inbound and outbound investments",
      "RBI approvals for ECB, ODI, FDI and other transactions",
      "NRI taxation - residential status, DTAA benefits",
      "Transfer pricing documentation and APA",
      "DTAA analysis and withholding tax advisory",
      "Foreign remittance certifications (Form 15CA/15CB)",
      "FCRA registration and compliance for NGOs",
      "Expatriate taxation and shadow payroll",
      "Representation before FEMA authorities",
    ],
  },
  {
    id: "ngo", title: "NGOs and Trusts", icon: "❤️",
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

  useEffect(() => {
    // Read from sessionStorage on first load
    const saved = sessionStorage.getItem("selectedService");
    if (saved && allServices.find((s) => s.id === saved)) {
      setActive(saved);
    }
    sessionStorage.removeItem("selectedService");

    // Listen for changeService event from Navbar
    // This fires when user clicks service while already on /services page
    const handleChange = (e) => {
      if (e.detail && allServices.find((s) => s.id === e.detail)) {
        setActive(e.detail);
        sessionStorage.removeItem("selectedService");
      }
    };

    window.addEventListener("changeService", handleChange);
    return () => window.removeEventListener("changeService", handleChange);
  }, []);

  return (
    <div>

      {/* Hero + mobile tabs — all inside one navy wrapper, no white gap */}
      <div style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ paddingTop: "90px", paddingBottom: "40px" }}
        >
          <p className="font-body text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#fbbf24" }}>
            Our Services
          </p>
          <h1
            className="font-display font-bold mb-4 text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
          >
            Comprehensive Financial
            <br className="hidden sm:block" />
            <span className="gold-text"> and Legal Services</span>
          </h1>
          <p className="font-body text-sm sm:text-base max-w-2xl leading-relaxed"
            style={{ color: "#d1d5db" }}>
            From tax planning and audits to corporate laws and international
            taxation - we offer a full suite of CA services under one roof.
          </p>
        </div>

        {/* Mobile scrollable tabs inside hero - NO white line */}
        <div
          className="lg:hidden"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "10px 0" }}
        >
          <div
            className="overflow-x-auto"
            style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            <div className="flex gap-2 px-4" style={{ width: "max-content" }}>
              {allServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActive(s.id);
                    setTimeout(() => {
                      const el = document.getElementById("service-content");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-body font-medium whitespace-nowrap transition-all"
                  style={
                    active === s.id
                      ? {
                          background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                          color: "#0a1628",
                          fontWeight: "600",
                          border: "none",
                        }
                      : {
                          background: "rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }
                  }
                >
                  <span>{s.icon}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Main layout */}
      <section className="py-8 sm:py-14 bg-gray-50" id="service-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Desktop sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div
                className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
                style={{ position: "sticky", top: "80px" }}
              >
                {allServices.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left border-b border-gray-50 transition-all hover:bg-gray-50"
                    style={
                      active === s.id
                        ? { background: "#fefce8", borderLeft: "4px solid #c9a84c" }
                        : {}
                    }
                  >
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <span
                      className="font-body font-medium text-sm"
                      style={{ color: active === s.id ? "#92400e" : "#374151" }}
                    >
                      {s.title}
                    </span>
                    {active === s.id && (
                      <span className="ml-auto text-xs" style={{ color: "#c9a84c" }}>●</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content panel */}
            <div className="lg:col-span-2">
              {selected && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: "#fefce8", border: "1px solid #fde68a" }}
                    >
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

                  <div className="section-divider mb-5" />

                  <h3 className="font-display font-semibold text-gray-900 text-base sm:text-lg mb-4">
                    What is Included:
                  </h3>

                  <ul className="space-y-3">
                    {selected.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                          style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
                        >
                          ✓
                        </span>
                        <span className="text-gray-600 font-body text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="btn-primary text-center text-sm">
                      Enquire About This Service
                    </Link>
                    <Link to="/contact" className="btn-outline text-center text-sm">
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
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Clients Choose Us
            </h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏅", title: "ICAI Certified", desc: "Registered firm with qualified FCAs" },
              { icon: "⏱️", title: "Deadline Focused", desc: "Never miss a compliance date" },
              { icon: "💰", title: "Cost Effective", desc: "Premium services at fair pricing" },
              { icon: "🔐", title: "Data Security", desc: "Your information is always safe" },
            ].map((f) => (
              <div key={f.title} className="p-4 rounded-xl bg-gray-50 border border-gray-100 card-lift text-center">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h3 className="font-display font-semibold text-gray-900 text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs font-body">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Need a Specific Service?
          </h2>
          <p className="font-body mb-6 text-sm sm:text-base" style={{ color: "#d1d5db" }}>
            Contact our team and we will guide you to the right solution.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Talk to Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}