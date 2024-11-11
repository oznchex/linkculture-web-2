`use client`

import BackButton from '@/components/common/button/BackButton2';
import HomeMovieDetail from '@/components/home/detail/HomeMovieDetail';
import HomeFooter from '@/components/home/HomeFooter';


export default function HomeDetailPage() {
  return (
    <>
        <header className="sticky top-0 z-10 bg-white">
        <div className="flex items-center h-12 px-4">
          <BackButton />
        </div>
      </header>
      <main className="flex-1 overflow-hidden flex flex-col">
        <HomeMovieDetail />
      </main>
      <HomeFooter />
    </>
  )
}