export default function WhatsAppButton() {
  const phoneNumber = "917842243722";
  const message = "Hello! I would like to enquire about your CA services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 group"
        title="Chat with us on WhatsApp"
      >
        <span className="hidden group-hover:flex items-center bg-white text-gray-800 text-sm px-4 py-2 rounded-full shadow-lg border border-gray-100 whitespace-nowrap">
          Chat with us!
        </span>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
        >
          <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.338.632 4.614 1.83 6.608L2.667 29.333l6.938-1.795A13.276 13.276 0 0016.004 29.333C23.37 29.333 29.333 23.362 29.333 16S23.37 2.667 16.004 2.667zm0 2.4c5.923 0 10.929 5.006 10.929 10.933S21.927 26.933 16.004 26.933a10.9 10.9 0 01-5.564-1.527l-.398-.24-4.118 1.066 1.1-3.99-.261-.41A10.88 10.88 0 015.075 16c0-5.927 5.002-10.933 10.929-10.933zm-3.405 5.6c-.234 0-.614.088-.937.44-.322.352-1.229 1.2-1.229 2.927s1.258 3.394 1.434 3.628c.176.234 2.427 3.863 5.988 5.267 2.97 1.17 3.564.937 4.207.879.643-.059 2.076-.849 2.369-1.668.293-.82.293-1.522.205-1.668-.088-.146-.322-.234-.673-.41-.352-.176-2.077-1.024-2.399-1.14-.322-.117-.556-.176-.79.176-.233.352-.907 1.14-1.112 1.374-.205.234-.41.264-.761.088-.352-.176-1.484-.547-2.828-1.746-1.044-.933-1.75-2.083-1.955-2.435-.205-.352-.022-.542.154-.718.158-.158.352-.41.527-.615.176-.205.234-.352.352-.586.117-.234.059-.44-.029-.615-.088-.176-.773-1.912-1.073-2.61-.274-.644-.558-.556-.79-.566l-.673-.012z"/>
          </svg>
        </div>
      </a>
      <span
        className="absolute bottom-0 right-0 w-14 h-14 rounded-full animate-ping opacity-20 pointer-events-none"
        style={{ background: "#25d366" }}
      />
    </div>
  );
}