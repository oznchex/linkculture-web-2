import React from 'react';
import Image from 'next/image';

const categories = [
  { id: 1, name: '전시/공연', icon: "/assets/group/group_exhibit.svg" },
  { id: 2, name: '스포츠/레저', icon: '/assets/group/group_sports.svg' },
  { id: 3, name: '숙박/숙소', icon: '/assets/group/group_lodge.svg' },
  { id: 4, name: '여행/관광', icon: '/assets/group/group_travel.svg' },
  { id: 5, name: '항공/해외', icon: '/assets/group/group_airplane.svg' },
];

const meetups = [
  {
    id: 1,
    label: '행사',
    title: '대한민국 정부박람회 같이 가실 분!',
    date: '11/14(목) 오후 14시',
    author: '수주',
    participants: '1/5',
    image: '/assets/banner/govexpo.png'
  },
  {
    id: 2,
    label: '반캉스',
    title: '[반캉스] 오늘 대덕시장 상봉법...',
    date: '11/13(수) 오후 18시',
    author: 'kdu',
    participants: '3/6',
    image: '/assets/group/big_city_love.png'
  },
  {
    id: 3,
    label: '전시 관람',
    title: '주말에 전시 관람하러 가실 분 구함',
    date: '11/17(일) 오후 10시',
    author: '이진',
    participants: '2/3',
    image: '/assets/group/memory_exhibit.png'
  },
  {
    id: 4,
    label: '전시 관람',
    title: '주말에 전시 관람하러 가실 분 구함',
    date: '11/17(일) 오후 10시',
    author: '이진',
    participants: '2/3',
    image: '/assets/group/memory_exhibit.png'
  },
];

export default function GroupBody() {
  return (
    <div className="h-full flex flex-col">
      {/* Categories */}
      <div className="flex justify-between px-4 py-4">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Image 
                src={category.icon}
                alt={category.name}
                width={24}
                height={24}
              />
            </div>
            <span className="text-[9px] text-gray-600">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Monthly Featured */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-semibold">
          🔥 11월 2주차 친목 모임
        </h2>
      </div>

      {/* Meetup List */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="space-y-4 pb-20">
          {meetups.map((meetup) => (
            <div key={meetup.id} className="bg-white p-4 rounded-2xl shadow-sm">
              <div className="flex gap-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={meetup.image}
                    alt={meetup.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-0.5 mb-1.5 text-sm text-blue-600 bg-blue-50 rounded-full">
                    {meetup.label}
                  </span>
                  <h3 className="text-base font-bold mb-2">{meetup.title}</h3>
                  <div className="text-gray-500 space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400">광주 서구</span>
                      <span className="text-gray-300">|</span>
                      <span>{meetup.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1.5">
                        <div className="relative w-5 h-5">
                          <Image
                            src="/default_profile.svg"
                            alt={meetup.author}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <span>{meetup.author}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                        <span>{meetup.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
