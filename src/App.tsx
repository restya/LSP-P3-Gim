/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Schemes } from "./components/Schemes";
import { Team } from "./components/Team";
import { Roadmap } from "./components/Roadmap";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#0F1110] font-sans selection:bg-[#FF3333]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Schemes />
        <Team />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
