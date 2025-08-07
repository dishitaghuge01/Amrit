'use client';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MemoryLane from './components/MemoryLane';
import Gallery from './components/Gallery';
import LetterRoom from './components/LetterRoom';
import AudioRoom from './components/AudioRoom';
import HiddenRoom from './components/HiddenRoom';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d2b] text-white">
      <Navbar />
      
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <Hero />
      </section>

      <section id="memory-lane" className="min-h-screen py-20">
        <MemoryLane />
      </section>

      <section id="gallery" className="min-h-screen py-20">
        <Gallery />
      </section>

      <section id="letter-room" className="min-h-screen py-20">
        <LetterRoom />
      </section>

      <section id="audio-room" className="min-h-screen py-20">
        <AudioRoom />
      </section>

      <section id="hidden-room" className="min-h-screen py-20">
        <HiddenRoom />
      </section>
    </main>
  );
}
