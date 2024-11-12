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
      name: "접속하는 몸: 아시아 여성 미술가들",
      category: "[배리어프리 전시]",
      image: "/assets/map/barrier_free_art.png",
      position: { lat: 35.146925, lng: 126.840462 }
    },
    {
      id: 2,
      name: "종로구 체육 시설",
      category: "[스포츠강좌이용권 사용]",
      image: "/assets/map/jonglo_sports.png",
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
      <div className="flex justify-center items-center">
        <FilterButtons/>
      </div>
      {/* 지도 영역 - 고정 */}
      <div className="relative h-[420px]">
        <div 
          id="map" 
          className="h-full w-full"
        />
      </div>

      {/* 추천 장소 영역 - z-index와 배경색 추가 */}
      <div className="h-[50vh] bg-white flex flex-col relative z-20">
        {/* 제목 - 고정 */}
        <div className="shrink-0 px-5 py-2 bg-white sticky top-0 z-10">
          <h2 className="text-[0.92644rem] font-bold text-[#5B5B5B] font-pretendard leading-[137.023%]">
            17개의 추천 장소
          </h2>
        </div>
        
        {/* 목록 - 스크롤 가능 */}
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-2 gap-4 px-4 pb-20">
            {places.map(place => (
              <div key={place.id} className="bg-white rounded-lg overflow-hidden">
                {/* 이미지 컨테이너 높이 조정 및 aspect ratio 설정 */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 430px) 50vw, 200px"
                  />
                </div>
                {/* 텍스트 영역 - 좌측 정렬, 상하 패딩만 적용 */}
                <div className="py-2">
                  <h3 className="text-[12px] font-medium text-gray-900 line-clamp-2 text-left">{place.category}</h3>
                  <p className="text-[12px] text-gray-500 mt-1 text-left">{place.name}</p>
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