import React, { useEffect, useMemo } from 'react';
import FilterButtons from './FilterButtons';
import Image from 'next/image';

interface MapBodyProps {
  width?: string;
  height?: string;
  initialCenter?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const MapBody = ({
  width = '100%',
  height = '308px',
  initialCenter = {
    lat: 35.146925,
    lng: 126.840462,
  },
  zoom = 15,
}: MapBodyProps) => {
  const places = useMemo(() => [
    {
      id: 1,
      name: "메리어트호텔 전시",
      category: "전시",
      image: "/images/exhibition1.jpg",
      position: { lat: 35.146925, lng: 126.840462 }
    },
    {
      id: 2,
      name: "메리어트호텔 전시",
      category: "전시",
      image: "/images/exhibition1.jpg",
      position: { lat: 35.146925, lng: 126.840462 }
    },
    {
      id: 3,
      name: "메리어트호텔 전시",
      category: "전시",
      image: "/images/exhibition1.jpg",
      position: { lat: 35.146925, lng: 126.840462 }
    },
    // ... 더 많은 장소 데이터
  ], []); // Empty dependency array since this data is static

  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(initialCenter.lat, initialCenter.lng),
        zoom: zoom,
      };

      const map = new window.naver.maps.Map('map', mapOptions);
      
      // 각 장소마다 마커 생성
      places.forEach(place => {
        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(place.position.lat, place.position.lng),
          map: map
        });
      });
    };

    // 스크립트 로드 확인을 위한 인터벌 추가
    const interval = setInterval(() => {
      if (window.naver && window.naver.maps) {
        initializeMap();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [initialCenter.lat, initialCenter.lng, zoom, places]);

  return (
    <div className="h-full flex flex-col">
      <FilterButtons />
      {/* 지도 영역 - 고정 */}
      <div className="relative h-[400px]">
        <div 
          id="map" 
          className="h-full w-full"
        />
      </div>

      {/* 추천 장소 영역 - z-index와 배경색 추가 */}
      <div className="h-[50vh] bg-white flex flex-col relative z-20">
        {/* 제목 - 고정 */}
        <div className="shrink-0 px-5 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <h2 className="text-lg font-bold">17개의 추천 장소</h2>
        </div>
        
        {/* 목록 - 스크롤 가능 */}
        <div className="h-full overflow-y-auto">
          <div className="divide-y divide-gray-100 pb-20">
            {places.map(place => (
              <div key={place.id} className="py-4 px-5">
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">{place.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{place.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBody; 