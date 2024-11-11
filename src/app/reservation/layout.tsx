import { ReservationProvider } from '@/context/ReservationContext';

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReservationProvider>
      {children}
    </ReservationProvider>
  );
}
  