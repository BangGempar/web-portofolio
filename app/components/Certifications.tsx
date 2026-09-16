export function Certifications() {
  const certs = [
    { title: "MTCNA", org: "MikroTik Certified Network Associate", status: "Active" },
    { title: "Java Foundations", org: "Oracle Academy", status: "Completed" }
  ];
  return (
    <section id="certs" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">03 // CERTIFICATIONS</div>
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map(c => (
          <div key={c.title} className="p-6 bg-card border border-border rounded flex flex-col gap-2 border-l-4 border-l-primary">
            <h3 className="font-bold text-xl">{c.title}</h3>
            <div className="text-sm text-muted">{c.org}</div>
            <div className="mt-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="font-mono text-xs text-muted">{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}