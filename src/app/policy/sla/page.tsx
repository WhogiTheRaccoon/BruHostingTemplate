import Policy from "@/components/Policy";

export const generateMetadata = () => {
    return {
        title: "WhogiWorld - Service Level Agreement",
        openGraph: {
          title: "WhogiWorld - Service Level Agreement",
          url: "https://whogiworld.com/policy/sla"
        },
    };
};

export default function Home() {
    return (
        <Policy
            title="Service Level Agreement (SLA)"
            description="This is an overview of our policies governing our service level agreement"
            lastUpdated="March 21, 2025"
            filePath="src/data/policy/sla.md"
        />
    );

}