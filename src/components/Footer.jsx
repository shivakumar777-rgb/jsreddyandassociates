import { Link } from "react-router-dom";

const services = ["Direct Tax","Indirect Tax – GST","Audit & Assurance","Corporate Laws","Accounting & BPO","FEMA & International Tax","Management Consultancy","NGOs & Trusts"];
const quickLinks = [
  { label:"Home", path:"/" },
  { label:"About Us", path:"/about" },
  { label:"Our Team", path:"/team" },
  { label:"Blog", path:"/blog" },
  { label:"Contact Us", path:"/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060e1c" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="text-xl font-display font-bold text-white">JS Reddy & Associates</div>
            <div className="text-yellow-500 text-xs font-body tracking-widest uppercase mt-1 mb-4">Chartered Accountants</div>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-5">
              A trusted CA firm in Hyderabad providing comprehensive tax, audit, and financial advisory services since 2004.
            </p>
            <div className="space-y-2 text-sm font-body text-gray-400">
              <div className="flex items-start gap-2"><span>📍</span><span>H.No. 1-2-3, Ameerpet,<br/>Hyderabad – 500016</span></div>
              <div className="flex items-center gap-2"><span>📞</span><span>+91 7842243722</span></div>
              <div className="flex items-center gap-2"><span>✉️</span><span>info@jsreddyandassociates.com</span></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 hover:text-yellow-400 text-sm font-body transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-gray-400 hover:text-yellow-400 text-sm font-body transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-display font-semibold text-lg mb-5">Stay Updated</h4>
            <p className="text-gray-400 text-sm font-body mb-4">
              Get the latest tax updates and compliance reminders directly in your inbox.
            </p>
            <input type="email" placeholder="sshivakumark3@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm font-body focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-3" />
            <button className="btn-primary w-full text-center text-sm">Subscribe →</button>
            <div className="mt-5">
              <p className="text-gray-500 text-xs font-body mb-3 uppercase tracking-wide">Connect With Us</p>
              <div className="flex gap-3">
                {["in","f","t","y"].map((s) => (
                  <a key={s} href="#"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-500/50 transition-all text-sm font-bold">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm font-body">© {new Date().getFullYear()} JS Reddy & Associates. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy","Terms of Service","Disclaimer"].map((l) => (
              <Link key={l} to="#" className="text-gray-600 hover:text-yellow-500 text-sm font-body transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}