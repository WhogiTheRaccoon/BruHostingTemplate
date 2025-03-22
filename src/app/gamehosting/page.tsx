import InfoGroup from "@/components/InfoGroup";
import Faq from "@/components/Faq";
import PageHeader from "@/components/gamehosting/PageHeader";
import PanelOverview from "@/components/gamehosting/PanelOverview";
import gameData from "@/data/gameProducts.json";

export const generateMetadata = () => {
    return {
        title: "Industry-Leading Game Hosting Solutions",
        description: "Experience high-performance Game Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
        openGraph: {
          title: "Industry-Leading Game Hosting Solutions",
          description: "Experience high-performance Game Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
          url: "https://whogiworld.com/gamehosting"
        },
    };
};

export default function Home() {
    return (
      <>
        <section id="halo" className="relative header-bg" style={{ backgroundImage: "url('/images/background/gamehosting.jpg')"}}>
            <PageHeader name="Powerful Game Hardware for Every Project" description="Choose the plan that best fits your project requirements" products={gameData}/>
        </section>

        <section id="panel">
            <PanelOverview />
        </section>

        <section id="info">
            <InfoGroup />
        </section>

        <section id="faq" className="bg-background">
            <Faq />
        </section>
      </>
    );
}