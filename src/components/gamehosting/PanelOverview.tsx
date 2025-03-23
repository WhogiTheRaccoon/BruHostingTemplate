"use client";
import { useState } from 'react';
import { HomeIcon, CommandLineIcon, PlusIcon, ArrowDownOnSquareStackIcon, UserCircleIcon  } from '@heroicons/react/24/solid';
import Image from 'next/image';

const options = [
    { label: "Dashboard", icon: <HomeIcon/>, description: "Manage your server settings, view analytics, and access quick controls from the dashboard.", image: "/images/panel/home.png"},
    { label: "Console", icon: <CommandLineIcon/>, description: "View real-time logs, send commands, and troubleshoot server issues with the live console.", image: "/images/panel/console.png" },
    { label: "Plugin & Mod Installer", icon: <PlusIcon/>, description: "Easily browse and install plugins or mods to enhance your server's functionality.", image: "/images/panel/plugins.png" },
    { label: "Modpack & Version Installer", icon: <ArrowDownOnSquareStackIcon/>, description: "Switch between different Minecraft versions and modpacks seamlessly.", image: "/images/panel/mods.png" },
    { label: "Player Management", icon: <UserCircleIcon/>, description: "Manage players, set roles, ban/unban users, and configure player permissions.", image: "/images/panel/player.jpg" }
];

export default function PanelOverview() {
    const [selectedImage, setSelectedImage] = useState(options[0].image);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container py-12 text-white">
            <h1 className="text-4xl text-center">Custom Game Panel</h1>
            <h2 className="text-lg text-muted text-center pb-4">
                Our custom game control panel is designed for ultimate ease of use, featuring a sleek interface with powerful automation.
                With one-click installs for plugins, mods, and game versions, setting up and customizing your server has never been easier.
                Whether you're managing a small community or a large gaming network, our panel streamlines the process, letting you focus on gameplay while we handle the technical details.
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className={`flex flex-col w-full md:w-1/3 py-5 rounded-md text-xl text-center hover:bg-accent/75 hover:text-white cursor-pointer bg-background ${activeIndex === index ? 'border-2 border-accent' : ''}`}
                        onClick={() => {
                            setSelectedImage(options[index].image);
                            setActiveIndex(index);
                        }}
                    >
                        <span className="size-12 mx-auto mb-2">{option.icon}</span>
                        <span className="text-center mx-auto">{option.label}</span>
                        <span className="text-sm text-muted mx-5">{option.description}</span>
                    </button>
                ))}
            </div>
            
            <div className="flex gap-6 mt-5">
                <div className="h-full mx-auto border-2 border-borders w-full">
                    <Image src={selectedImage} alt="Panel Preview" width={1532} height={762} className="border-2 border-borders shadow-2xl" />
                </div>
            </div>
        </div>
    );
}