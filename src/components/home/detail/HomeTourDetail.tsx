'use client';

import { type ContentItem, dummyContents } from '@/lib/contents';
import Image from 'next/image';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeDetail() {
  const router = useRouter();
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const [selectedDay, setSelectedDay] = useState('수');

  // 관광 카테고리만 필터링
  const tourContents = dummyContents.filter(
    content => content.category === '관광·명소'
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex-none">
        <header className="mb-6">
          <h1 className="text-xl font-bold mb-2">
            관광·명소에 해당되는 추천 컨텐츠에요!
          </h1>
          <p className="text-gray-600">
            관심있는 항목을 선택하고 예약까지 한 번에 해보세요.
          </p>
        </header>

        <div className="flex justify-between mb-6 border-y py-3">
          {days.map((day, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center cursor-pointer`}
              onClick={() => setSelectedDay(day)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1
                ${day === selectedDay 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600'
                }`}
              >
                <span className="text-lg">{day}</span>
              </div>
              {day === selectedDay && (
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-[80px]">
        <div className="space-y-4">
          {tourContents.map((content, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 border rounded-lg bg-white w-full cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push('/reservation')}
            >
              <div className="w-20 h-28 relative rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={content.thumbnail}
                  alt={content.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="text-blue-500 text-sm mb-1">{content.category}</div>
                <h3 className="font-bold mb-2">{content.title}</h3>
                
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {content.benefits.map((benefit, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {benefit.label}
                    </span>
                  ))}
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {content.points}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src={content.crowdedness === '혼잡도 높음' 
                      ? '/assets/congestion/high.svg' 
                      : '/assets/congestion/low.svg'
                    }
                    alt={content.crowdedness}
                    width={16}
                    height={16}
                  />
                  <span className="text-gray-500 text-sm">{content.crowdedness}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
