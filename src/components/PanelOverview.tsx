import Image from 'next/image'

export default function PanelOverview() {
    return (
        <div className="container pb-12 pt-24">
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row place-content-evenly items-center text-white mx-auto">
                    <div className="w-full md:w-1/3 space-y-2 text-muted font-light">
                        <h1 className="text-3xl font-bold text-white">Beautiful Control Panel</h1>
                        <p className="pt-2 text-xl">Manage every aspect of your virtual server through our modern and easy-to-use control panel.</p>
                        <ul className="text-xl space-y-1">
                            <li><i className="fa-solid fa-check fa-fw"></i> Power Actions</li>
                            <li><i className="fa-solid fa-check fa-fw"></i> Automatic Reinstallation</li>
                            <li><i className="fa-solid fa-check fa-fw"></i> noVNC Console</li>
                            <li><i className="fa-solid fa-check fa-fw"></i> Resource Monitoring</li>
                            <li><i className="fa-solid fa-check fa-fw"></i> Password Adjustment</li>
                            <li><i className="fa-solid fa-check fa-fw"></i> Quick, Modern UI</li>
                            <li><i className="fa-solid fa-check fa-fw"></i> Integrated Graphs, Backups, and Firewalls</li>
                        </ul>
                        <p className="pt-3">Need more information? Check out our documentation <a href="#" className="underline">here</a>.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image src="/images/vpsPanel.png" alt="VPS Control Panel" width={768} height={300} className="rounded-md border-2 border-borders mt-5 md:mt-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}