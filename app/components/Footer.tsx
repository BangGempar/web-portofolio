export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted">© 2026 Gempar Tahe. All rights reserved.</p>
        <a href="#hero" className="font-mono text-xs text-muted hover:text-primary transition-colors">Back to top &uarr;</a>
      </div>
    </footer>
  );
}