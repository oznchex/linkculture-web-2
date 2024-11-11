'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeBody() {
  const router = useRouter();

  const bannerImages = [
    {
      src: '/assets/banner/govexpo.png',
      congestion: { type: 'high', text: '혼잡도 높음', icon: '/assets/congestion/high.svg' }
    },
    {
      src: '/assets/banner/pansori.png',
      congestion: { type: 'low', text: '혼잡도 낮음', icon: '/assets/congestion/low.svg' }
    },
    {
      src: '/assets/banner/lotteCinema.png',
      congestion: { type: 'low', text: '혼잡도 낮음', icon: '/assets/congestion/low.svg' }
    },
    {
      src: '/assets/banner/swimming.png',
      congestion: { type: 'high', text: '혼잡도 높음', icon: '/assets/congestion/high.svg' }
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 6초마다 이미지 변경

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const categories = [
    {
      name: '전시·행사',
      icon: '/assets/category/exhibition.svg',
      path: '/home/detail/exhibition_events'
    },
    {
      name: '영화·공연',
      icon: '/assets/category/movie.svg',
      path: '/home/detail/movie_performance'
    },
    {
      name: '체육·경기',
      icon: '/assets/category/sports.svg',
      path: '/home/detail/sports_game'
    },
    {
      name: '관광·명소',
      icon: '/assets/category/travel.svg',
      path: '/home/detail/tour'
    }
  ];

  return (
    <div className="h-full container mx-auto px-4 py-4 flex flex-col">
      <h1 className="text-30px font-bold mb-3 pl-2">관심있는 분야를 클릭해 보세요!</h1>
      
      {/* 카테고리 아이콘 섹션 */}
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push(category.path)}
          >
            <div className="bg-blue-50 p-4 rounded-lg mb-1.5 w-[60px] h-[60px] flex items-center justify-center">
              <Image 
                src={category.icon} 
                alt={category.name} 
                width={28} 
                height={28} 
                className="w-7 h-7" 
              />
            </div>
            <span className="text-sm h-5 flex items-center">{category.name}</span>
          </div>
        ))}
      </div>

      {/* 메인 컨텐츠 카드 */}
      <div className="bg-white rounded-2xl overflow-hidden flex-1 relative px-4 pt-4 pb-3">
        <div className="h-full flex flex-col">
          <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden">
            {bannerImages.map((image, index) => (
              <div key={index} className="relative w-full h-full">
                <div className="absolute top-[13%] left-4 z-10">
                  <div className={`${
                    image.congestion.type === 'high' ? 'bg-pink-100 text-pink-600' :
                    image.congestion.type === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  } text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1`}>
                    <Image 
                      src={image.congestion.icon}
                      alt="congestion"
                      width={12}
                      height={12}
                    />
                    {image.congestion.text}
                  </div>
                </div>
                <Image 
                  src={image.src}
                  alt={`배너 이미지 ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={index === 0}
                  className={`object-contain transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>
          
          <div className="mt-2 px-1">
            <h2 className="text-22px font-bold mb-1">오늘 회원님에게 추천하는 컨텐츠에요!</h2>
            <p className="text-gray-600 text-sm mb-2">
              현재 김대중컨벤션센터에서 2024년 대한민국 정부 박람회가 열리고 있어요! 이외에도 광주비엔날레가..
            </p>
            <Link href="/home/detail" className="block">
              <button className="w-full bg-grey80 text-white py-2 rounded-lg">
                자세히 보기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}