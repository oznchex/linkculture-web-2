'use client';

import HomeHeader from '@/components/home/HomeHeader';
import CommunityBody from '@/components/community/CommunityBody';
import HomeFooter from '@/components/home/HomeFooter';

export default function CommunityPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <HomeHeader />
      <main className="flex-1 overflow-hidden">
        <CommunityBody />
      </main>
      <HomeFooter />
    </div>
  )
}