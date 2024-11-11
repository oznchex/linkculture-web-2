`use client`

import HomeHeader from '@/components/home/HomeHeader';
import HomeMovieDetail from '@/components/home/detail/HomeMovieDetail';
import HomeFooter from '@/components/home/HomeFooter';


export default function HomeDetailPage() {
  return (
    <>
      <HomeHeader />
      <main className="flex-1 overflow-hidden flex flex-col">
        <HomeMovieDetail />
      </main>
      <HomeFooter />
    </>
  )
}