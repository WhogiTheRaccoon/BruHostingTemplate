"use client";
import React from "react";

interface TableProps {
    data: Record<string, any>[];
    headers: string;
    className?: string;
}

const Table: React.FC<TableProps> = ({ data, headers, className }) => {
    if (!data.length || !headers.length) return <p className="text-center text-red-400">No data available</p>;
    const headerArray = headers.split(",").map((header) => header.trim());
    
    return (
        <table className={`text-center w-3/4 mx-auto bg-backgroundLight rounded-md text-white hidden md:table ${className || ""}`}>
            <thead>
                <tr>
                    {headerArray.map((header, index) => ( 
                        <th key={index} className="tableHeader">{header}</th> 
                    ))}
                </tr>
            </thead>
            <tbody className="text-white bg-backgroundLight shadow-2xl">
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="tableSection text-muted">
                            <span className="text-white font-bold">{item.name}</span><br/>
                            {item.cpu}
                        </td>
                        <td className="tableItem">{item.ram}</td>
                        <td className="tableItem">{item.storage}</td>
                        <td className="tableItem">{item.bandwidth}</td>
                        <td className="tableItem text-green-400">{item.deployment}</td>
                        <td className="tableItem">{item.price}</td>
                        <td className="p-4 border border-borders font-light"><a href={item.link} className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white">Order Now</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Table;
