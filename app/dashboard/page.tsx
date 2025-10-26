'use client';

import { useEffect, useState } from 'react';
import LatestPodcast from './components/PodcastCard'; // Assuming this is in the same folder
import CalendarCard from './components/CalendarCard'; // Assuming this is in the same folder
import SignIn from 'app/components/signIN'

export default function App() {
    return (
        <body className='wide-layout'>
      <div className="wide-layout max-w-none px-4 min-h-screen bg-[#0f1117] text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <LatestPodcast />
            <CalendarCard />
            <SignIn />
          </div>
  
          {/* Middle column */}
          <div className="flex flex-col gap-6 md:col-span-1 lg:col-span-2">
            <CalendarCard />
            <CalendarCard />
          </div>
  
          {/* Right column */}
          <div className="flex flex-col gap-6">
            <CalendarCard />
            <CalendarCard />
          </div>
        </div>
      </div>
      </body>
    );
  }

  