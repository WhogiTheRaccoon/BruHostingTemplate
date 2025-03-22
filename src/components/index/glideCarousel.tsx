"use client";
import { useEffect } from 'react';
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import Image from 'next/image';

import { CpuChipIcon, Square3Stack3DIcon, Cog6ToothIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const GlideCarousel = () => {
    useEffect(() => {
      // Initialize Glide.js
      const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 5000,
        hoverpause: true,
        focusAt: 'center',
        gap: 0,
        animationDuration: 400,
        animationTimingFunc: 'ease',
      });

      glide.mount(); // Mount the Glide instance
    }, []);

    return (
        <div className="glide pt-[16vh] pb-[3vh]">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {/* Virtual Servers */}
            <li className="glide__slide">
              <div className="container">
                <div className="flex flex-col md:flex-row place-content-between items-center text-center md:text-left">
                  <div>
                    <h3 className="text-2xl text-muted pb-1 font-light">Virtual Private Servers</h3>
                    <h1 className="text-4xl font-bold text-white">Fast & Flexible <span className="text-accent font-bold">Cloud Virtual Servers.</span></h1>
                    <h2 className="text-2xl font-semibold text-muted pt-3">Investing in your community, one gig at a time.<br/> Host with us today and enjoy high performance Hosting.</h2>
                    <div className="flex flex-col md:flex-row text-white md:space-x-4 pt-2 items-center">
                      <span className="flex items-center"><CpuChipIcon className="size-5 mr-1"/> 3.5Ghz+ EPYC 9654 | 5.7Ghz+ Ryzen 9950X</span>
                      <span className="flex items-center"><Square3Stack3DIcon className="size-5 mr-1"/> Raid-10 NVMe SSD Storage</span>
                    </div>
                    <ul id="features" className="list-disc list-inside text-muted text-xl py-3">
                        <li>High Speed, Purpose built Servers across all locations</li>
                        <li>Enterprise hardware with great support</li>
                        <li>Global availability of servers, 99.99% SLA guarantee</li>
                    </ul>
                    <div className="flex space-x-3 text-xl text-white pt-5 place-content-center md:place-content-baseline">
                        <a href="/cloud" className="px-4 py-2 rounded-md bg-accent hover:bg-[#0160d9] hover:text-white">Get Started</a>
                        <a href="/cloud" className="px-4 py-2 rounded-md bg-background hover:bg-backgroundLight hover:text-white">Learn More</a>
                    </div>
                  </div>
                  <img src="/images/slider/vpsSlider.png" alt="VPS Icon" className="transform scale-x-[-1] w-2/5 shadow-md hidden md:block" />
                </div>
              </div>
            </li>
            {/* Game Servers */}
            <li className="glide__slide">
              <div className="container">
                <div className="flex flex-col md:flex-row place-content-between items-center text-center md:text-left">
                  <div>
                    <h3 className="text-2xl text-muted pb-1 font-light">Game Servers</h3>
                    <h1 className="text-4xl font-bold text-white">Fast & Flexible <span className="text-accent font-bold">Game Servers.</span></h1>
                    <h2 className="text-2xl font-semibold text-muted pt-3">Investing in your community, one block at a time.<br/> Host with us today and enjoy high performance Hosting.</h2>
                    <div className="flex flex-row flex-wrap text-white space-x-2 md:space-x-4 pt-2">
                      <span className="flex items-center mx-auto"><CpuChipIcon className="size-5 mr-1"/> 3.5Ghz+ EPYC 9654</span>
                      <span className="flex items-center mx-auto"><Cog6ToothIcon className="size-5 mr-1"/> Custom Panel</span>
                      <span className="flex items-center mx-auto"><Square3Stack3DIcon className="size-5 mr-1"/> Raid-10 NVMe SSD Storage</span>
                    </div>
                    <ul id="features" className="list-disc list-inside text-muted text-xl py-3">
                        <li>High Speed, Purpose built Servers across all locations</li>
                        <li>A forever growing collection of supported games</li>
                        <li>Enterprise hardware with great support</li>
                        <li>Global availability of servers, 99.99% SLA guarantee</li>
                    </ul>
                    <div className="flex space-x-3 text-xl text-white pt-5 place-content-center md:place-content-baseline">
                        <a href="/gamehosting" className="px-4 py-2 rounded-md bg-accent hover:bg-[#0160d9] hover:text-white">Get Started</a>
                        <a href="/gamehosting" className="px-4 py-2 rounded-md bg-background hover:bg-backgroundLight hover:text-white">Learn More</a>
                    </div>
                  </div>
                  <img src="/images/slider/gameSlider.png" alt="VPS Icon" className="shadow-md hidden md:block w-2/5" />
                </div>
              </div>
            </li>
            {/* Web Servers */}
            <li className="glide__slide">
              <div className="container">
                <div className="flex flex-col md:flex-row place-content-between items-center text-center md:text-left">
                  <div>
                    <h3 className="text-2xl text-muted pb-1 font-light">Web Servers</h3>
                    <h1 className="text-4xl font-bold text-white">Fast & Flexible <span className="text-accent font-bold">Web Servers</span></h1>
                    <h2 className="text-2xl font-semibold text-muted pt-3">Investing in your community, one block at a time.<br /> Host with us today and enjoy high performance Hosting.</h2>
                    <div className="flex flex-row flex-wrap text-white space-x-2 md:space-x-4 pt-2">
                      <span className="flex items-center mx-auto"><CpuChipIcon className="size-5 mr-1"/> 3.5Ghz+ EPYC 9654</span>
                      <span className="flex items-center mx-auto"><Cog6ToothIcon className="size-5 mr-1"/> Multi Panel</span>
                      <span className="flex items-center mx-auto"><Square3Stack3DIcon className="size-5 mr-1"/> Raid-10 NVMe SSD Storage</span>
                    </div>
                    <ul id="features" className="list-disc list-inside text-muted text-xl py-3">
                      <li>High performance website hosting</li>
                      <li>Great support and reliability</li>
                      <li>Global availability of servers, 99.99% SLA guarantee</li>
                    </ul>
                    <div className="flex space-x-3 text-xl text-white pt-5 place-content-center md:place-content-baseline">
                      <a href="/webhosting" className="px-4 py-2 rounded-md bg-accent hover:bg-[#0160d9] hover:text-white">Get Started</a>
                      <a href="/webhosting" className="px-4 py-2 rounded-md bg-background hover:bg-backgroundLight hover:text-white">Learn More</a>
                    </div>
                  </div>
                  <img src="/images/slider/webSlider.png" alt="WebHost Icon" className="shadow-md hidden md:block w-2/4" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide__arrows hidden md:block" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<" style={{border: 'none'}} aria-label="Left">
                <ArrowLeftIcon className="size-7" />
            </button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">" style={{border: 'none'}} aria-label="Right">
                <ArrowRightIcon className="size-7" />
            </button>
        </div>
      </div>
    );
};

export default GlideCarousel;