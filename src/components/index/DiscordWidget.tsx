'use client';

import React, { useState, useEffect } from 'react';
import  WidgetBot from "@widgetbot/react-embed";

export default function DiscordWidget() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
      <div className="container py-16 text-center">
      <div className="flex flex-col">
        <h1 className="text-4xl text-white text-center pt-12">Join our Discord Community!</h1>
        <p className="text-muted text-center pt-2 pb-5 text-xl">Join our Discord server to receive the latest news and promotions.</p>
        <div className="hidden md:block">
          <WidgetBot
            server="1202323097282154556"
            channel="1270510887706562642"
            width="1100"
            height="700" 
            className="mx-auto"
          />
        </div>
        <button className="bg-[#36393F] hover:bg-[#2E3036] hover:text-white p-2 rounded-b-md text-white w-fit md:w-[1100px] mx-auto text-xl border-t-2 border-borders hover:cursor-pointer">Join Discord</button>
      </div>
    </div>
  )
}
