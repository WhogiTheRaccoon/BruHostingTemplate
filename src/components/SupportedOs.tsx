import { PlusCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function SupportedOs () {
    return (
        <div className="container py-12">
        <div className="flex flex-col">
            <h1 className="text-4xl text-white text-center pt-12">Supported Operating Systems</h1>
            <p className="text-muted text-center pt-2 pb-5 text-xl">Choose from a variety of operating systems to install on your virtual server.</p>
            <div className="grid grid-cols-2 md:grid-cols-10 gap-6 mx-auto text-white place-content-evenly md:w-3/4 items-center">
                <Image src="/images/distros/windows.png" alt="Windows" width={93} height={93} className="w-24" />
                <Image src="/images/distros/debian.png" alt="Debian" width={93} height={93} className="w-24" />
                <Image src="/images/distros/ubuntu.png" alt="Ubuntu" width={93} height={93} className="w-24" />
                <Image src="/images/distros/centos.png" alt="CentOS" width={93} height={93} className="w-24" />
                <Image src="/images/distros/fedora.png" alt="Fedora" width={93} height={93} className="w-24" />
                <Image src="/images/distros/freebsd.png" alt="Freebsd" width={93} height={93} className="w-24" />
                <Image src="/images/distros/oracle.png" alt="Oracle" width={93} height={93} className="w-24" />
                <Image src="/images/distros/redhat.png" alt="RedHat" width={93} height={93} className="w-24" />
                <Image src="/images/distros/alpine.png" alt="Alpine" width={93} height={93} className="w-24" />
                <PlusCircleIcon className="w-24 text-accent" />
            </div>
        </div>
    </div>
    )
}