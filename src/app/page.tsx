import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";
import { CharacterCard } from "@/components/CharacterCard";
import { WizardBrief } from "@/components/WizardBrief";
import { TodayTasks } from "@/components/TodayTasks";
import { Vitals } from "@/components/Vitals";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row min-h-[100dvh] md:min-h-screen">
      <Sidebar active="home" />
      <main className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 pb-20 md:pb-10">
        <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:gap-5">
          <CharacterCard />
          <WizardBrief />
          <TodayTasks />
          <Vitals />
        </div>
      </main>
      <BottomNav active="home" />
    </div>
  );
}
