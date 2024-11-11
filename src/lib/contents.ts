export type Benefit = {
    label: string;
    color?: string;
  };
  
  export type ContentItem = {
    category: string;
    title: string;
    benefits: Benefit[];
    crowdedness: '혼잡도 높음' | '혼잡도 낮음';
    points: string;
    thumbnail: string;
  };
  
  export const dummyContents: ContentItem[] = [
    {
      category: '전시·행사',
      title: '김대중컨벤션센터',
      benefits: [
        { label: '휠체어 대여 가능' },
        { label: '장애인 화장실' },
        { label: '전용 주차구역' }
      ],
      crowdedness: '혼잡도 낮음',
      points: '+3',
      thumbnail: '/assets/smallBanner/small_govexpo.png'
    },

    {
      category: '전시·행사',
      title: '제 15회 광주비엔날레',
      benefits: [
        { label: '문화누리카드 가맹점' },
        { label: '무료입장' },
        { label: '장애인 화장실' }
      ],
      crowdedness: '혼잡도 높음',
      points: '+5',
      thumbnail: '/assets/smallBanner/small_pansori.png'
    },

    {
        category: '전시·행사',
        title: '광주예술의전당',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '장애인 화장실' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+5',
        thumbnail: '/assets/smallBanner/small_art_area.png'
      },

      {
        category: '전시·행사',
        title: '국립아시아문화전당',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '복지 카드 50% 할인' },
        ],
        crowdedness: '혼잡도 낮음',
        points: '+4',
        thumbnail: '/assets/smallBanner/small_asia_area.png'
      },

      {
        category: '영화·공연',
        title: '광산문화예술회관',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '50% 할인' },
        ],
        crowdedness: '혼잡도 낮음',
        points: '+4',
        thumbnail: '/assets/smallBanner/small_gwangsan.png'
      },

      {
        category: '영화·공연',
        title: '롯데시네마 광주',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '동반 1인 포함 50% 할인' },
        ],
        crowdedness: '혼잡도 낮음',
        points: '+3',
        thumbnail: '/assets/smallBanner/small_lotte.png'
      },

      {
        category: '영화·공연',
        title: '광주독립영화관',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '동반 1인 포함 40% 할인' },
        ],
        crowdedness: '혼잡도 낮음',
        points: '+2',
        thumbnail: '/assets/smallBanner/small_change.png'
      },

      {
        category: '영화·공연',
        title: '메가박스 광주상무',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '장애인석' },
          { label: '장애인 화장실' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+2',
        thumbnail: '/assets/smallBanner/small_megabox.png'
      },

      {
        category: '체육·경기',
        title: '상무국민체육센터',
        benefits: [
          { label: '장애인스포츠강좌이용권' },
          { label: '장애인 화장실' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+2',
        thumbnail: '/assets/smallBanner/small_swimming.png'
      },

      {
        category: '체육·경기',
        title: '1234 리듬복싱 상무본점',
        benefits: [
          { label: '장애인스포츠강좌이용권' },
          { label: '전용 주차구역' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+3',
        thumbnail: '/assets/smallBanner/small_boxing.png'
      },

      {
        category: '체육·경기',
        title: '광주광역시검도회',
        benefits: [
          { label: '장애인스포츠강좌이용권' },
          { label: '차량지원' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+1',
        thumbnail: '/assets/smallBanner/small_kendo.png'
      },

      {
        category: '체육·경기',
        title: '24시 달려라휘트니스 용봉점 헬스 PT',
        benefits: [
          { label: '장애인스포츠강좌이용권' },
          { label: '전용 주차구역' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+2',
        thumbnail: '/assets/smallBanner/small_pt.png'
      },

      {
        category: '관광·명소',
        title: '더아람',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '전용 주차구역' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+2',
        thumbnail: '/assets/smallBanner/small_the_aram.png'
      },


      {
        category: '관광·명소',
        title: '광주벅스랜드',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '복지카드 50% 할인' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+3',
        thumbnail: '/assets/smallBanner/small_bugsland.png'
      },
  
      {
        category: '관광·명소',
        title: '광주시민의숲 야영장',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '복지카드 70% 할인' }
        ],
        crowdedness: '혼잡도 낮음',
        points: '+3',
        thumbnail: '/assets/smallBanner/small_camping.png'
      },

      {
        category: '관광·명소',
        title: '광주패밀리랜드',
        benefits: [
          { label: '문화누리카드 가맹점' },
          { label: '동반 1인 포함 30% 할인' }
        ],
        crowdedness: '혼잡도 높음',
        points: '+2',
        thumbnail: '/assets/smallBanner/small_familyland.png'
      },
  ]; 