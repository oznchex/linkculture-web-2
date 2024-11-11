`use client`

import HomeHeader from '@/components/home/HomeHeader';
import HomeDetailBody from '@/components/home/detail/HomeDetail';
import HomeFooter from '@/components/home/HomeFooter';


export default function HomeDetailPage() {
  return (
    <>
      <HomeHeader />
      <main className="flex-1 overflow-hidden flex flex-col">
        <HomeDetailBody />
      </main>
      <HomeFooter />
    </>
  )
}