'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Discount {
  title: string;
  amount: number;
}

interface ReservationContextType {
    selectedDiscounts: number[];
    setSelectedDiscounts: (discounts: number[]) => void;
    discounts: Discount[];
    originalPrice: number;
    totalDiscount: number;
    finalPrice: number;
    setTotalDiscount: (discount: number) => void;
    setFinalPrice: (price: number) => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);
  const [originalPrice, setOriginalPrice] = useState(334000);
  const [finalPrice, setFinalPrice] = useState(originalPrice);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const discounts = [
    { title: '문화누리카드 사용', amount: 130000 },
    { title: '동행자 1인 50% 할인', amount: 65000 },
    { title: 'KTX 50% 할인 (동행자 포함)', amount: 72000 },
    { title: '국.공립공원 입장요금 무료', amount: 12000 },
    { title: '링컬처 VIP 쿠폰', amount: 30000 },
  ];

  useEffect(() => {
    setFinalPrice(originalPrice - totalDiscount);
  }, [totalDiscount, originalPrice]);

  return (
    <ReservationContext.Provider value={{
      selectedDiscounts,
      setSelectedDiscounts,
      discounts,
      originalPrice,
      totalDiscount,
      setTotalDiscount,
      finalPrice,
      setFinalPrice,
    }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
}