'use client';

import HomeHeader from '@/components/home/HomeHeader';
import HomeBody from '@/components/home/HomeBody';
import HomeFooter from '@/components/home/HomeFooter';

export default function HomePage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <HomeHeader />
      <main className="flex-1 overflow-hidden">
      <HomeBody />
      </main>
      <HomeFooter />
    </div>
  )
}