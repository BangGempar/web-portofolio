export function Certifications() {
  const certs = [
    { title: "MTCNA", org: "MikroTik Certified Network Associate", status: "Active 08-2025 - 2028", file: "/file/mtcna.pdf" },
    { title: "JNA", org: "BNSP (BADAN NASIONAL SERTIFIKASI PROFESI)", status: "Active 07-2024 - 2027", file: "/file/jna.pdf" }
  ];
  return (
    <section id="certs" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">SERTIFIKASI</div>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map(c => (
          <div key={c.title} className="p-6 bg-card border border-border rounded flex flex-col gap-2 border-l-4 border-l-primary">
            <h3 className="font-bold text-xl">{c.title}</h3>
            <div className="text-sm text-muted">{c.org}</div>
            <div className="mt-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-mono text-xs text-muted">{c.status}</span>
              </div>
              <a href={c.file} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-primary hover:underline flex items-center gap-1">
                [Lihat File]
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}