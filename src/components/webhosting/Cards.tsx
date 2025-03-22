"use client";
import React from "react";

interface PlansCardProps {
    data: Record<string, any>[];
    className?: string;
}


export default function WebCards({ data, className }: PlansCardProps) {
    if (!data.length) return <p className="text-center text-red-400">No data available</p>;

    return (
        <div className="flex flex-col gap-2 md:hidden">
            {data.map((item, index) => (
                <div key={index} className={`card w-full space-y-2 border-2 border-borders bg-backgroundLight ${className || ""}`}>
                    <h1 className="text-3xl font-bold">{item.name}</h1>
                    <p className="text-lg text-gray-400">
                        <span className="text-accent text-2xl font-bold">${item.price}</span>/month
                    </p>
                    <ul className="text-white text-lg space-y-1">
                        <li>Websites: <span className="text-muted">{item.websites}</span></li>
                        <li>NVMe Storage: <span className="text-muted">{item.storage}</span></li>
                        <li>Bandwidth: <span className="text-muted">{item.bandwidth}</span></li>
                        <li>SSl Certificate: <span className="text-muted">Free</span></li>
                        <li>Backups: <span className="text-green-400">{item.backups}</span></li>
                        <li>Uptime Monitoring: <span className="text-green-400">Yes</span></li>
                        <li>Domains: <span className="text-muted">{item.domains}</span></li>
                        <li>Control Panel: <span className="text-muted">{item.controlPanel}</span></li>
                        <li>Support: <span className="text-muted">24/7</span></li>
                        <li>Location: <span className="text-muted">{item.location}</span></li>
                    </ul>
                    <a href={item.link} className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white mt-4 w-full block text-center">Order Now</a>
                </div>
            ))} 
        </div>
    )
}