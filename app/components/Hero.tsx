// Icons replaced with text for simplicity
import Link from "next/link";

export function Hero() {
  return (
    <section id="intro" className="flex flex-col md:flex-row gap-12 items-start justify-between min-h-[60vh] pt-12">
      <div className="flex-1 flex flex-col gap-6 max-w-2xl">
        <div className="font-mono text-primary text-sm">INTRO</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Hi, Saya Gempar.</h1>
        <p className="text-xl text-white leading-relaxed">
          Network Engineer & Systems Architect based in Makassar, Indonesia. Specializing in enterprise networks, automation, and security.
        </p>
        <div className="flex items-center gap-6 mt-4 font-mono text-sm">
          <Link href="#contact" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-hover transition-colors flex items-center gap-2">Hubungi Saya &rarr;</Link>
          <div className="flex gap-4">
            <Link href="https://linkedin.com" target="_blank" className="text-muted hover:text-primary transition-colors">LN</Link>
            <Link href="https://github.com" target="_blank" className="text-muted hover:text-primary transition-colors">GH</Link>
            <Link href="https://twitter.com" target="_blank" className="text-muted hover:text-primary transition-colors">TW</Link>
          </div>
        </div>
        <div className="mt-8 p-4 bg-card rounded border border-border flex flex-col gap-2 font-mono text-sm text-muted">
          <div className="flex justify-between"><span>Core_Cert:</span><span className="text-foreground">MTCNA</span></div>
          <div className="flex justify-between"><span>Base_Loc:</span><span className="text-foreground">Makassar, ID</span></div>
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