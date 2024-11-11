'use client';

import HomeHeader from '@/components/home/HomeHeader';
import HomeBody from '@/components/home/HomeBody';
import HomeFooter from '@/components/home/HomeFooter';

export default function HomePage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </div>
  )
}