'use client'

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    id: number;
    author: string;
    content: string;
    time: string;
    image: string | null;
  } | null;
  message?: string;
}

export default function SimpleModal({ isOpen, onClose, post, message }: SimpleModalProps) {
  if (!isOpen) return null;

  const defaultMessage = "해당 버튼은 아직 이용 불가능해요!";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl px-6 py-5 w-[280px] text-[14px] text-center">
        <p>{message || defaultMessage}</p>
        <button 
          onClick={onClose}
          className="mt-4 text-blue-600 font-medium"
        >
          확인
        </button>
      </div>
    </div>
  );
} 