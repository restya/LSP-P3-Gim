import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Tentang", href: "#tentang" },
    { name: "Skema", href: "#skema" },
    { name: "Tim", href: "#tim" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed w-full bg-[#FDFCFB]/95 backdrop-blur-md border-b border-[#0F1110]/10 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-[#0F1110] text-[#FF3333] rounded-full">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight leading-none uppercase">
              LSP P3<br />
              <span className="text-[10px] font-bold tracking-widest text-[#0F1110]/50">Pengembang Gim</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0F1110]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F1110] hover:text-[#0F1110]/50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFCFB] border-b border-[#0F1110]/10 shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col border-t border-[#0F1110]/10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-xs font-bold uppercase tracking-widest text-[#0F1110] hover:bg-[#FF3333]/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
