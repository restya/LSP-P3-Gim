import { teamData } from "../data";

export function Team() {
  return (
    <section id="tim" className="py-24 bg-[#FDFCFB] border-t border-[#0F1110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#0F1110] pb-8 mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-[48px] sm:text-[80px] font-black tracking-tighter uppercase leading-none mb-6">Struktur<br/><span className="text-transparent stroke-black" style={{ WebkitTextStroke: '1px #0F1110' }}>Kepengurusan</span></h2>
            <p className="text-xl font-medium text-[#0F1110]/70">
              Didukung oleh para profesional yang berdedikasi memajukan ekosistem talenta pengembang gim.
            </p>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-[#0F1110] text-[#FF3333]">
            Tim Inti LSP
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0F1110] border border-[#0F1110]">
          {teamData.map((item, idx) => (
            <div key={idx} className="bg-[#FDFCFB] p-8 flex flex-col hover:bg-[#FF3333]/10 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F1110]/50 mb-8 border-b border-[#0F1110]/10 pb-4">{item.role}</span>
              <div className="flex flex-col gap-6">
                {item.names.map((name, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#0F1110] flex items-center justify-center font-black text-xs uppercase bg-[#0F1110] text-[#FF3333] flex-shrink-0">
                      {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <span className="font-bold text-sm tracking-wide uppercase leading-tight">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
