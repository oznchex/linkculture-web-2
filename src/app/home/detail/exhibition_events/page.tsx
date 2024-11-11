`use client`

import HomeHeader from '@/components/home/HomeHeader';
import HomeExhibitionDetail from '@/components/home/detail/HomeExhibitionDetail';
import HomeFooter from '@/components/home/HomeFooter';


export default function HomeDetailPage() {
  return (
    <>
      <HomeHeader />
      <main className="flex-1 overflow-hidden flex flex-col">
        <HomeExhibitionDetail />
      </main>
      <HomeFooter />
    </>
  )
}