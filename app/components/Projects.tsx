import { ExternalLink } from "lucide-react";
import Image from "next/image";
import ciscoImg from "./picture/image.png";
import ospfImg from "./picture/image copy.png";
import subnetImg from "./picture/image copy 2.png";

export function Projects() {
  const projects = [
    { title: "SIMULASI JARINGAN VLAN KANTOR (CISCO)", desc: "Konfigurasi sub-interface, tiga VLAN, DHCP server, dan static routing.", image: ciscoImg, link: "/project_vlan_kantor.pdf", tech: ["Cisco", "Packet Tracer", "VLAN", "Routing"] },
    { title: "SIMULASI JARINGAN MULTI KANTOR DENGAN ROUTING DINAMIS OSPF (CISCO)", desc: "Menghubungkan tiga LAN berbeda menggunakan routing dinamis OSPF, serta melakukan konfigurasi DHCP server, DNS server, web server, dan koneksi wireless.", image: ospfImg, link: "/file/LAPORAN GEMPAR PERKASA TAHIR.pdf", tech: ["Cisco"] },
    { title: "IPv4 SUBNET KALKULATOR", desc: "alat bantu untuk menghitung pembagian jaringan IP secara otomatis, termasuk menentukan network address, broadcast address, rentang host, jumlah host yang tersedia, serta konversi antara subnet mask dan prefix (CIDR)", image: subnetImg, link: "https://github.com/BangGempar/kalkulator-subnet", tech: ["Typecript", "Tailwind CSS","Next.js","Vite"] }
  ];
  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">PROYEK</div>
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
              <p className="text-sm text-gray-700 mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4 items-end">
                {p.tech?.map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full inline-flex items-center justify-center whitespace-nowrap">
                    {t}
                  </span>
                ))}
              </div>
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
