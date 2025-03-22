"use client";
import Table from '@/components/webhosting/Table'
import Cards from '@/components/webhosting/Cards'

interface PageHeaderProps {
    name: string;
    description: string;
    products: any;
}



export default function PageHeader({ name, description, products }: PageHeaderProps) {
    return (
        <div className="container pt-[15vh]">
        <div className="flex flex-col text-center space-y-6">
            <h3 className="text-5xl text-white font-bold">{name}</h3>
            <h1 className="text-2xl text-muted">{description}</h1>
            {/* Table Desktop */}
            <Table data={products} />
            {/* Card Mobile */}
            <Cards data={products} />
        </div>
    </div>
    )
}