`use client`

import HomeHeader from '@/components/home/HomeHeader';
import HomeTourDetail from '@/components/home/detail/HomeTourDetail';
import HomeFooter from '@/components/home/HomeFooter';


export default function HomeDetailPage() {
  return (
    <>
      <HomeHeader />
      <main className="flex-1 overflow-hidden flex flex-col">
        <HomeTourDetail />
      </main>
      <HomeFooter />
    </>
  )
}