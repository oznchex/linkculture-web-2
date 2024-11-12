export default function OnboardingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col h-[100dvh]">
        {children}
      </div>
    );
  }
  