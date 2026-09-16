// Icons replaced with text for simplicity
import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section id="intro" className="flex flex-col md:flex-row gap-12 items-stretch justify-between min-h-[60vh] pt-12">
      <div className="flex-1 flex flex-col max-w-2xl">
        <div className="flex flex-col gap-6">
          <div className="font-mono text-primary text-sm">INTRO</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Hi, Saya Gempar.</h1>
          <p className="text-xl text-white leading-relaxed">
            Network Engineer & Systems Architect based in Makassar, Indonesia. Specializing in enterprise networks, automation, and security.
          </p>
          <div className="flex items-center gap-6 mt-4 font-mono text-sm">
            <Link href="#contact" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-hover transition-colors flex items-center gap-2">Hubungi Saya &rarr;</Link>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://github.com" target="_blank" className="text-muted hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://Instagram.com" target="_blank" className="text-muted hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-8 flex gap-8 font-mono text-sm text-muted">
          <div className="flex gap-2"><span>Sertifikasi:</span><span className="text-white">MTCNA</span></div>
          <div className="flex gap-2"><span>Lokasi:</span><span className="text-white">Makassar, ID</span></div>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className="aspect-square max-w-md mx-auto md:ml-auto bg-card rounded border border-border overflow-hidden relative group">
           <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
           <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" alt="Server Room" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}