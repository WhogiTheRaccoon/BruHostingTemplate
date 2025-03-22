import InfoGroup from "@/components/InfoGroup"
import Image from "next/image"

export default function About() {
    return (
        <div className="container">
            <h1 className="text-4xl font-bold text-white text-center py-12">Our Company</h1>
            {/* About Us */}
            <div className="flex flex-col md:flex-row pb-16 gap-8">
            <div className="w-full md:w-1/2">
                <Image src="/images/aboutus.png" alt="WhogiWorld Servers" width={752} height={400} className="dark-image rounded-2xl shadow-lg h-[25rem] w-full object-cover hidden md:block" />
            </div>
            <div className="w-full md:w-1/2 text-white mx-auto">
                <h1 className="text-3xl font-bold text-center md:text-left">Empowering Businesses with Cutting-Edge<br /> Cloud Solutions</h1>
                <p className="text-xl pt-5 text-muted text-center md:text-left">At WhogiWorld, we are committed to providing high-performance compute infrastructure tailored for modern businesses. From dedicated servers to virtual private servers and website hosting, we combine industry-leading hardware with unmatched affordability to empower organizations of all sizes. Our platform is optimized for speed, reliability, and scalability to meet the demands of an ever-changing digital landscape.</p>
                <div className="flex flex-col md:flex-row text-2xl text-muted text-center pt-5 place-content-between">
                <div className="flex flex-row md:flex-col gap-2 md:gap-0 mx-auto md:mx-0">
                    <span>Founded</span>
                    <span className="text-white">2020</span>
                </div>
                <div className="flex flex-row md:flex-col gap-2 md:gap-0 mx-auto md:mx-0">
                    <span>Deployed Servers</span>
                    <span className="text-white">250</span>
                </div>
                <div className="flex flex-row md:flex-col gap-2 md:gap-0 mx-auto md:mx-0">
                    <span>Tickets Answered</span>
                    <span className="text-white">160</span>
                </div>
                <div className="flex flex-row md:flex-col gap-2 md:gap-0 mx-auto md:mx-0">
                    <span>Locations</span>
                    <span className="text-white">3</span>
                </div>
                </div>
            </div>
            </div>
            {/* General Info */}
            <InfoGroup />
        </div>
    )
}