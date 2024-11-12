import React, { useEffect, useMemo, useState } from 'react';
import FilterButtons from './FilterButtons';
import Image from 'next/image';
import SimpleModal from '../common/modal/SimpleModal';

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
  label: '관광' | '공연' | '전시' | '운동' | '숙소' | '연극' | '관광';
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
  zoom = 13,
}: MapBodyProps) => {
  const places: PlaceType[] = useMemo(() => [
    {
        "id": 1,
        "name": "5.18기념공원",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15574851,
            "lng": 126.858584
        }
    },
    {
        "id": 2,
        "name": "5.18기념문화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15830536,
            "lng": 126.857556
        }
    },
    {
        "id": 3,
        "name": "5.18기념문화회관민주홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15830536,
            "lng": 126.857556
        }
    },
    {
        "id": 4,
        "name": "5.18민주화운동기록관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14956323,
            "lng": 126.916756
        }
    },
    {
        "id": 5,
        "name": "5.18역사문화기록관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14835809,
            "lng": 126.91873
        }
    },
    {
        "id": 6,
        "name": "가나엔터프라이즈",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15071637,
            "lng": 126.83543
        }
    },
    {
        "id": 7,
        "name": "가산팜스테이",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13022653,
            "lng": 126.676577
        }
    },
    {
        "id": 8,
        "name": "가톨릭갤러리현",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1502428,
            "lng": 126.86849
        }
    },
    {
        "id": 9,
        "name": "고려인역사문화전시관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17186659,
            "lng": 126.80773
        }
    },
    {
        "id": 10,
        "name": "고령친화종합체험관",
        "category": "",
        "label": "공연",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.09780824,
            "lng": 126.896007
        }
    },
    {
        "id": 11,
        "name": "고싸움놀이테마파크",
        "category": "",
        "label": "공연",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.06974381,
            "lng": 126.837517
        }
    },
    {
        "id": 12,
        "name": "고싸움놀이테마파크고싸움전수관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.06974381,
            "lng": 126.837517
        }
    },
    {
        "id": 13,
        "name": "골프아카데미QED 하남메가점",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16289525,
            "lng": 126.81166
        }
    },
    {
        "id": 14,
        "name": "공연일번지",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14923542,
            "lng": 126.915747
        }
    },
    {
        "id": 15,
        "name": "공항화랑",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13938862,
            "lng": 126.810912
        }
    },
    {
        "id": 16,
        "name": "광산구청소년수련관",
        "category": "",
        "label": "공연",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22222807,
            "lng": 126.844251
        }
    },
    {
        "id": 17,
        "name": "광산농악전수관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.19123284,
            "lng": 126.816333
        }
    },
    {
        "id": 18,
        "name": "광산온에어행복오네요",
          "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14050104,
            "lng": 126.799232
        }
    },
    {
        "id": 19,
        "name": "광주공연마루",
        "category": "",
        "label": "공연",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1557731,
            "lng": 126.839745
        }
    },
    {
        "id": 20,
        "name": "광주광역시문화원연합회",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13364608,
            "lng": 126.87483
        }
    },
    {
        "id": 21,
        "name": "광주광역시염주종합체육관",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13663552,
            "lng": 126.879169
        }
    },
    {
        "id": 22,
        "name": "광주교육대학교박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16471468,
            "lng": 126.925697
        }
    },
    {
        "id": 23,
        "name": "광주기아챔피언스필드",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16942496,
            "lng": 126.888805
        }
    },
    {
        "id": 24,
        "name": "광주김치박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.10966818,
            "lng": 126.866653
        }
    },
    {
        "id": 25,
        "name": "광주김치타운",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.10966818,
            "lng": 126.866653
        }
    },
    {
        "id": 26,
        "name": "광주대호심미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.10590365,
            "lng": 126.89617
        }
    },
    {
        "id": 27,
        "name": "광주도예원센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12386228,
            "lng": 126.883096
        }
    },
    {
        "id": 28,
        "name": "광주동학농민혁명기념공원",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08891684,
            "lng": 126.859502
        }
    },
    {
        "id": 29,
        "name": "광주디엠홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1473531,
            "lng": 126.913302
        }
    },
    {
        "id": 30,
        "name": "광주명장의전당",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14677706,
            "lng": 126.84048
        }
    },
    {
        "id": 31,
        "name": "광주문학관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17909256,
            "lng": 126.940496
        }
    },
    {
        "id": 32,
        "name": "광주문화예술회관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17820945,
            "lng": 126.881993
        }
    },
    {
        "id": 33,
        "name": "광주백범기념관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13113791,
            "lng": 126.926316
        }
    },
    {
        "id": 34,
        "name": "광주비엔날레",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18309828,
            "lng": 126.889209
        }
    },
    {
        "id": 35,
        "name": "광주상무시민공원에너지파크전시관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15624835,
            "lng": 126.842193
        }
    },
    {
        "id": 36,
        "name": "광주서구복합커뮤니티센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13046639,
            "lng": 126.880602
        }
    },
    {
        "id": 37,
        "name": "광주시립미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18323305,
            "lng": 126.885736
        }
    },
    {
        "id": 38,
        "name": "광주시립사진전시관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18323305,
            "lng": 126.885736
        }
    },
    {
        "id": 39,
        "name": "광주시립수목원",
          "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08802355,
            "lng": 126.879495
        }
    },
    {
        "id": 40,
        "name": "광주아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14697472,
            "lng": 126.915098
        }
    },
    {
        "id": 41,
        "name": "광주야외음악당",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16009941,
            "lng": 126.851462
        }
    },
    {
        "id": 42,
        "name": "광주어린이공원",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.21842546,
            "lng": 126.854318
        }
    },
    {
        "id": 43,
        "name": "광주어린이대공원",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18441617,
            "lng": 126.888436
        }
    },
    {
        "id": 44,
        "name": "광주여성문화회관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1533934,
            "lng": 126.841096
        }
    },
    {
        "id": 45,
        "name": "광주역사민속박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18441617,
            "lng": 126.888436
        }
    },
    {
        "id": 46,
        "name": "광주월드컵경기장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13364608,
            "lng": 126.87483
        }
    },
    {
        "id": 47,
        "name": "광주월드컵경기장보조경기장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13364608,
            "lng": 126.87483
        }
    },
    {
        "id": 48,
        "name": "광주음악산업진흥센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1426119,
            "lng": 126.914907
        }
    },
    {
        "id": 49,
        "name": "광주정보문화산업진흥원",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14827453,
            "lng": 126.917651
        }
    },
    {
        "id": 50,
        "name": "광주클럽네버마인드",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15282464,
            "lng": 126.919449
        }
    },
    {
        "id": 51,
        "name": "광주통일관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15063865,
            "lng": 126.875898
        }
    },
    {
        "id": 52,
        "name": "광주패밀리랜드",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22431388,
            "lng": 126.894242
        }
    },
    {
        "id": 53,
        "name": "광주패밀리랜드사계절썰매장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22431388,
            "lng": 126.894242
        }
    },
    {
        "id": 54,
        "name": "광주학생독립운동기념역사관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15234606,
            "lng": 126.907048
        }
    },
    {
        "id": 55,
        "name": "광주학생독립운동기념회관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14058722,
            "lng": 126.865021
        }
    },
    {
        "id": 56,
        "name": "광주학생독립운동역사관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15234606,
            "lng": 126.907048
        }
    },
    {
        "id": 57,
        "name": "광주호호수생태원",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18394899,
            "lng": 126.999142
        }
    },
    {
        "id": 58,
        "name": "광주ACEFAIR",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14677706,
            "lng": 126.84048
        }
    },
    {
        "id": 59,
        "name": "광주FC축구전용구장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13364608,
            "lng": 126.87483
        }
    },
    {
        "id": 60,
        "name": "광주FC홈구장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13364608,
            "lng": 126.87483
        }
    },
    {
        "id": 61,
        "name": "국립5.18민주묘지",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.23576619,
            "lng": 126.939254
        }
    },
    {
        "id": 62,
        "name": "국립광주박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18965658,
            "lng": 126.883951
        }
    },
    {
        "id": 63,
        "name": "국립아시아문화전당홍보관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1470573,
            "lng": 126.920031
        }
    },
    {
        "id": 64,
        "name": "국윤미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13189236,
            "lng": 126.936521
        }
    },
    {
        "id": 65,
        "name": "국제광산업전시회",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14677706,
            "lng": 126.84048
        }
    },
    {
        "id": 66,
        "name": "국제기후환경산업전",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14677706,
            "lng": 126.84048
        }
    },
    {
        "id": 67,
        "name": "국제문화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17137127,
            "lng": 126.905597
        }
    },
    {
        "id": 68,
        "name": "굿마당",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22333206,
            "lng": 126.835407
        }
    },
    {
        "id": 69,
        "name": "궁동예술극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15009066,
            "lng": 126.918156
        }
    },
    {
        "id": 70,
        "name": "궁동예술두레마당",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15005154,
            "lng": 126.917886
        }
    },
    {
        "id": 71,
        "name": "금곡팜스테이",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17041589,
            "lng": 126.996703
        }
    },
    {
        "id": 72,
        "name": "금봉미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17956429,
            "lng": 126.940408
        }
    },
    {
        "id": 73,
        "name": "금융박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15482697,
            "lng": 126.912881
        }
    },
    {
        "id": 74,
        "name": "기분좋은극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15491016,
            "lng": 126.848878
        }
    },
    {
        "id": 75,
        "name": "기아축구장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16120115,
            "lng": 126.867887
        }
    },
    {
        "id": 76,
        "name": "김남주기념홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17388133,
            "lng": 126.911145
        }
    },
    {
        "id": 77,
        "name": "김냇과3",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15428758,
            "lng": 126.852233
        }
    },
    {
        "id": 78,
        "name": "김대중컨벤션센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14677706,
            "lng": 126.84048
        }
    },
    {
        "id": 79,
        "name": "김대중컨벤션제2전시장",
          "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14953575,
            "lng": 126.838298
        }
    },
    {
        "id": 80,
        "name": "김영재골프클래스",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.21347997,
            "lng": 126.875612
        }
    },
    {
        "id": 81,
        "name": "꼬마농부상상학교",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18048939,
            "lng": 126.72091
        }
    },
    {
        "id": 82,
        "name": "남광주풀잎화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13688772,
            "lng": 126.901803
        }
    },
    {
        "id": 83,
        "name": "남구문화원",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12206372,
            "lng": 126.917405
        }
    },
    {
        "id": 84,
        "name": "남구종합문화예술회관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12206372,
            "lng": 126.917405
        }
    },
    {
        "id": 85,
        "name": "남도향토음식박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.20175126,
            "lng": 126.898673
        }
    },
    {
        "id": 86,
        "name": "너릿재유아숲공원",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08031021,
            "lng": 126.953538
        }
    },
    {
        "id": 87,
        "name": "노의웅미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08865601,
            "lng": 126.865167
        }
    },
    {
        "id": 88,
        "name": "농성문화의집",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.150379,
            "lng": 126.890221
        }
    },
    {
        "id": 89,
        "name": "다락클래식음악감상실",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13322672,
            "lng": 126.92933
        }
    },
    {
        "id": 90,
        "name": "대금전시장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14941623,
            "lng": 126.923196
        }
    },
    {
        "id": 91,
        "name": "대동갤러리",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14976476,
            "lng": 126.917007
        }
    },
    {
        "id": 92,
        "name": "대촌전통문화커뮤니티센터",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08572261,
            "lng": 126.866889
        }
    },
    {
        "id": 93,
        "name": "대한골프교실",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15260431,
            "lng": 126.910411
        }
    },
    {
        "id": 94,
        "name": "대한민국과학기술연차대회",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14677706,
            "lng": 126.84048
        }
    },
    {
        "id": 95,
        "name": "동곡미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15386307,
            "lng": 126.77687
        }
    },
    {
        "id": 96,
        "name": "동산아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16057564,
            "lng": 126.879873
        }
    },
    {
        "id": 97,
        "name": "드맹아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14407646,
            "lng": 126.913789
        }
    },
    {
        "id": 98,
        "name": "드영미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13429786,
            "lng": 126.953481
        }
    },
    {
        "id": 99,
        "name": "디지페스타",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18309828,
            "lng": 126.889209
        }
    },
    {
        "id": 100,
        "name": "무등갤러리",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15009066,
            "lng": 126.918156
        }
    },
    {
        "id": 101,
        "name": "무등산국립공원",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13006029,
            "lng": 126.993528
        }
    },
    {
        "id": 102,
        "name": "무등현대미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13418204,
            "lng": 126.953724
        }
    },
    {
        "id": 103,
        "name": "문화공간한옥",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12999717,
            "lng": 126.940477
        }
    },
    {
        "id": 104,
        "name": "미로극장2",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15009066,
            "lng": 126.918156
        }
    },
    {
        "id": 105,
        "name": "민들레소극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14967178,
            "lng": 126.919068
        }
    },
    {
        "id": 106,
        "name": "민들레소극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15087389,
            "lng": 126.922742
        }
    },
    {
        "id": 107,
        "name": "민주인권평화컴플렉스",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18715559,
            "lng": 126.93026
        }
    },
    {
        "id": 108,
        "name": "베스트풋살",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18836702,
            "lng": 126.856384
        }
    },
    {
        "id": 109,
        "name": "보라매축구공원",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14059532,
            "lng": 126.82343
        }
    },
    {
        "id": 110,
        "name": "본량리틀야구장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18048939,
            "lng": 126.72091
        }
    },
    {
        "id": 111,
        "name": "북구문화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.20134343,
            "lng": 126.873852
        }
    },
    {
        "id": 112,
        "name": "북구문화원",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17285434,
            "lng": 126.913652
        }
    },
    {
        "id": 113,
        "name": "분청사기전시실",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16742729,
            "lng": 126.998291
        }
    },
    {
        "id": 114,
        "name": "비움박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15040656,
            "lng": 126.920277
        }
    },
    {
        "id": 115,
        "name": "빛고을공예창작촌",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08572261,
            "lng": 126.866889
        }
    },
    {
        "id": 116,
        "name": "빛고을국민안전체험관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1886625,
            "lng": 126.916734
        }
    },
    {
        "id": 117,
        "name": "빛고을국악전수관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.131965,
            "lng": 126.859814
        }
    },
    {
        "id": 118,
        "name": "빛고을농촌테마공원",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08429468,
            "lng": 126.867986
        }
    },
    {
        "id": 119,
        "name": "빛고을시민문화회관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14790588,
            "lng": 126.907897
        }
    },
    {
        "id": 120,
        "name": "빛고을아트스페이스",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14790588,
            "lng": 126.907897
        }
    },
    {
        "id": 121,
        "name": "빛고을CC",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.10033271,
            "lng": 126.899116
        }
    },
    {
        "id": 122,
        "name": "상무시민공원",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1533934,
            "lng": 126.841096
        }
    },
    {
        "id": 123,
        "name": "상무시민공원상무운동장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15261084,
            "lng": 126.840961
        }
    },
    {
        "id": 124,
        "name": "상무풋살",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16528352,
            "lng": 126.849957
        }
    },
    {
        "id": 125,
        "name": "상상드론플레이존",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22431388,
            "lng": 126.894242
        }
    },
    {
        "id": 126,
        "name": "새미래전시관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14562243,
            "lng": 126.872284
        }
    },
    {
        "id": 127,
        "name": "서구문화원",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.131965,
            "lng": 126.859814
        }
    },
    {
        "id": 128,
        "name": "성산수족관",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13967625,
            "lng": 126.894603
        }
    },
    {
        "id": 129,
        "name": "세계카메라영화박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15236368,
            "lng": 126.924052
        }
    },
    {
        "id": 130,
        "name": "소촌아트팩토리",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1526623,
            "lng": 126.790882
        }
    },
    {
        "id": 131,
        "name": "송산유원지",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16006743,
            "lng": 126.736214
        }
    },
    {
        "id": 132,
        "name": "승촌보문화관승촌보축구장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.06491807,
            "lng": 126.756834
        }
    },
    {
        "id": 133,
        "name": "시화문화마을문화관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17909256,
            "lng": 126.940496
        }
    },
    {
        "id": 134,
        "name": "신창동유적선사체험학습관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.19494863,
            "lng": 126.848478
        }
    },
    {
        "id": 135,
        "name": "신품엔진전시장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15893853,
            "lng": 126.910543
        }
    },
    {
        "id": 136,
        "name": "신화스포디움",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.20371065,
            "lng": 126.813987
        }
    },
    {
        "id": 137,
        "name": "쌍촌청소년문화의집",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1556736,
            "lng": 126.862019
        }
    },
    {
        "id": 138,
        "name": "씨디아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16901936,
            "lng": 126.903989
        }
    },
    {
        "id": 139,
        "name": "씨어터연바람",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15355054,
            "lng": 126.915015
        }
    },
    {
        "id": 140,
        "name": "씨어터연바람",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15106319,
            "lng": 126.922896
        }
    },
    {
        "id": 141,
        "name": "아르코공연연습센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1526623,
            "lng": 126.790882
        }
    },
    {
        "id": 142,
        "name": "아카데미QED",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17926782,
            "lng": 126.805877
        }
    },
    {
        "id": 143,
        "name": "양동문화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15390747,
            "lng": 126.902558
        }
    },
    {
        "id": 144,
        "name": "양림미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14055371,
            "lng": 126.912967
        }
    },
    {
        "id": 145,
        "name": "양림쌀롱여행자라운지",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14113254,
            "lng": 126.914326
        }
    },
    {
        "id": 146,
        "name": "어등산CC",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1746968,
            "lng": 126.773063
        }
    },
    {
        "id": 147,
        "name": "어린이과학관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22990781,
            "lng": 126.84987
        }
    },
    {
        "id": 148,
        "name": "어린이극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14644086,
            "lng": 126.919889
        }
    },
    {
        "id": 149,
        "name": "어비슨기념관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13795134,
            "lng": 126.915196
        }
    },
    {
        "id": 150,
        "name": "어울림남구",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.08909386,
            "lng": 126.846127
        }
    },
    {
        "id": 151,
        "name": "어울림텃밭학교",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17557351,
            "lng": 126.835061
        }
    },
    {
        "id": 152,
        "name": "에콜리안광산CC",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.10683964,
            "lng": 126.741809
        }
    },
    {
        "id": 153,
        "name": "연진회미술원",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13250587,
            "lng": 126.939076
        }
    },
    {
        "id": 154,
        "name": "영산강문화관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.06577435,
            "lng": 126.761223
        }
    },
    {
        "id": 155,
        "name": "영상복합문화관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14692275,
            "lng": 126.922274
        }
    },
    {
        "id": 156,
        "name": "예린소극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1499837,
            "lng": 126.918725
        }
    },
    {
        "id": 157,
        "name": "예술극장통",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14808508,
            "lng": 126.912651
        }
    },
    {
        "id": 158,
        "name": "우제길미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13180762,
            "lng": 126.943043
        }
    },
    {
        "id": 159,
        "name": "원당산유아숲체험원",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.19123284,
            "lng": 126.816333
        }
    },
    {
        "id": 160,
        "name": "원당산전망대",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.19123284,
            "lng": 126.816333
        }
    },
    {
        "id": 161,
        "name": "유니버설문화원",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16232122,
            "lng": 126.923969
        }
    },
    {
        "id": 162,
        "name": "유스퀘어문화관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16057564,
            "lng": 126.879873
        }
    },
    {
        "id": 163,
        "name": "은암미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15002625,
            "lng": 126.920643
        }
    },
    {
        "id": 164,
        "name": "의재미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12937059,
            "lng": 126.967391
        }
    },
    {
        "id": 165,
        "name": "이강하미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13690726,
            "lng": 126.915665
        }
    },
    {
        "id": 166,
        "name": "이마트문화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16000626,
            "lng": 126.808579
        }
    },
    {
        "id": 167,
        "name": "이지골프스쿨",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18276299,
            "lng": 126.80956
        }
    },
    {
        "id": 168,
        "name": "장미네공방",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.13401723,
            "lng": 126.861385
        }
    },
    {
        "id": 169,
        "name": "전남대병원문화관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14287984,
            "lng": 126.91974
        }
    },
    {
        "id": 170,
        "name": "전남대학교박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17388133,
            "lng": 126.911145
        }
    },
    {
        "id": 171,
        "name": "전통문화관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1334851,
            "lng": 126.951404
        }
    },
    {
        "id": 172,
        "name": "조선대학미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14465855,
            "lng": 126.930934
        }
    },
    {
        "id": 173,
        "name": "주안미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15337504,
            "lng": 126.915658
        }
    },
    {
        "id": 174,
        "name": "중외공원",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18309828,
            "lng": 126.889209
        }
    },
    {
        "id": 175,
        "name": "지니아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14871652,
            "lng": 126.922233
        }
    },
    {
        "id": 176,
        "name": "지산유원지",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14927244,
            "lng": 126.948097
        }
    },
    {
        "id": 177,
        "name": "지역문화관광연구소",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17748657,
            "lng": 126.929188
        }
    },
    {
        "id": 178,
        "name": "진월3D골프",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.11884016,
            "lng": 126.896395
        }
    },
    {
        "id": 179,
        "name": "진월복합운동장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.11330762,
            "lng": 126.905725
        }
    },
    {
        "id": 180,
        "name": "창암마을",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.21073561,
            "lng": 126.775014
        }
    },
    {
        "id": 181,
        "name": "천제단",
        "category": "",
        "label": "관광",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12539538,
            "lng": 126.977679
        }
    },
    {
        "id": 182,
        "name": "천칭자리",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15113234,
            "lng": 126.925381
        }
    },
    {
        "id": 183,
        "name": "첨단겨자씨문화센터",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.21480657,
            "lng": 126.85315
        }
    },
    {
        "id": 184,
        "name": "첨단그린빌리지",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.22378186,
            "lng": 126.835624
        }
    },
    {
        "id": 185,
        "name": "첨단야구장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.20261793,
            "lng": 126.852756
        }
    },
    {
        "id": 186,
        "name": "청춘가람",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17289725,
            "lng": 126.916489
        }
    },
    {
        "id": 187,
        "name": "청춘극장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.11071371,
            "lng": 126.877804
        }
    },
    {
        "id": 188,
        "name": "충장아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.14729142,
            "lng": 126.918453
        }
    },
    {
        "id": 189,
        "name": "캘러웨이스크린골프연습장",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.2157815,
            "lng": 126.850816
        }
    },
    {
        "id": 190,
        "name": "쿤스트할레광주",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1470573,
            "lng": 126.920031
        }
    },
    {
        "id": 191,
        "name": "탑마린모터스",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12788489,
            "lng": 126.845217
        }
    },
    {
        "id": 192,
        "name": "테마커뮤니케이션",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.16094475,
            "lng": 126.858967
        }
    },
    {
        "id": 193,
        "name": "틈새미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12108518,
            "lng": 126.920617
        }
    },
    {
        "id": 194,
        "name": "티랩골프",
        "category": "",
        "label": "운동",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15784334,
            "lng": 126.904246
        }
    },
    {
        "id": 195,
        "name": "평생학습문화센터공연장",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17285434,
            "lng": 126.913652
        }
    },
    {
        "id": 196,
        "name": "피크뮤직홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.1426119,
            "lng": 126.914907
        }
    },
    {
        "id": 197,
        "name": "하멜아트홀",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.12781183,
            "lng": 126.912806
        }
    },
    {
        "id": 198,
        "name": "하정웅관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.18323305,
            "lng": 126.885736
        }
    },
    {
        "id": 199,
        "name": "하정웅미술관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.15498216,
            "lng": 126.888442
        }
    },
    {
        "id": 200,
        "name": "한국미용박물관",
        "category": "",
        "label": "전시",
        "image": "/assets/map/ready_for_service.png",
        "position": {
            "lat": 35.17237685,
            "lng": 126.909399
        }
    }
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
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PlaceType | null>(null); // Add this line

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-center items-center">
        <FilterButtons/>
      </div>
      {/* 지도 영역 - 고정 */}
      <div className="relative h-[420px] sm:h-[360px] md:h-[300px] lg:h-[420px]">
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
            217개의 광주 배리어프리 장소
          </h2>
          <p className="text-[0.8rem] text-gray-400">
            한국문화정보원_전국 배리어프리 문화예술관광지 공공데이터
          </p>
        </div>
        
        {/* 목록 - 스크롤 가능 */}
        <div className="h-full overflow-y-auto">
  <div className="grid grid-cols-2 gap-4 px-4 pb-20">
    {places.map(place => (
      <div 
        key={place.id} 
        className="bg-white rounded-lg overflow-hidden"
        onClick={() => {
          setSelectedPlace(place); // Set the selected place
          setIsModalOpen(true); // Open the modal
        }}
      >
        <div className="py-2">
          <h3 className="text-[12px] font-medium text-gray-900 line-clamp-2 text-left">{place.category}</h3>
          <p className="text-[12px] text-gray-500 mt-1 text-left">{place.name}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
      <SimpleModal 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  post={selectedPlace ? {
    id: selectedPlace.id,
    author: '',
    content: selectedPlace.name,
    time: '',
    image: selectedPlace.image
  } : null}
  message="현재 상세 시설 정보는 등록 중이에요!"
/>
    </div>
  );
};

export default MapBody; 