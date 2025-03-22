'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    closeMenu?: () => void; // Uncomment if you want to use closeMenu for mobile nav
}

export default function NavItem ({ href, icon, label, closeMenu }: NavItemProps) {
    const pathname = usePathname();
    return (
        <Link href={href} className={`flex items-center gap-1 ${pathname === href ? 'text-white hover:text-muted' : 'text-muted hover:text-accent'}`} onClick={closeMenu}>
            {icon}
            <span>{label}</span>
        </Link>
    );
}