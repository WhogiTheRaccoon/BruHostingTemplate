import Policy from "@/components/Policy";

export const generateMetadata = () => {
    return {
        title: "WhogiWorld - Refund Policy",
        openGraph: {
          title: "WhogiWorld - Refund Policy",
          url: "https://whogiworld.com/policy/rp"
        },
    };
};

export default function Home() {
    return (
        <Policy
            title="Refund Policy (RP)"
            description="This is an overview of our Refund Policy"
            lastUpdated="March 21, 2025"
            filePath="src/data/policy/rp.md"
        />
    );

}