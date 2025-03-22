import Policy from "@/components/Policy";

export const generateMetadata = () => {
    return {
        title: "WhogiWorld - Terms Of Service",
        openGraph: {
          title: "WhogiWorld - Terms Of Service",
          url: "https://whogiworld.com/policy/tos"
        },
    };
};

export default function Home() {
    return (
        <Policy
            title="Terms of Service"
            description="This is an overview of our terms of service"
            lastUpdated="March 21, 2025"
            filePath="src/data/policy/tos.md"
        />
    );

}