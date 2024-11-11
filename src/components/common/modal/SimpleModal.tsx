'use client'

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimpleModal({ isOpen, onClose }: SimpleModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl px-6 py-5 w-[280px] text-center">
        <p>해당 버튼은 아직 이용 불가능해요!</p>
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