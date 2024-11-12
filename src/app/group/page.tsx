'use client';

import HomeHeader from '@/components/home/HomeHeader';
import GroupBody from '@/components/group/GroupBody';
import HomeFooter from '@/components/home/HomeFooter';

export default function CommunityPage() {
  return (
    <div className="h-screen flex flex-col">
      <HomeHeader />
      <main className="flex-1 overflow-hidden">
        <GroupBody />
      </main>
      <HomeFooter />
    </div>
  )
}