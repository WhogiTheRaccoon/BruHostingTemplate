"use client";
import React, {useMemo, useState} from 'react';
import { CheckBadgeIcon, ExclamationCircleIcon, FaceSmileIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface GameListProps {
    data?: Record<string, any>[];
}

export default function GameList({ data }: GameListProps) {
    if (!data?.length) return <p className="text-center text-red-400">No data available</p>;
    const [searchQuery, setSearchQuery] = useState("");

    const icons: Record<string, React.ElementType> = {
        FaceSmileIcon: FaceSmileIcon,
        CheckBadgeIcon: CheckBadgeIcon,
        ExclamationCircleIcon: ExclamationCircleIcon,
    };

    const filteredData = useMemo(() => {
        const query = searchQuery.toLowerCase();
        return data?.filter(({ name, tags = [], altNames = "" }) =>
            [name, ...tags, altNames].some((text) => text.toLowerCase().includes(query))
        );
    }, [searchQuery, data]);


    return (
        <div className="space-y-6">
            <input
                type="text"
                placeholder="Search for a game..."
                className="w-full md:w-1/2 bg-backgroundLight text-white p-3 rounded-md border-2 border-borders"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-left text-white">
                {filteredData.map(({ name, link, image, price, badge }, index) => {
                    const IconComponent = badge ? icons[badge.icon] : null;

                    return (
                        <a key={index} href={link} className="flex flex-col group hover:cursor-pointer relative mx-auto" aria-label={`View details for ${name}`}>
                            {badge && (
                                <span className={`gameBadge ${badge.color} flex items-center gap-1`}>
                                    {IconComponent && <IconComponent className="w-5 h-5" />}
                                    {badge.text}
                                </span>
                            )}
                            <Image src={image} alt={name} width={236} height={352} className="gameIcon" />
                            <h1 className="text-white font-bold text-lg pt-2 text-center md:text-left">{name}</h1>
                            <span className="text-muted text-center md:text-left">Starting at <strong>${price}</strong></span>
                        </a>
                    );
                })}
            </div>

        </div>
    );
}