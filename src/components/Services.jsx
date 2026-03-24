import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "direct-tax",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    title: "Direct Tax",
    desc: "Income tax planning, ITR filing, TDS compliance, assessments, appeals, and transfer pricing for corporates and individuals.",
  },
  {
    id: "gst",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    title: "Indirect Tax – GST",
    desc: "GST registration, monthly/annual returns, GST audits, refunds, input tax credit optimization and litigation support.",
  },
  {
    id: "audit",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Audit & Assurance",
    desc: "Statutory, internal, tax, and special audits for companies, banks, PSUs and government departments ensuring compliance.",
  },
  {
    id: "corporate",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Corporate Laws",
    desc: "Company incorporation, ROC filings, MCA compliance, LLP formation, board secretarial and SEBI regulations.",
  },
  {
    id: "accounting",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Accounting & BPO",
    desc: "Bookkeeping, payroll processing, financial statements preparation, MIS reporting and outsourced accounting services.",
  },
  {
    id: "consultancy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Management Consultancy",
    desc: "Business advisory, investment structuring, project financing, viability studies and strategic financial planning.",
  },
  {
    id: "fema",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "FEMA & International Tax",
    desc: "FEMA compliance, RBI approvals, DTAA advisory, NRI taxation, foreign investment structuring and APA services.",
  },
  {
    id: "ngo",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "NGOs & Trusts",
    desc: "12A/80G registration, FCRA compliance, Darpan registration, tax exemption advisory for charitable organizations.",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const handleClick = (serviceId) => {
    // Store selected service in sessionStorage
    sessionStorage.setItem("selectedService", serviceId);
    // Navigate to services page
    navigate("/services");
  };

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-gray-500 font-body max-w-2xl mx-auto text-lg">
            Comprehensive financial and legal services tailored for corporates,
            SMEs, startups, NRIs, and individuals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleClick(service.id)}
              className="service-card card-lift group p-6 rounded-xl border border-gray-100 bg-white hover:border-yellow-300 cursor-pointer"
            >
              <div className="service-icon mb-5" style={{ color: "#c9a84c" }}>
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-lg mb-3 group-hover:text-yellow-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 flex items-center text-yellow-700 text-sm font-semibold font-body opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/services")}
            className="btn-primary"
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}