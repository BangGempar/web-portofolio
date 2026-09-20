import { ExternalLink } from "lucide-react";
import Image from "next/image";
import ciscoImg from "./picture/image.png";

export function Projects() {
  const projects = [
    { title: "SIMULASI JARINGAN VLAN KANTOR (CISCO)", desc: "Konfigurasi sub-interface, tiga VLAN, DHCP server, dan static routing.", image: ciscoImg, link: "/project_vlan_kantor.pdf" },
    { title: "VLAN-based IP Series Network", desc: "Segmented corporate network with strict inter-VLAN routing policies." },
    { title: "Multi-Cloud Convergence", desc: "Established secure IPsec tunnels between AWS, Azure, and on-prem." }
  ];
  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">PROJECTS</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="flex flex-col border border-border rounded overflow-hidden hover:border-primary/50 transition-colors">
            <div className="relative bg-card h-48 border-b border-border flex items-center justify-center">
              {p.image ? (
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              ) : (
                <span className="font-mono text-muted opacity-50 text-xs">Project Preview</span>
              )}
            </div>
            <div className="bg-white p-6 flex flex-col flex-1 text-black">
              <h3 className="font-bold text-lg mb-2 leading-tight">{p.title}</h3>
              <p className="text-sm text-gray-700 mb-6 flex-1">{p.desc}</p>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-sm hover:text-primary transition-colors self-start">
                  View Project <ExternalLink size={14} />
                </a>
              ) : (
                <button className="flex items-center gap-2 font-mono text-sm hover:text-primary transition-colors self-start">
                  View Project <ExternalLink size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
