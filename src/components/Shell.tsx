import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";

export function Shell({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-[100dvh] md:h-screen overflow-hidden">
      <Sidebar active={active} />
      <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-4 sm:gap-5">
          {children}
        </div>
      </main>
      <BottomNav active={active} />
    </div>
  );
}
