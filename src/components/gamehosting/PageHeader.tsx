"use client";
import GameList from '@/components/gamehosting/GameList'

interface PageHeaderProps {
    name: string;
    description: string;
    products: any;
}

export default function PageHeader({ name, description, products }: PageHeaderProps) {
    return (
        <div className="container pt-[15vh] pb-16">
            <div className="flex flex-col text-center space-y-6">
                <h3 className="text-5xl text-white font-bold">{name}</h3>
                <h1 className="text-2xl text-muted">{description}</h1>
                <GameList data={products} />
            </div>
        </div> 
    )
}