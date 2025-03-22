import SupportedOs from "@/components/SupportedOs";
import InfoGroup from "@/components/InfoGroup";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import PanelOverview from "@/components/PanelOverview";
import cloudData from "@/data/cloudProducts.json";

export const generateMetadata = () => {
    return {
        title: "Best Price-to-Performance AMD EPYC and Ryzen Cloud VPS",
        description: "Experience high-performance Cloud Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
        openGraph: {
          title: "Best Price-to-Performance AMD EPYC and Ryzen Cloud VPS",
          description: "Experience high-performance Cloud Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
          url: "https://whogiworld.com/cloud"
        },
    };
};

export default function Home() {
    return (
      <> 
        <section id="halo" className="relative header-bg" style={{ backgroundImage: "url('/images/background/dedicated.jpg')"}}>
            <PageHeader name="High performance Virtual Servers" description="Choose the plan that best fits your project requirements" products={cloudData}/>
        </section>

        <section id="supportedOS">
            <SupportedOs />
        </section>

        <section id="panel">
            <PanelOverview />
        </section>

        <section id="features">
            <InfoGroup />
        </section>

        <section id="faq" className="bg-background">
            <Faq />
        </section>
      </>
    );
}