export default function InfoGroup() {
    return (
        <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 pb-16">
                <div className="card bg-background space-y-3">
                    <h1 className="text-white text-2xl">Lightning fast CPU's</h1>
                    <p className="text-muted">We only use some of the fastest and highest end CPU's in our servers, including the AMD Ryzen 9 5950X & AMD EPYC 9652 Genoa.</p>
                </div>
                <div className="card bg-background space-y-3">
                    <h1 className="text-white text-2xl">DDoS Protection</h1>
                    <p className="text-muted">We offer some of the best DDoS protection in the industry, with a mitigation capacity of up to 7 Tbps depending on the location.</p>
                </div>
                <div className="card bg-background space-y-3">
                    <h1 className="text-white text-2xl">Network</h1>
                    <p className="text-muted">We offer up to 10 Gbit network uplinks in most of our locations, a massive upgrade from what is typically standard of cloud servers.</p>
                </div>
                <div className="card bg-background space-y-3">
                    <h1 className="text-white text-2xl">All NVMe Storage</h1>
                    <p className="text-muted">Almost all of our servers contain lightning fast solid state storage, resulting in low latency access times to your data.</p>
                </div>
                <div className="card bg-background space-y-3">
                    <h1 className="text-white text-2xl">Quick Support</h1>
                    <p className="text-muted">We have volunteer support members ready to help if you need assistance.</p>
                </div>
                <div className="card bg-background space-y-3">
                    <h1 className="text-white text-2xl">Reliable</h1>
                    <p className="text-muted">All services come with a 99.9% uptime SLA policy by default. We use enterprise gear and redundant systems to ensure reliability.</p>
                </div>
            </div>
        </div>
    )
}