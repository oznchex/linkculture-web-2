'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeHeader() {
  return (
    <div className="h-[8%] flex flex-col w-full items-center pb-2 pl-2 shadow-sm mt-2">
        <div className="flex w-full items-center justify-between px-2 h-[72px]">
        <Link href="/home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="링컬처 로고"
            width={24}
            height={24}
          />
        </Link>
        {/* Search Bar */}
        <div className="flex-1 mx-3">
          <div className="relative flex items-center">
            <div className="absolute left-4">
              <Image
                src="/assets/header/search.png"
                alt="검색"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              placeholder="보고싶은 전시를 검색해보세요!"
              className="w-full h-[48px] pl-12 pr-4 rounded-full bg-gray-50 border border-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:border-blue60 focus:ring-1 focus:ring-blue60"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2">
            <Image
              src="/assets/header/bell.png"
              alt="알림"
              width={20}
              height={20}
            />
          </button>
          <button className="p-2">
            <Image
              src="/assets/header/menu.svg"
              alt="메뉴"
              width={20}
              height={20}
            />
          </button>
        </div>
        </div>
    </div>
  );
}
