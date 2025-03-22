import Policy from "@/components/Policy";

export const generateMetadata = () => {
    return {
        title: "WhogiWorld - Privacy Policy",
        openGraph: {
          title: "WhogiWorld - Privacy Policy",
          url: "https://whogiworld.com/policy/pp"
        },
    };
};

export default function Home() {
    return (
        <Policy
            title="Privacy Policy (PP)"
            description="This is an overview of our Privacy Policy"
            lastUpdated="March 21, 2025"
            filePath="src/data/policy/pp.md"
        />
    );

}