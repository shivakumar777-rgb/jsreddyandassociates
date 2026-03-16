import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What documents do I need for ITR filing?",
    a: "You'll need Form 16 (for salaried), bank statements, investment proofs (80C, 80D), rent receipts (HRA), property documents, and any capital gains statements." },
  { q: "How long does GST registration take?",
    a: "GST registration is typically granted within 3-7 working days after submission of all required documents through the GST portal." },
  { q: "Do you handle NRI taxation matters?",
    a: "Yes, we have a dedicated NRI taxation practice covering residential status, DTAA benefits, FEMA compliance, repatriation, and Form 15CA/15CB certifications." },
  { q: "What is the fee for your services?",
    a: "Our fees depend on the nature and complexity of the assignment. We offer competitive rates tailored to client size and requirements. Contact us for a customized quote." },
  { q: "Can you assist with company incorporation?",
    a: "Absolutely. We handle end-to-end company incorporation including name reservation, DIN, DSC, MOA/AOA drafting, ROC filing and post-incorporation compliance." },
  { q: "Do you provide virtual/online services?",
    a: "Yes. We serve clients across India remotely through video consultations, secure document sharing and digital signature services." },
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name:"", email:"", phone:"", company:"", service:"", message:"" });
  };

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #112240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-yellow-400 font-body text-sm tracking-widest uppercase font-semibold mb-4">Contact Us</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            Let's Start a <span className="gold-text">Conversation</span>
          </h1>
          <p className="text-gray-300 font-body text-lg max-w-2xl">
            Reach out for expert guidance on taxation, audit, corporate laws or any financial advisory matter. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Info */}
            <div className="space-y-4">
              {[
                { icon:"📍", title:"Office Address", lines:["H.No. 1-2-3, Ameerpet,","Hyderabad – 500016, Telangana"] },
                { icon:"📞", title:"Phone Numbers", lines:["+91 98765 43210","+91 40-2356 7890"] },
                { icon:"✉️", title:"Email", lines:["info@jsreddyandassociates.com","ca@jsreddyandassociates.com"] },
                { icon:"🕐", title:"Office Hours", lines:["Mon – Fri: 9:30 AM – 6:30 PM","Saturday: 10:00 AM – 2:00 PM"] },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 card-lift">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900 font-body text-sm mb-1">{item.title}</div>
                    {item.lines.map((l) => (
                      <div key={l} className="text-gray-500 text-sm font-body">{l}</div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-100 h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-gray-500 text-sm font-body">Ameerpet, Hyderabad</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                    className="text-yellow-700 text-xs font-semibold font-body mt-1 block hover:underline">
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="font-display text-2xl font-semibold text-green-700 mb-2">Message Received!</h3>
                  <p className="text-gray-500 font-body mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 business hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-body mb-1">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-body mb-1">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                        placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-body mb-1">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                        placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 font-body mb-1">Company / Organization</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition"
                        placeholder="Your company name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1">Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm bg-white text-gray-700">
                      <option value="">Select a service</option>
                      <option>Direct Tax (Income Tax)</option>
                      <option>Indirect Tax / GST</option>
                      <option>Audit & Assurance</option>
                      <option>Corporate Laws & ROC</option>
                      <option>Accounting & BPO</option>
                      <option>Management Consultancy</option>
                      <option>FEMA & International Tax</option>
                      <option>NGO / Trust Registration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-body mb-1">Your Message *</label>
                    <textarea name="message" rows={5} required value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-body text-sm transition resize-none"
                      placeholder="Please describe your requirement in brief..." />
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message →
                  </button>
                  <p className="text-gray-400 text-xs font-body text-center">
                    We respond within 24 business hours. All information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-yellow-700 font-body font-semibold text-sm tracking-widest uppercase mb-3">FAQs</p>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto" />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-display font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all text-sm font-bold ${
                    openFaq === i ? "bg-yellow-500 text-white rotate-45" : "bg-gray-100 text-gray-500"
                  }`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-gray-50">
                    <p className="text-gray-600 font-body text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0a1628, #1a3a5c)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 font-body mb-8">
            Book a free 30-minute consultation with one of our expert CAs. No obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+91 7842243722" className="btn-primary">📞 Call Us Now</a>
            <a href="mailto:info@jsreddyandassociates.com" className="btn-outline">✉️ Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}