"use client";
import React from "react";

interface PlansCardProps {
    data: Record<string, any>[];
    className?: string;
}

export default function PlansCard({ data, className }: PlansCardProps) {
    if (!data.length) return <p className="text-center text-red-400">No data available</p>;

    return (
        <>
        {data.map((item, index) => (
            <div key={index} className={`card w-full space-y-2 border-2 border-borders bg-backgroundLight ${className || ""}`}>
                <h1 className="text-3xl font-bold">{item.name}</h1>
                <p className="text-lg text-gray-400">
                    <span className="text-accent text-2xl font-bold">{item.price}</span>/month
                </p>
                <ul className="text-white text-lg space-y-1">
                    <li>CPU: <span className="text-muted">{item.cpu}</span></li>
                    <li>Ram: <span className="text-muted">{item.ram}</span></li>
                    <li>Storage: <span className="text-muted">{item.storage}</span></li>
                    <li>Bandwidth: <span className="text-muted">{item.bandwidth}</span></li>
                    <li>Deployment Time: <span className="text-green-400">{item.deployment}</span></li>
                </ul>
                <a href={item.link} className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white mt-4 w-full block text-center">Order Now</a> 
            </div>
        ))}
        </>
    )

}