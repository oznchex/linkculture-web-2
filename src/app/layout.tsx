// app/layout.tsx

import { Metadata } from 'next'
import Script from 'next/script';
import localFont from 'next/font/local'
import { ReservationProvider } from '@/context/ReservationContext';

import "./globals.css";

export const metadata: Metadata = {
  title: 'LinkCulture',
  description: '장애인과 시니어를 위한 배리어프리 서비스',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'LinkCulture',
    description: '장애인과 시니어를 위한 배리어프리 서비스',
    siteName: 'LinkCulture',
    locale: 'ko_KR',
    type: 'website',
    url: 'https://linkculture.kr',
    images: {
      url: '/logo.png',
    },
  }
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const museomoderno = localFont({
  src: './fonts/MuseoModerno-VariableFont_wght.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-museomoderno',
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
        strategy="afterInteractive" //"beforeInteractive"으로 찾았는데 경고메세지 떠가지고 after로 수정해줬습니다. 
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
        ></Script>
      </head>
      <body className="font-pretendard bg-[#fff] flex items-center justify-center min-h-[100dvh]">
        <div className="bg-[#F4F6FA] w-full h-[100dvh] flex items-center justify-center">
          <div className="w-full h-full max-w-[430px] bg-white overflow-y-auto relative mx-auto">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </div>
        </div>
      </body>
    </html>
  )
}

