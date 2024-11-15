import { ReservationProvider } from '@/context/ReservationContext';

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReservationProvider>
      <div className="flex flex-col h-[100dvh]">
        {children}
      </div>
    </ReservationProvider>
  );
}
  