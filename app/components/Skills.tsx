export function Skills() {
  const skills = [
    { name: "ROUTING", desc: "OSPF, BGP, Static Routing" },
    { name: "INFRASTRUKTUR", desc: "Subnetting, NAT, DHCP, DNS" },
    { name: "KEAMANAN", desc: "Firewall, ACL, VPN" },
    { name: "WIRELESS", desc: "Wi-Fi setup, WPA2/WPA3" },
    { name: "GNS3 dan CISCO PACKET TRACER", desc: "Topology design,Network simulation dan pre-deployment testing" },
    { name: "TROUBLESHOOTING", desc: "Wireshark, ping, traceroute" },
    { name: "AUTOMATION", desc: "Python/Bash scripting" }
  ];

  return (
    <section id="skills" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">SKILLS & COMPETENCE</div>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map(s => (
          <div key={s.name} className="p-6 bg-card border border-border rounded hover:border-primary/50 hover:shadow-lg transition-all group">
            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
            <p className="text-sm text-white">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}