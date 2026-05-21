import { Shell } from "@/components/Shell";
import { CharacterCard } from "@/components/CharacterCard";
import { WizardBrief } from "@/components/WizardBrief";
import { TodayTasks } from "@/components/TodayTasks";
import { WhoopCard } from "@/components/WhoopCard";
import { WeatherCard } from "@/components/WeatherCard";

export default function HomePage() {
  return (
    <Shell active="home">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
        <div className="flex flex-col gap-4 sm:gap-5">
          <CharacterCard />
          <WizardBrief />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <WhoopCard />
            <WeatherCard />
          </div>
        </div>
        <TodayTasks />
      </div>
    </Shell>
  );
}
