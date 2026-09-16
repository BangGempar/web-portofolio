import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">05 // CONTACT</div>
      <div className="p-8 bg-card border border-border rounded flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Let's work together.</h2>
          <p className="text-muted">Available for freelance opportunities and full-time roles in network engineering.</p>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-muted"><Mail size={18} className="text-primary"/><span className="font-mono text-sm">gempar.tahe@the.network.id</span></div>
            <div className="flex items-center gap-3 text-muted"><MapPin size={18} className="text-primary"/><span className="font-mono text-sm">Makassar, Sulawesi Selatan, Indonesia</span></div>
          </div>
        </div>
        <form className="flex-1 flex flex-col gap-4">
          <input type="text" placeholder="Name" className="w-full bg-background border border-border rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors" />
          <input type="email" placeholder="Email" className="w-full bg-background border border-border rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors" />
          <textarea placeholder="Message" rows={4} className="w-full bg-background border border-border rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors"></textarea>
          <button type="submit" className="px-6 py-3 bg-primary text-white font-mono text-sm rounded hover:bg-primary-hover transition-colors self-start mt-2">Send Message</button>
        </form>
      </div>
    </section>
  );
}