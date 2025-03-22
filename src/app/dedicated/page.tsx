import SupportedOs from "@/components/SupportedOs";
import InfoGroup from "@/components/InfoGroup";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import PanelOverview from "@/components/PanelOverview";
import dedicatedProducts from "@/data/dedicatedProducts.json";

export const generateMetadata = () => {
    return {
        title: "AMD EPYC and Ryzen Dedicated Servers",
        description: "Experience high-performance Dedicated Server Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
        openGraph: {
          title: "AMD EPYC and Ryzen Dedicated Servers",
          description: "Experience high-performance Dedicated Server Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
          url: "https://whogiworld.com/dedicated"
        },
    };
};

export default function Home() {
    return (
      <>
        <section id="halo" className="relative header-bg" style={{ backgroundImage: "url('/images/background/dedicated.jpg')"}}>
            <PageHeader name="Powerful Dedicated Hardware for Every Project" description="Choose the plan that best fits your project requirements" products={dedicatedProducts}/>
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