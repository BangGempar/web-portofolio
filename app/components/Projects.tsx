import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    { title: "Enterprise & Campus Network Architecture", desc: "Designed scalable campus LAN with core-dist-access hierarchy." },
    { title: "VLAN-based IP Series Network", desc: "Segmented corporate network with strict inter-VLAN routing policies." },
    { title: "Multi-Cloud Convergence", desc: "Established secure IPsec tunnels between AWS, Azure, and on-prem." }
  ];
  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">04 // RECENT PROJECTS</div>
      <div className="grid gap-6">
        {projects.map(p => (
          <div key={p.title} className="p-6 bg-card border border-border rounded group flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/30 transition-colors">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted">{p.desc}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded font-mono text-sm hover:text-primary hover:border-primary transition-colors">
              View Project <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}