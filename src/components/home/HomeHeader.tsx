'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SimpleModal from '../common/modal/SimpleModal';

export default function HomeHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div className="flex w-full items-center h-14 px-4 pt-1.5">
        <Link href="/home" className="flex items-center w-10 h-10 justify-center">
          <Image
            src="/assets/header/logo.svg"
            alt="링컬처 로고"
            width={28}
            height={28}
            className="w-7 h-7"
          />
        </Link>
        {/* Search Bar */}
        <div className="flex-1 min-w-0 mx-3">
          <div className="relative flex items-center w-full">
            <div className="absolute left-4 w-5 h-5 flex items-center justify-center">
              <Image
                src="/assets/header/search.svg"
                alt="검색"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </div>
            <div className="w-full h-11 pl-12 pr-4 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-400 flex items-center">
              <span className="truncate min-w-0">전시를 검색해보세요</span>
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button 
            className="w-10 h-10 flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/assets/header/bell.svg"
              alt="알림"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
          <button 
            className="w-10 h-10 flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/assets/header/menu.svg"
              alt="메뉴"
              width={24}
              height={24}
              className="w-7 h-7"
            />
          </button>
        </div>
      </div>

      <SimpleModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        post={null}
      />
    </header>
  );
}
