"use client";
import Table from "@/components/Table";
import PlansCards from "@/components/PlansCards";

interface PageHeaderProps {
    name: string;
    description: string;
    products?: any;
    children?: React.ReactNode;
}


export default function PageHeader({name, description, products, children }: PageHeaderProps) {
    return (
        <div className="container pt-[15vh]">
            <div className="flex flex-col text-center space-y-6">
                <h3 className="text-5xl text-white font-bold">{name}</h3>
                <h1 className="text-2xl text-muted">{description}</h1>
                {products?.length > 0 && (
                  <>
                    <Table headers={'Model, RAM, Storage, Bandwidth, Deployment Time, Price'} data={products} className="md:hidden"/> {/* Table Desktop */}
                    <PlansCards data={products} className="md:hidden"/> {/* Card Mobile */}
                  </>
                )}
                {children}
            </div>
        </div>
    )
}