import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-background/90 backdrop-blur-sm border-b border-border z-50 flex items-center px-6 md:px-16">
      <div className="flex-1 font-mono font-semibold text-primary">Gempar Tahe // Network Engineer</div>
      <nav className="hidden md:flex gap-6 text-sm font-mono text-white">
        <Link href="#intro" className="hover:text-primary transition-colors">Intro</Link>
        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
        <Link href="#certs" className="hover:text-primary transition-colors">Certs</Link>
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
      </nav>
      <Link href="#contact" className="ml-8 px-4 py-2 bg-primary text-white font-mono text-sm rounded hover:bg-primary-hover transition-colors">Get in Touch</Link>
    </header>
  );
}