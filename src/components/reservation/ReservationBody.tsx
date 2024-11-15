'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';
import { useReservation } from '@/context/ReservationContext';

export default function ReservationBody() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(new Date('2024-11-17'));
  const [registrants, setRegistrants] = useState(2);
  const [companions, setCompanions] = useState(0);
  const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);
  
  const { 
    discounts,
    originalPrice,
    totalDiscount,
    finalPrice,
    setTotalDiscount,
    setFinalPrice,
  } = useReservation();

  const CustomHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
  }: {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
  }) => (
    <div className="flex items-center justify-between px-2 py-2">
      <button onClick={decreaseMonth}>
        <span className="text-gray-600">←</span>
      </button>
      <span className="text-lg font-semibold">
        {date.getFullYear()}년 {date.getMonth() + 1}월
      </span>
      <button onClick={increaseMonth}>
        <span className="text-gray-600">→</span>
      </button>
    </div>
  );

  const handleReservation = () => {
    router.push('/reservation/complete');
  };

  useEffect(() => {
    console.log('Context values:', {
      totalDiscount,
      finalPrice,
      originalPrice
    });
  }, [totalDiscount, finalPrice, originalPrice]);

  return (
    <div className="flex flex-col mx-4 px-5 py-8">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-2xl font-bold text-center mb-4">예약 옵션</h1>
        <div className="w-full h-px bg-gray-200 mb-2" />
        <p className="mb-4 text-center font-medium">예약 날짜와 방문 인원을 선택해 주세요.</p>

        <div className="border rounded-lg p-4 mb-6">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date || new Date())}
            inline
            locale={ko}
            renderCustomHeader={CustomHeader}
            dateFormat="yyyy년 MM월 dd일"
            minDate={new Date()}
            maxDate={new Date('2024-12-31')}
            calendarClassName="w-full"
            className="border-none p-0"
            wrapperClassName="w-full"
            dayClassName={(date) => 
              date.getDate() === selectedDate.getDate() &&
              date.getMonth() === selectedDate.getMonth()
                ? "bg-blue-500 text-white rounded-full"
                : ""
            }
          />

          <hr className="my-4" />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>등록장애인</span>
              <div className="flex items-center gap-4">
                <button 
                  className="w-8 h-8 rounded-full border flex items-center justify-center"
                  onClick={() => setRegistrants(Math.max(0, registrants - 1))}
                >
                  -
                </button>
                <span>{registrants}</span>
                <button 
                  className="w-8 h-8 rounded-full border flex items-center justify-center"
                  onClick={() => setRegistrants(registrants + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>동행자</span>
              <div className="flex items-center gap-4">
                <button 
                  className="w-8 h-8 rounded-full border flex items-center justify-center"
                  onClick={() => setCompanions(Math.max(0, companions - 1))}
                >
                  -
                </button>
                <span>{companions}</span>
                <button 
                  className="w-8 h-8 rounded-full border flex items-center justify-center"
                  onClick={() => setCompanions(companions + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-4">해당하는 항목을 선택해주세요</h2>
        <div className="space-y-2 mb-8">
          {discounts.map((discount, index) => (
            <div 
              key={index} 
              onClick={() => {
                const isCurrentlySelected = selectedDiscounts.includes(index);
                const newSelected = isCurrentlySelected
                  ? selectedDiscounts.filter(i => i !== index)
                  : [...selectedDiscounts, index];
                
                setSelectedDiscounts(newSelected);
                
                const newTotalDiscount = newSelected.reduce(
                  (sum, i) => sum + discounts[i].amount,
                  0
                );
                
                console.log('New Total Discount:', newTotalDiscount);
                console.log('Original Price:', originalPrice);
                console.log('Expected Final Price:', originalPrice - newTotalDiscount);
                
                setTotalDiscount(newTotalDiscount);
                setFinalPrice(originalPrice - newTotalDiscount);
              }}
              className={`flex justify-between items-center border rounded-lg p-3 cursor-pointer w-full
                ${selectedDiscounts.includes(index) ? 'border border-blue60' : 'border border-gray-200'}`}
            >
              <span className="text-sm font-semibold">{discount.title}</span>
              <span className="text-sm font-semibold text-red-500">- {discount.amount.toLocaleString()}원</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <span className="font-bold">총 결제 금액</span>
          <div className="text-right">
            <span className="line-through text-gray-400 mr-2">{originalPrice.toLocaleString()}원</span>
            <span className="font-bold">{finalPrice.toLocaleString()}원</span>
          </div>
        </div>

        <button 
          onClick={handleReservation}
          className="w-full bg-blue-500 hover:bg-blue-700 transition-colors text-white py-4 rounded-lg"
        >
          예약하기
        </button>
      </div>
    </div>
  );
} 