import { Hero } from '../components/sections/hero';
import { About } from '../components/sections/about';
import { Schedule } from '../components/sections/schedule';
import { Projects } from '../components/sections/projects';
import { Sponsors } from '../components/sections/sponsors';
import { Contact } from '../components/sections/contact';

export function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Schedule />
      <Projects />
      <Sponsors />
      <Contact />
    </main>
  );
}