import { CheckIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function QuickGlance() {
    return (
        <div className="container">
        <h1 className="text-4xl font-bold text-white text-center pb-6">Quick Glance</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cloud */}
          <div className="card w-full md:w-1/3 space-y-2 border-2 border-borders">
            <Image src="/images/cloud.png" alt="Cloud Icon" width={64} height={64} />
            <h1 className="text-3xl font-bold">Cloud Servers</h1>
            <p className="text-md text-muted">Starting at <span className="text-accent text-xl pt-5 font-bold">$3.00</span>/month</p>
            <p>Flexible infrastructure, scalable computing, global reach, secure environments, cost-efficient solutions.</p>
            <p className="font-semibold">Whats Included:</p>
            <ul className="text-white text-xl">
              <li><CheckIcon className="size-6 inline" /> Starts with 8GB RAM & 4 vCPU</li>
              <li><CheckIcon className="size-6 inline" /> AMD EPYC Processors</li>
              <li><CheckIcon className="size-6 inline" /> Enterprise Gen4 NVMe</li>
              <li><CheckIcon className="size-6 inline" /> ECC Registered Memory</li>
              <li><CheckIcon className="size-6 inline" /> Full Root Access</li>
              <li><CheckIcon className="size-6 inline" /> KVM & Nested Virtualization</li>
              <li><CheckIcon className="size-6 inline" /> 10 Gbps Network Connection</li>
              <li><CheckIcon className="size-6 inline" /> Available in 7 Global Locations</li>
            </ul>
            <a href="cloud" className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white mt-4 w-full block text-center">Learn More</a>
          </div>
          {/* Game */}
          <div className="card w-full md:w-1/3 space-y-2 border-2 border-borders">
            <Image src="/images/game.png" alt="Game Icon" width={64} height={64} />
            <h1 className="text-3xl font-bold">Game Servers</h1>
            <p className="text-md text-muted">Starting at <span className="text-accent text-xl pt-5 font-bold">$1.99</span>/month</p>
            <p>Low latency, high performance, DDoS protection, mod support, instant setup.</p>
            <p className="font-semibold">Whats Included:</p>
            <ul className="text-white text-xl">
              <li><CheckIcon className="size-6 inline" /> High-end CPU Options</li>
              <li><CheckIcon className="size-6 inline" /> NVMe SSD Storage</li>
              <li><CheckIcon className="size-6 inline" /> Automated Backups</li>
              <li><CheckIcon className="size-6 inline" /> Custom Pterodactyl Control Panel</li>
              <li><CheckIcon className="size-6 inline" /> DDoS Protection</li>
              <li><CheckIcon className="size-6 inline" /> One-Click Installers</li>
              <li><CheckIcon className="size-6 inline" /> 10 Gbps Network Connection</li>
              <li><CheckIcon className="size-6 inline" /> Available in 5 Global Locations</li>
            </ul>
            <a href="gamehosting" className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white mt-4 w-full block text-center">Learn More</a>
          </div>
          {/* Web */}
          <div className="card w-full md:w-1/3 space-y-2 border-2 border-borders">
            <Image src="/images/web.png" alt="Web Icon" width={64} height={64} />
            <h1 className="text-3xl font-bold">Web Hosting</h1>
            <p className="text-md text-muted">Starting at <span className="text-accent text-xl pt-5 font-bold">$0.99</span>/month</p>
            <p>Reliable storage, fast loading, secure domains, scalable resources, 24/7 support.</p>
            <p className="font-semibold">Whats Included:</p>
            <ul className="text-white text-xl">
              <li><CheckIcon className="size-6 inline" /> Powerful Intel Xeon CPU's</li>
              <li><CheckIcon className="size-6 inline" /> NVMe SSD Storage</li>
              <li><CheckIcon className="size-6 inline" /> Daily Offsite Backups</li>
              <li><CheckIcon className="size-6 inline" /> cPanel or DirectAdmin Access</li>
              <li><CheckIcon className="size-6 inline" /> CloudLinux & Softaculous</li>
              <li><CheckIcon className="size-6 inline" /> Advanced DDoS Protection</li>
              <li><CheckIcon className="size-6 inline" /> Unmetered 1 Gbps Network</li>
              <li><CheckIcon className="size-6 inline" /> Available in 3 Global Locations</li>
            </ul>
            <a href="webhosting" className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white mt-4 w-full block text-center">Learn More</a>
          </div>
        </div>
      </div>
    )
}