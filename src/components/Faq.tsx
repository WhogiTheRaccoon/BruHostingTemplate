"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function Faq() {
    const [active, setActive] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActive(active === index ? null : index);
        const chevron = document.querySelectorAll('.size-6');
        if (chevron[index]) {
            chevron[index].classList.toggle('rotate-180');
        }
    }

    return (
        <div className="container py-12">
            <div className="flex flex-col space-y-3 text-white">
                <h1 className="text-4xl text-white text-center">Frequently Asked Questions</h1>
                <h2 className="text-2xl text-muted text-center pb-4">Can't find what you're looking for?</h2>

                <div className="border border-borders w-full mt-3">
                    <button className="text-left p-5 font-medium flex justify-between items-center bg-backgroundLight w-full hover:cursor-pointer" onClick={() => toggleFaq(0)}>
                        Can I change my plan later? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 0 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>

                <div className="border border-borders">
                    <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-backgroundLight hover:cursor-pointer" onClick={() => toggleFaq(1)}>
                        Do you offer any discounts? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 1 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>

                <div className="border border-borders">
                    <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-backgroundLight hover:cursor-pointer" onClick={() => toggleFaq(2)}>
                        What forms of payment do you accept? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 2 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>

                <div className="border border-borders">
                    <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-backgroundLight hover:cursor-pointer" onClick={() => toggleFaq(3)}>
                        Is there a free trial available? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 3 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>
                <div className="border border-borders">
                    <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-backgroundLight hover:cursor-pointer" onClick={() => toggleFaq(4)}>
                        Do you handle the migrations? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 4 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>
                <div className="border border-borders">
                    <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-backgroundLight hover:cursor-pointer" onClick={() => toggleFaq(5)}>
                        Do you include backups? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 5 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>

                <div className="border border-borders">
                    <button className="w-full text-left p-5 font-medium flex justify-between items-center bg-backgroundLight hover:cursor-pointer" onClick={() => toggleFaq(6)}>
                        Do you monitor our sites for downtime? <ChevronDownIcon className="size-6"/>
                    </button>
                    {active === 6 && (
                        <div className="p-4 bg-backgroundLight border-t-2 border-borders">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat temporibus nam est, reprehenderit veritatis.</div>
                    )}
                </div>
            </div>
        </div>
    )
}