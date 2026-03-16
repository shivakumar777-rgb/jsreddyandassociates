import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name:"", email:"", phone:"", service:"", message:"" });
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* Info */}
          <div>
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Let's Discuss Your Requirements</h2>
            <div className="section-divider mb-6" />
            <p className="text-gray-600 font-body leading-relaxed mb-10">
              Whether you need tax planning advice, audit support, or help with regulatory compliance — our team is ready to assist. Reach out for a free initial consultation.
            </p>
            <div className="space-y-4">
              {[
                { icon:"📍", title:"Office Address", value:"H.No. 1-2-3, Ameerpet, Hyderabad – 500016, Telangana" },
                { icon:"📞", title:"Phone", value:"+91 78422 43722 | +91 86880 24824" },
                { icon:"✉️", title:"Email", value:"info@jsreddyandassociates.com" },
                { icon:"🕐", title:"Office Hours", value:"Mon–Sat: 9:30 AM – 6:30 PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-white border border-gray-100 card-lift">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm font-body">{item.title}</div>
                    <div className="text-gray-600 text-sm font-body mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-display text-xl font-semibold text-green-700">Thank you!</p>
                <p className="text-gray-500 font-body mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1">Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                      placeholder="Full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1">Email *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                      placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                      placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1">Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm bg-white text-gray-700">
                      <option value="">Select service</option>
                      <option>Direct Tax</option>
                      <option>Indirect Tax / GST</option>
                      <option>Audit & Assurance</option>
                      <option>Corporate Laws</option>
                      <option>Accounting & BPO</option>
                      <option>Management Consultancy</option>
                      <option>FEMA & International Tax</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 font-body mb-1">Your Message</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition resize-none"
                    placeholder="Briefly describe your requirement..." />
                </div>
                <button type="submit" className="btn-primary w-full text-center">Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}