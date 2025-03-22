import DiscordWidget from '@/components/index/DiscordWidget'
import GlideCarousel from '@/components/index/glideCarousel';
import QuickGlance from '@/components/index/QuickGlance';
import About from '@/components/index/About';
import Contact from '@/components/index/Contact';

export default function Home() {
  return (
    <>
      <section className="header-bg" style={{ backgroundImage: "url('/images/background/index.png')" }}>
        <GlideCarousel />
      </section>

      <section id="glance" className="pb-[4rem]">
        <QuickGlance />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="discord">
        <DiscordWidget />
      </section> */}

      <section id="contact" className="bg-background">
        <Contact />
      </section>
    </>
  );
}
