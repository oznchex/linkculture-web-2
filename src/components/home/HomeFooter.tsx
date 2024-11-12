'use client'

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import SimpleModal from '../common/modal/SimpleModal';

const menuItems = [
  { path: '/map', label: '지도', icon: '/assets/footer/map.svg', activeIcon: '/assets/footer/map-active.svg' },
  { path: '/scrap', label: '스크랩', icon: '/assets/footer/scrap.svg', activeIcon: '/assets/footer/scrap-active.svg' },
  { path: '/home', label: '홈', icon: '/assets/footer/home.svg', activeIcon: '/assets/footer/home-active.svg' },
  { path: '/community', label: '커뮤니티', icon: '/assets/footer/community.svg', activeIcon: '/assets/footer/community-active.svg' },
  { path: '/group', label: '모임', icon: '/assets/footer/group.svg', activeIcon: '/assets/footer/group-active.svg' },
];

export default function HomeFooter() {
  const router = useRouter();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-[8%] flex flex-col w-full px-2 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-between items-center px-4 py-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <button 
              key={item.path}
              className="flex flex-col items-center gap-1"
              onClick={() => {
                if (item.path === '/scrap') {
                  setIsModalOpen(true);
                } else {
                  router.push(item.path);
                }
              }}
            >
              <Image 
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                width={24}
                height={24}
              />
              <span 
                className={`text-xs ${
                  isActive ? 'text-blue-500' : 'text-gray-600'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
      <SimpleModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}