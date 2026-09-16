// Icons replaced with text for simplicity
import Link from "next/link";

export function Hero() {
  return (
    <section id="intro" className="flex flex-col md:flex-row gap-12 items-stretch justify-between min-h-[60vh] pt-12">
      <div className="flex-1 flex flex-col max-w-2xl">
        <div className="flex flex-col gap-6">
          <div className="font-mono text-primary text-sm">TENTANG</div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight animate-typing pr-2 w-fit">Hi, Saya Gempar.</h1>
          <p className="text-xl text-white leading-relaxed">
            Junior Network Engineer berbasis di Makassar, Indonesia. Lulusan S1 Informatika dengan sertifikasi MTCNA, berfokus pada desain jaringan, konfigurasi dasar, dan pemecahan masalah jaringan.
          </p>
          <div className="flex items-center gap-6 mt-4 font-mono text-sm">
            <Link href="#contact" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-hover transition-colors flex items-center gap-2">Hubungi Saya &rarr;</Link>
            <div className="flex gap-4">
              <Link href="https://linkedin.com" target="_blank" className="text-muted hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
              <Link href="https://github.com" target="_blank" className="text-muted hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </Link>
              <Link href="https://Instagram.com" target="_blank" className="text-muted hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link href="https://wa.me/62882020409044" target="_blank" className="text-muted hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
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