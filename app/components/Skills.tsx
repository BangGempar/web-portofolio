export function Skills() {
  const skills = [
    { name: "OSPF & BGP", desc: "Dynamic routing protocols design & implementation" },
    { name: "VLAN", desc: "Layer 2 segmentation and STP management" },
    { name: "Firewall", desc: "Access control, NAT, and stateful inspection" },
    { name: "MikroTik", desc: "RouterOS configuration and optimization" },
    { name: "GNS3", desc: "Network simulation and pre-deployment testing" },
    { name: "Diagnostics", desc: "Wireshark, tcpdump, and root cause analysis" }
  ];

  return (
    <section id="skills" className="flex flex-col gap-8">
      <div className="font-mono text-primary text-sm">02 // SKILLS & COMPETENCE</div>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map(s => (
          <div key={s.name} className="p-6 bg-card border border-border rounded hover:border-primary/50 hover:shadow-lg transition-all group">
            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{s.name}</h3>
            <p className="text-sm text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}