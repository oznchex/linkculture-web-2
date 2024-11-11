'use client'

import Image from 'next/image'

export default function ThankYou() {
  return (
    <div className="flex flex-col h-full overflow-hiddenitems-center justify-center bg-[#E6EFFF] px-4">
      <div className="text-center mt-24">
        <h1 className="text-4xl font-bold mb-3">체험이 종료되었습니다.</h1>
        <p className="text-2xl">참여해 주셔서 감사드립니다 :)</p>
      </div>
      <div className="flex-1 flex items-center">
        <Image
          src="/assets/thankyou/thankyou.png"
          alt="감사 이미지"
          width={400}
          height={400}
          priority
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}
