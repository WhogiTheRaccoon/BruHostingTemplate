export default function Footer() {
    return (
        <footer className="border-t-2 border-borders">
        <div className="container">
            <div className="flex flex-col md:flex-row place-content-between pt-24 pb-12 space-y-6 md:space-y-0">
                {/* About */}
                <div className="flex flex-col w-full md:w-1/4 space-y-4 text-muted">
                    <h1 className="text-3xl text-white">WhogiWorld</h1>
                    <p>High-performance cloud hosting for an affordable price, featuring lightning fast processors.</p>
                    <p>Contact: contact@whogiworld.com</p>
                    <p>Address: Whogi World LLC 3640 Concord Pike #1080 Wilmington, DE 19803</p>
                    <p>Whogi World LLC, registered in Delaware, United States under file number 5949002.</p>
                </div>
                {/* Solutions */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Solutions</h1>
                    <a href="/cloud">Cloud Services</a>
                    <a href="/dedicated">Dedicated Servers</a>
                    <a href="/webhosting">Web Hosting</a>
                    <a href="/gamehosting">Game Hosting</a>
                </div>
                {/* Support */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Support</h1>
                    <a href="#">Contact</a>
                    <a href="#">Documentation</a>
                    <a href="#">Service Status</a>
                    <a href="#">Looking Glass</a>
                </div>
                {/* Quick Links */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Quick Links</h1>
                    <a href="#">Game Panel</a>
                    <a href="#">VPS Panel</a>
                    <a href="#">Web Panel</a>
                    <a href="#">Billing Panel</a>
                </div>
                {/* Legal */}
                <div className="flex flex-col w-full md:w-1/6 space-y-4 text-muted">
                    <h1 className="text-2xl text-white">Legal</h1>
                    <a href="/policy/tos">Terms of Service</a>
                    <a href="/policy/pp">Privacy Policy</a>
                    <a href="/policy/sla">Service Level Agreement</a>
                    <a href="/policy/rp">Refund Policy</a>
                </div>
            </div>
            <div className="flex flex-col text-white">
                <hr className="border border-borders w-full" />
                <div className="flex py-5 items-center">
                    <span>© 2025 WhogiWorld, LLC. All rights reserved.</span>
                    <div className="ml-auto space-x-2">
                        <i className="fa-brands fa-twitter hover:text-accent"></i> 
                        <i className="fa-brands fa-linkedin hover:text-accent"></i>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    )
}