"use client";
import { useState } from 'react';
import { UserIcon, HomeIcon, CloudIcon, ServerStackIcon, GlobeAltIcon, PuzzlePieceIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavItem from '@/components/layout/NavItem';
import Image from 'next/image';

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav id="header" className="navbar">
            <div className="flex container items-center justify-between h-16 mt-3 mx-auto">
               
               {/* Icon */}
                <a href="/" className="flex items-center text-white text-3xl z-50" onClick={() => setIsOpen(!isOpen)}>
                    <Image src="/images/logo.png" alt="Whogi World Logo" width={76} height={64} className="h-16 pr-2 mt-4" />
                    <span className="font-normal">Whogi</span>
                    <span className="text-accent font-normal">World</span>
                </a>

                {/* Hamburgers Are good */}
                <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <XMarkIcon className="size-8" /> : <Bars4Icon className="size-8" />}
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-row text-md text-muted">
                    <div className="flex space-x-0 md:space-x-4 text-md">
                        <NavItem href='/' icon={<HomeIcon className="size-5 inline" />} label='Home' />
                        <NavItem href='/cloud' icon={<CloudIcon className="size-5 inline" />} label='Cloud' />
                        <NavItem href='/dedicated' icon={<ServerStackIcon className="size-5 inline" />} label='Dedicated' />
                        <NavItem href='/webhosting' icon={<GlobeAltIcon className="size-5 inline" />} label='Web Hosting' />
                        <NavItem href='/gamehosting' icon={<PuzzlePieceIcon className="size-5 inline" />} label='Game Hosting' />
                    </div>
                    <hr className="border border-borders mx-4 h-6" />
                    <div>
                        <a href="#" className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white hover:cursor-pointer">
                            <UserIcon className="size-5 inline" />
                            Client Area
                        </a>
                    </div>
                </div>
            </div>
                
            {/* Mobile Nav */}
            {isOpen && (
            <div className="md:hidden absolute top-0 w-full">
                <div className="bg-background w-full text-lg p-5 space-y-2 rounded-b-md pt-24"> 
                    <NavItem href='/' icon={<HomeIcon className="size-5 inline" />} label='Home' closeMenu={closeMenu} />
                    <NavItem href='/cloud' icon={<CloudIcon className="size-5 inline" />} label='Cloud' closeMenu={closeMenu} />
                    <NavItem href='/dedicated' icon={<ServerStackIcon className="size-5 inline" />} label='Dedicated' closeMenu={closeMenu} />
                    <NavItem href='/webhosting' icon={<GlobeAltIcon className="size-5 inline" />} label='Web Hosting' closeMenu={closeMenu} />
                    <NavItem href='/gamehosting' icon={<PuzzlePieceIcon className="size-5 inline" />} label='Game Hosting' closeMenu={closeMenu} />
                    <hr className="border border-borders mb-5" />
                    <a href="#" className="flex bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white hover:cursor-pointer mx-auto w-full items-center text-center"><UserIcon className="size-5 inline" /> Client Area </a>
                </div>
            </div>
            )}

        </nav>
    );
};
