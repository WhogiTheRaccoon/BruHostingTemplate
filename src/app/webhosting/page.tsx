import PageHeader from "@/components/webhosting/PageHeader";
import About from "@/components/webhosting/About";
import InfoGroup from "@/components/InfoGroup"
import Faq from "@/components/Faq";
import webHostingProducts from "@/data/webProducts.json";

export const generateMetadata = () => {
    return {
        title: "cPanel and DirectAdmin Website Hosting",
        description: "Experience high-performance Web Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
        openGraph: {
          title: "cPanel and DirectAdmin Website Hosting",
          description: "Experience high-performance Web Hosting with industry-leading processors, unmatched reliability, and affordable pricing.",
          url: "https://whogiworld.com/webhosting"
        },
    };
};

export default function Home() {
    return (
      <>
        <section id="halo" className="relative header-bg" style={{ backgroundImage: "url('/images/background/webhosting.jpg')"}}>
            <PageHeader name="Flexible Pricing for Every Need" description="Choose the plan that best fits your project requirements" products={webHostingProducts}/>
        </section>

        <section id="info">
            <About />
        </section>

        <section id="infoCards">
            <InfoGroup />
        </section>

        <section id="faq" className="bg-background">
            <Faq />
        </section>
      </>
    );
}