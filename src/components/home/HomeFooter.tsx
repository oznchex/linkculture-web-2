'use client'

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const menuItems = [
  { path: '/map', label: '지도', icon: '/assets/footer/map.svg', activeIcon: '/assets/footer/map-active.svg' },
  { path: '/scrap', label: '스크랩', icon: '/assets/footer/scrap.svg', activeIcon: '/assets/footer/scrap-active.svg' },
  { path: '/home', label: '홈', icon: '/assets/footer/home.svg', activeIcon: '/assets/footer/home-active.svg' },
  { path: '/community', label: '커뮤니티', icon: '/assets/footer/community.svg', activeIcon: '/assets/footer/community-active.svg' },
  { path: '/myPage', label: '마이', icon: '/assets/footer/myProfile.svg', activeIcon: '/assets/footer/myProfile-active.svg' },
];

export default function HomeFooter() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-[8%] flex flex-col w-full px-2 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-between items-center px-4 py-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <button 
              key={item.path}
              className="flex flex-col items-center gap-1"
              onClick={() => router.push(item.path)}
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
    </div>
  );
}