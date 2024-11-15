import ReservationBody from '../../components/reservation/ReservationBody';

export default function ReservationPage() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-y-auto">
        <ReservationBody />
      </main>
    </div>
  )
}
