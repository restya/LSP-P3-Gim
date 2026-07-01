import { contactData } from "../data";
import { Gamepad2, MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#0F1110] text-[#FDFCFB] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#FDFCFB]/20 pt-16 mb-24">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8 text-[#FF3333]">
              <div className="flex items-center justify-center w-12 h-12 border border-[#FF3333] rounded-full">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight leading-none uppercase text-[#FDFCFB]">
                LSP P3<br />
                <span className="text-[10px] font-bold tracking-widest text-[#FDFCFB]/50">Pengembang Gim</span>
              </span>
            </div>
            <p className="text-xl font-medium text-[#FDFCFB]/70 max-w-sm leading-tight">
              Membangun fondasi kualitas dan kapasitas talenta pengembang gim di seluruh Indonesia menuju standar internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[#FF3333]">Hubungi Kami</h3>
              <ul className="flex flex-col gap-6 text-xs font-bold uppercase tracking-widest text-[#FDFCFB]/70">
                <li className="flex gap-4 items-center">
                  <Phone className="w-4 h-4 text-[#FF3333]" />
                  <span>{contactData.phone}</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="w-4 h-4 text-[#FF3333]" />
                  <a href={`mailto:${contactData.email}`} className="hover:text-[#FF3333] transition">{contactData.email}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-[#FF3333]">Lokasi</h3>
              <ul className="flex flex-col gap-6 text-xs font-bold uppercase tracking-widest text-[#FDFCFB]/70">
                <li className="flex gap-4 items-start">
                  <MapPin className="w-4 h-4 text-[#FF3333] flex-shrink-0" />
                  <span className="leading-relaxed">{contactData.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FDFCFB]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#FDFCFB]/50">
          <span>&copy; {new Date().getFullYear()} LSP P3 Pengembang Gim Indonesia</span>
          <div className="flex gap-8">
            <a href={contactData.maps} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3333] transition">Google Maps</a>
            <a href={contactData.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3333] transition">{contactData.website.replace('https://', '')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
