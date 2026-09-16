export function About() {
  const domains = ["Enterprise Networks", "Automation", "Security", "Cloud", "SDNF"];
  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="font-mono text-primary text-sm">01 // ABOUT ME</div>
      <h2 className="text-3xl font-bold">Passionate Network Engineer & Systems Architect</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-white leading-relaxed">
          Designing, implementing, and securing robust network infrastructure. With a deep understanding of core networking protocols and emerging cloud technologies, I build resilient systems that scale.
        </p>
        <div className="flex flex-wrap gap-3 content-start">
          {domains.map(d => (
            <span key={d} className="px-3 py-1 bg-card border border-border rounded font-mono text-sm text-muted">{d}</span>
          ))}
        </div>
      </div>
    </section>
  );
}