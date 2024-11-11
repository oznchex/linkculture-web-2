'use client';

import { useReservation } from '@/context/ReservationContext';
import { useRouter } from 'next/navigation';

export default function ReservationComplete() {
  const { selectedDiscounts, discounts, originalPrice, totalDiscount, finalPrice } = useReservation();
  const router = useRouter();

  return (
    <div className="flex flex-col h-full">
      {/* 메인 콘텐츠 영역 - 스크롤 가능 */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 py-8">
          <h1 className="text-2xl font-bold text-center mb-4">예약 옵션</h1>
          
          <div className="w-full h-px bg-gray-200 mb-16" />
          
          <div className="text-center mb-16">
            <h2 className="text-xl mb-2">예약이 완료되었습니다.</h2>
            <p className="text-gray-600 text-sm">※ 실제로 예약된 것이 아님을 알려드립니다.</p>
          </div>

          {/* 사용자 정보 카드 */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-5">
            <h3 className="font-medium mb-4">이용자 정보</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>이름</span>
                <span>홍길동</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>연락처</span>
                <span>010-1234-5678</span>
              </div>
            </div>
          </div>

          {/* 결제 금액 카드 */}
          <div className="bg-gray-50 rounded-2xl p-5 mb-12">
            <h3 className="font-medium mb-4">결제 금액</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>상품 금액</span>
                <span>{originalPrice.toLocaleString()}원</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>할인 금액</span>
                <span className="text-red-500">-{totalDiscount.toLocaleString()}원</span>
              </div>
              
              {selectedDiscounts.map((discountIndex) => (
                <div key={discountIndex} className="flex justify-between text-gray-600 text-sm pl-4">
                  <span>{discounts[discountIndex].title}</span>
                  <span className="text-red-500">
                    -{discounts[discountIndex].amount.toLocaleString()}원
                  </span>
                </div>
              ))}

              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>최종 결제 금액</span>
                  <span>{finalPrice.toLocaleString()}원</span>
                </div>
              </div>
            </div>
          </div>

          {/* 안내 메시지 */}
          <div className="space-y-4 mb-16">
            <div className="flex items-start gap-2">
              <svg className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-blue-500">예약이 확정되면 알림톡을 전송해 드립니다.</span>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-blue-500">예약 취소 및 변경이 필요하시면 &apos;마이 {'>'} 예약 관리&apos;를 통해 진행해 주세요</span>
            </div>
          </div>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex-shrink-0 bg-white px-5 py-4 border-t">
        <button 
          onClick={() => router.push('/thankyou')}
          className="w-full bg-blue60 text-white py-2 rounded-full mb-3 text-lg"
        >
          부스 체험 완료
        </button>
        
        <button 
          onClick={() => router.push('/home')}
          className="w-full text-gray-600 underline text-sm"
        >
          더 둘러보기
        </button>
      </div>
    </div>
  );
}