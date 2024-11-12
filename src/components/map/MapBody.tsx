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

type PlaceType = {
  id: number;
  name: string;
  category: string;
  label: '관광' | '공연' | '전시' | '운동' | '숙소' | '연극';
  image: string;
  position: { lat: number; lng: number };
};

const MapBody = ({
  width = '100%',
  height = '308px',
  initialCenter = {
    lat: 35.146925,
    lng: 126.840462,
  },
  zoom = 15,
}: MapBodyProps) => {
  const places: PlaceType[] = useMemo(() => [
    {
      id: 1,
      name: "접속하는 몸: 아시아 여성 미술가들",
      category: "[배리어프리 전시]",
      label: '전시',
      image: "/assets/map/barrier_free_art.png",
      position: { lat: 35.183139, lng: 126.885709 }
    },
    {
      id: 2,
      name: "광주 서구 체육 시설",
      category: "[스포츠강좌이용권 사용]",
      label: '전시',
      image: "/assets/map/jonglo_sports.png",
      position: { lat: 35.146925, lng: 126.840462 }
    },
    {
      id: 3,
      name: "국립아시아문화전당",
      category: "[스포츠강좌이용권 사용]",
      label: '전시',
      image: "/assets/map/jonglo_sports.png",
      position: { lat: 35.146781, lng: 126.920251 }
    },
    {
      id: 4,
      name: "풀잎문화센터 서광주지부",
      category: "[스포츠강좌이용권 사용]",
      label: '운동',
      image: "/assets/map/jonglo_sports.png",
      position: { lat: 35.144653, lng: 126.841715 }
    },
  ], []);


  const markerIcons = useMemo(() => ({
    관광: '/assets/map/markers/tourism-marker.png',
    공연: '/assets/map/markers/concert-marker.png',
    전시: '/assets/map/markers/exhibition-marker.png',
    운동: '/assets/map/markers/sports-marker.png',
    숙소: '/assets/map/markers/accommodation-marker.png',
    연극: '/assets/map/markers/performance-marker.png'
  }), []);

  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(initialCenter.lat, initialCenter.lng),
        zoom: zoom,
      };

      const map = new window.naver.maps.Map('map', mapOptions);
      
      places.forEach(place => {
        console.log('Marker URL:', markerIcons[place.label]);

        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(place.position.lat, place.position.lng),
          map: map,
          icon: {
            url: markerIcons[place.label],
            size: new window.naver.maps.Size(48, 64),
            scaledSize: new window.naver.maps.Size(48, 64),
            origin: new window.naver.maps.Point(0, 0),
            anchor: new window.naver.maps.Point(24, 64),
          }
        });

        // 마커 클릭 이벤트 추가
        window.naver.maps.Event.addListener(marker, 'click', () => {
          console.log(`Clicked: ${place.name}`);
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
  }, [initialCenter.lat, initialCenter.lng, zoom, places, markerIcons]);

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