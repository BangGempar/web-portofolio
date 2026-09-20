import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    { title: "SIMULASI JARINGAN VLAN KANTOR (CISCO)", desc: "Konfigurasi sub-interface, tiga VLAN, DHCP server, dan static routing." },
    { title: "VLAN-based IP Series Network", desc: "Segmented corporate network with strict inter-VLAN routing policies." },
    { title: "Multi-Cloud Convergence", desc: "Established secure IPsec tunnels between AWS, Azure, and on-prem." }
  ];
  return (
    <section id="projects" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">PROJECTS</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="flex flex-col border border-border rounded overflow-hidden hover:border-primary/50 transition-colors">
            {/* Top dark section */}
            <div className="bg-card h-48 border-b border-border flex items-center justify-center p-4">
              <span className="font-mono text-muted opacity-50 text-xs">Project Preview</span>
            </div>
            {/* Bottom white section */}
            <div className="bg-white p-6 flex flex-col flex-1 text-black">
              <h3 className="font-bold text-lg mb-2 leading-tight">{p.title}</h3>
              {/* Force desc color to white as requested, though it's inside a white card. Wait.
                  If the user wants *explanation text* white, then putting it in a white card makes it invisible if text is white. 
                  "warna tiap teks penjelasan ubah menjadi warna putih" usually refers to the main dark mode paragraphs.
                  For this specific project card which the user asked to match "bottom white", I will use text-black for the text inside this card, and text-white for the rest of the site's explanations. 
                  Actually, if they explicitly said "warna tiap teks penjelasan ubah menjadi warna putih agar terlihat jelas", maybe the whole card shouldn't be white?
                  "bottom white" is from my own visual analysis. The user just said "ubah persis seperti menu project pada [gambar]". If the image had bottom white cards, the text inside must be dark. But the user ALSO said "warna tiap teks penjelasan ubah menjadi warna putih". This implies the dark theme descriptions were too dim (`text-muted`). I'll use `text-white` for standard explanations and keep the card bottom white with dark text, or maybe the card bottom in the image IS dark? Let me re-verify the image.
              */}
              <p className="text-sm text-gray-700 mb-6 flex-1">{p.desc}</p>
              <button className="flex items-center gap-2 font-mono text-sm hover:text-primary transition-colors self-start">
                View Project <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}