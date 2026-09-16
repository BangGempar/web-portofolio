export function About() {
  const domains = ["Enterprise Networks", "Automation", "Security", "Cloud", "SDNF"];
  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="font-mono text-primary text-sm">ABOUT ME</div>
      <h2 className="text-3xl font-bold">DARI PARIGI MOUTONG KE DUNIA JARINGAN</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-white leading-relaxed">
          Saya berasal dari Kabupaten Parigi Moutong, Sulawesi Tengah, dan menempuh pendidikan di SMK Negeri 3 Soppeng dengan jurusan Teknik Komputer dan Jaringan (TKJ). Setelah itu, saya melanjutkan studi di Universitas Muhammadiyah Makassar pada program S1 Informatika, dengan pencapaian IPK 3.5.

Selain pendidikan formal, saya juga memiliki pengalaman magang selama 3 bulan di Dinas Sumber Daya Air, Cipta Karya, dan Tata Ruang, di mana saya berperan sebagai IT Support. Pengalaman ini memperkuat keterampilan saya dalam mendukung operasional jaringan dan sistem, sekaligus menambah wawasan praktis di dunia kerja.
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