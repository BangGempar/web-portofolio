export function About() {
  return (
    <section id="about" className="flex flex-col gap-6">
      <div className="font-mono text-primary text-sm">PENGALAMAN & PENDIDIKAN</div>
      <h2 className="text-3xl font-bold">PERJALANAN KARIR & STUDI</h2>
      
      <p className="text-muted leading-relaxed max-w-3xl">
        Berasal dari Kabupaten Parigi Moutong, Sulawesi Tengah. Memiliki latar belakang kuat di bidang infrastruktur jaringan dan pengembangan sistem, menggabungkan pendidikan formal IT dengan pengalaman praktis di lapangan.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-6">
        
        {/* Kolom Pengalaman */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-foreground">Pengalaman</h3>
          <div className="border-l border-border ml-2 pl-6 flex flex-col gap-8 pt-1">
            
            <div className="relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30px] top-1.5 outline outline-4 outline-background" />
              <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-2 hover:border-primary/50 transition-colors">
                <div className="text-xs font-mono bg-muted/20 text-muted w-fit px-2 py-1 rounded">Magang (3 Bulan)</div>
                <h4 className="font-bold text-lg text-foreground">IT Support</h4>
                <div className="text-primary text-sm font-medium">Dinas Sumber Daya Air, Cipta Karya, dan Tata Ruang</div>
                <p className="text-muted text-sm leading-relaxed mt-1">
                  Mendukung operasional jaringan dan sistem, sekaligus menambah wawasan praktis di dunia kerja.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Kolom Pendidikan */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-foreground">Pendidikan</h3>
          <div className="border-l border-border ml-2 pl-6 flex flex-col gap-8 pt-1">
            
            <div className="relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30px] top-1.5 outline outline-4 outline-background" />
              <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-2 hover:border-primary/50 transition-colors">
                <div className="text-xs font-mono bg-muted/20 text-muted w-fit px-2 py-1 rounded">Lulusan S1</div>
                <h4 className="font-bold text-lg text-foreground">S1 Informatika</h4>
                <div className="text-primary text-sm font-medium">Universitas Muhammadiyah Makassar</div>
                <p className="text-muted text-sm leading-relaxed mt-1">
                  Pencapaian IPK: 3.5.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[30px] top-1.5 outline outline-4 outline-background" />
              <div className="bg-card border border-border rounded-lg p-5 flex flex-col gap-2 hover:border-primary/50 transition-colors">
                <div className="text-xs font-mono bg-muted/20 text-muted w-fit px-2 py-1 rounded">Sekolah Menengah Kejuruan</div>
                <h4 className="font-bold text-lg text-foreground">Teknik Komputer & Jaringan</h4>
                <div className="text-primary text-sm font-medium">SMK Negeri 3 Soppeng</div>
                <p className="text-muted text-sm leading-relaxed mt-1">
                  Fokus pada infrastruktur jaringan, konfigurasi perangkat, dan administrasi sistem dasar.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}