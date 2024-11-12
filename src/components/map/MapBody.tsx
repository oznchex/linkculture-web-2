import React, { useEffect, useMemo } from 'react';
import BottomSheet from './BottomSheet';
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
  height = '100vh',
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
    <div className="relative w-full h-full">
      <FilterButtons />
      <div 
        id="map" 
        style={{ 
          width: width, 
          height: height,
        }}
      />
      <BottomSheet>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">17개의 추천 장소</h2>
          <div className="grid grid-cols-2 gap-4">
            {places.map(place => (
              <div key={place.id} className="rounded-lg overflow-hidden shadow">
                <Image 
                  src={place.image} 
                  alt={place.name} 
                  width={300}
                  height={128}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-bold">{place.name}</h3>
                  <p className="text-sm text-gray-600">{place.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};

export default MapBody; 