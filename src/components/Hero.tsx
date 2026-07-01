import { Target } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-[#FDFCFB] overflow-hidden flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="relative z-10 flex flex-col items-start max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#FF3333] bg-[#0F1110] inline-flex px-3 py-1.5 items-center gap-2">
            <Target className="w-4 h-4" />
            Sertifikasi Standar Industri Game
          </p>
          
          <h1 className="text-[64px] sm:text-[80px] md:text-[112px] leading-[0.85] font-black tracking-tighter uppercase mb-8">
            Accelerating<br />
            <span className="text-transparent stroke-black" style={{ WebkitTextStroke: '1px #0F1110' }}>The Growth of</span><br />
            Indonesian Game
          </h1>
          
          <p className="text-xl md:text-3xl leading-tight font-medium max-w-2xl text-[#0F1110]/70 mb-12">
            Lembaga Sertifikasi Profesi (LSP) P3 Pengembang Gim Indonesia mengukuhkan talenta-talenta terbaik demi standar kompetensi berkelas dunia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto border-t border-[#0F1110] pt-8">
            <a href="#skema" className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#0F1110] text-[#FDFCFB] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0F1110]/80 transition">
              Lihat Skema Sertifikasi
            </a>
            <a href="#tentang" className="inline-flex items-center justify-center px-8 py-5 bg-transparent text-[#0F1110] border border-[#0F1110] text-[10px] font-bold uppercase tracking-widest hover:bg-[#FF3333] transition">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
