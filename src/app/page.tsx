import { Shell } from "@/components/Shell";
import { CharacterCard } from "@/components/CharacterCard";
import { WizardBrief } from "@/components/WizardBrief";
import { TodayTasks } from "@/components/TodayTasks";
import { Vitals } from "@/components/Vitals";

export default function HomePage() {
  return (
    <Shell active="home">
      <CharacterCard />
      <WizardBrief />
      <TodayTasks />
      <Vitals />
    </Shell>
  );
}
