'use client';

import HomeHeader from '@/components/home/HomeHeader';
import MapBody from '@/components/map/MapBody';
import HomeFooter from '@/components/home/HomeFooter';

export default function MapPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <HomeHeader />
      <main className="flex-1 overflow-hidden">
        <MapBody />
      </main>
      <HomeFooter/>
    </div>
  )
}