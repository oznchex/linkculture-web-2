'use client'

import { useState } from 'react';
import Image from 'next/image';
import SimpleModal from '@/components/common/modal/SimpleModal';

interface FilterTag {
  id: string;
  label: string;
  selected: boolean;
}

const posts = [
  {
    id: 1,
    author: 'fidzjfcj',
    content: '수어 해설이 제공되는 전시 찾고 있는데, 서울이나 근교에...',
    time: '09/25 8:41 PM',
    image: null
  },
  {
    id: 2,
    author: '배낭여행자',
    content: '무장애 관광 코스 추천드립니다!! 이번 휴가철에 다녀왔는데...',
    time: '09/25 7:41 PM',
    image: '/assets/community/baenang_traveler.png'
  },
  {
    id: 3,
    author: '주주',
    content: '무장애 관광 코스 추천드립니다!! 이번 주기획에 다녀왔는...',
    time: '09/24 6:35 PM',
    image: '/assets/community/joojoo.png'
  },
  {
    id: 4,
    author: 'sukki',
    content: '부모님이 휠체어를 타고 다니시는데, 이번에 함께 여행을...',
    time: '09/24 5:41 PM',
    image: ''
  },
  {
    id: 5,
    author: '엘런',
    content: '이번에 부산에 여행가게 되었습니다! 경사로 있는 맛집 추천...',
    time: '09/23 8:41 PM',
    image: ''
  },
  {
    id: 6,
    author: '쥰',
    content: '휠체어로 방문 가능한 호텔 추천해주세요! 이번헤 호캉스...',
    time: '09/23 6:40 PM',
    image: '/assets/community/jun.png'
  },
  {
    id: 7,
    author: '티마실래요',
    content: '이번에 시즌 야구 보고 왔는데, 주변에 맛집 추천드려요!...',
    time: '09/22 5:50 PM',
    image: '/assets/community/tea_masil.png'
  }
];


export default function CommunityBody() {
  const [filterTags, setFilterTags] = useState<FilterTag[]>([
    { id: 'point', label: '질문', selected: true },
    { id: 'review', label: '후기', selected: true },
    { id: 'all', label: '전체', selected: false },
    { id: 'friendly', label: '친목', selected: false },
    { id: 'recommend', label: '추천', selected: false },
  ]);

  const toggleFilter = (tagId: string) => {
    setFilterTags(prev => prev.map(tag => 
      tag.id === tagId ? { ...tag, selected: !tag.selected } : tag
    ));
  };

  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post: typeof posts[0]) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="h-full container mx-auto flex flex-col">
      {/* 필터 태그 */}
      <div className="px-4 py-3 w-full">
        <div className="flex gap-2 items-center w-full">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleFilter(tag.id)}
              className={`px-4 py-1.5 rounded-full text-[9px] border
                ${tag.selected 
                  ? 'border-blue-500 text-blue-500' 
                  : 'border-gray-200 text-gray-600'
                }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* 게시물 목록 - flex-1을 여기에 적용 */}
      <div className="flex-1 overflow-y-auto divide-y">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="px-4 py-3 cursor-pointer hover:bg-gray-50"
            onClick={() => handlePostClick(post)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-[12px] text-bold mb-1">{post.author}</h3>
                <p className="text-gray-600 text-[10px] mb-2">{post.content}</p>
                <span className="text-gray-400 text-[8px]">{post.time}</span>
              </div>
              {post.image && (
                <div className="ml-3 w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt="게시물 이미지"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <SimpleModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        post={selectedPost}
      />
    </div>
  );
} 