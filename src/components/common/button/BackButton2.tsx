'use client'

import { useRouter } from 'next/navigation'

export default function BackButton2() {
  const router = useRouter()
  
  return (
    <button 
      onClick={() => router.back()}
      className="p-3 -ml-4"
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="w-7 h-7"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  )
} 