import Image from "next/image";

export default function About() {
    return (
        <div className="container pb-12 pt-24">
        <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row place-content-evenly items-center text-white mx-auto">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl font-bold">Beautiful Control Panels</h1>
                    <p className="pt-2 text-xl text-muted">Easy to use and beautiful control panels. Does the command line scare you? Maybe you just don't want to mess with that. Simply Choose between DirectAdmin and cPanel. These panels provide tools for admins, resellers, and end-user website owners to successfully manage and control their website all through a simple web browser. </p>
                </div>
                <div className="w-1/3 hidden md:block">
                    <Image src="/images/controlPanel.png" alt="Control Panel" width={511} height={288} className="rounded-md" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row place-content-evenly items-center text-white mx-auto">
                <div className="w-1/3 hidden md:block">
                    <Image src="/images/backups.png" alt="Backups" width={511} height={288} className="rounded-md" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl font-bold">Free Backups</h1>
                    <p className="pt-2 text-xl text-muted">All webservers include free, automated backups. Backups are taken every <span className="font-bold">72 hours</span>, and stored securely on ur encrypted cloud-storage cluster.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row place-content-evenly items-center text-white mx-auto">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl font-bold">1-Click App Installs</h1>
                    <p className="pt-2 text-xl text-muted">Softaculous is an auto-installer software integrated into our web hosting control panel, allowing users to easily install and manage various web applications and scripts.</p>
                </div>
                <div className="grid-cols-4 gap-4 hidden md:grid">
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">

                        <Image src="/images/apps/wordpress.png" alt="Wordpress" width={80} height={96} className="rounded-md" />
                        <h1>WordPress</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/joomla.png" alt="Joomla" width={80} height={96} className="rounded-md" />
                        <h1>Joomla</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/magento.png" alt="Magento" width={80} height={96} className="rounded-md" />
                        <h1>Magento</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/prestashop.png" alt="PrestaShop" width={80} height={96} className="rounded-md" />
                        <h1>PrestaShop</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/codeigniter.png" alt="CodeIgniter" width={80} height={96} className="rounded-md" />
                        <h1>CodeIgniter</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/mybb.png" alt="MyBB" width={80} height={96} className="rounded-md" />
                        <h1>MyBB</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/opencart.png" alt="OpenCart" width={80} height={96} className="rounded-md" />
                        <h1>OpenCart</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-md text-center text-md border-2 border-borders hover:border-accent px-5 mx-auto">
                        <Image src="/images/apps/laravel.png" alt="Laravel" width={80} height={96} className="rounded-md" />
                        <h1>Laravel</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}