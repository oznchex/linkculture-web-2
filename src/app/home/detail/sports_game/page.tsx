`use client`

import HomeHeader from '@/components/home/HomeHeader';
import HomeSportsDetail from '@/components/home/detail/HomeSportsDetail';
import HomeFooter from '@/components/home/HomeFooter';


export default function HomeDetailPage() {
  return (
    <>
      <HomeHeader />
      <main className="flex-1 overflow-hidden flex flex-col">
        <HomeSportsDetail />
      </main>
      <HomeFooter />
    </>
  )
}