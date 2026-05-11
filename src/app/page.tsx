import { Sidebar } from "@/components/Sidebar";
import { CharacterCard } from "@/components/CharacterCard";
import { WizardBrief } from "@/components/WizardBrief";
import { TodayTasks } from "@/components/TodayTasks";
import { Vitals } from "@/components/Vitals";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar active="home" />
      <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-4xl flex flex-col gap-5">
          <CharacterCard />
          <WizardBrief />
          <TodayTasks />
          <Vitals />
        </div>
      </main>
    </div>
  );
}
