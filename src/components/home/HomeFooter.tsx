import Image from 'next/image';

export default function HomeFooter() {
  return (
    <div className="h-[8%] flex flex-col w-full px-2 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-between items-center px-4 py-2">
        <button className="flex flex-col items-center gap-1">
          <Image 
            src="/assets/footer/map.svg"
            alt="지도"
            width={24}
            height={24}
          />
          <span className="text-xs text-gray-600">지도</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <Image 
src="/assets/footer/scrap.svg"
            alt="스크랩"
            width={24}
            height={24}
          />
          <span className="text-xs text-gray-600">스크랩</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <Image 
src="/assets/footer/home.svg"
            alt="홈"
            width={24}
            height={24}
          />
          <span className="text-xs text-blue-500">홈</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <Image 
src="/assets/footer/community.svg"
            alt="커뮤니티"
            width={24}
            height={24}
          />
          <span className="text-xs text-gray-600">커뮤니티</span>
        </button>
        
        <button className="flex flex-col items-center gap-1">
          <Image 
src="/assets/footer/myProfile.svg"
            alt="마이"
            width={24}
            height={24}
          />
          <span className="text-xs text-gray-600">마이</span>
        </button>
      </nav>
    </div>
  )
}