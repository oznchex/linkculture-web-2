import React, { useState, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import Image from 'next/image';

type SheetPosition = 'default' | 'middle' | 'full';

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const [sheetPosition, setSheetPosition] = useState<SheetPosition>('default');
  const sheetRef = useRef<HTMLDivElement>(null);

  const positions = {
    default: 800,    // 기본 위치 (미니멈)
    middle: -50,  // 중간 위치
    full: -50    // 최대 펼침 위치
  } as const;

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    const velocity = info.velocity.y;
    const currentPosition = info.point.y;

    if (velocity < -200) {
      // 빠르게 위로 스와이프
      setSheetPosition('full');
    } else if (velocity > 200) {
      // 빠르게 아래로 스와이프
      setSheetPosition('default');
    } else {
      // 천천히 드래그할 때는 위치 기반으로 결정
      if (currentPosition < positions.middle) {
        setSheetPosition('full');
      } else if (currentPosition < positions.default) {
        setSheetPosition('middle');
      } else {
        setSheetPosition('default');
      }
    }
  };

  return (
    <motion.div
      ref={sheetRef}
      className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[20px] shadow-lg z-50"
      initial={{ y: 0 }}
      animate={{ y: positions[sheetPosition] }}
      drag="y"
      dragConstraints={{ top: positions.full, bottom: positions.default }}
      onDragEnd={handleDragEnd}
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
    >
      {/* 드래그 핸들 */}
      <div className="w-full flex justify-center py-3">
        <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
      </div>

      {/* 헤더 영역 */}
      <div className="px-4 mb-4">
        <h2 className="text-lg font-bold">17개의 추천 장소</h2>
      </div>

      {/* 스크롤 가능한 컨텐츠 영역 */}
      <div className="px-4 overflow-y-auto" style={{ height: `calc(100vh - ${positions[sheetPosition]}px)` }}>
        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 gap-4 pb-20">
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="flex items-center space-x-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/merryartree.jpg"
                  alt="메리어트리 전시"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">메리어트리 전시</h3>
                <p className="text-sm text-gray-600">전속하는 몸-아시아 여성 미술가들</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="flex items-center space-x-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/sports.jpg"
                  alt="스포츠컴플렉스"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">스포츠컴플렉스</h3>
                <p className="text-sm text-gray-600">종로구 체육 시설</p>
              </div>
            </div>
          </div>
          
          {/* 추가 카드들... */}
        </div>
      </div>
    </motion.div>
  );
};

export default BottomSheet; 