import { Shell } from "@/components/Shell";
import { CharacterCard } from "@/components/CharacterCard";
import { WizardBrief } from "@/components/WizardBrief";
import { TodayTasks } from "@/components/TodayTasks";
import { WhoopCard } from "@/components/WhoopCard";
import { WeatherCard } from "@/components/WeatherCard";
import { NetWorthChart } from "@/components/NetWorthChart";
import { AddMenu } from "@/components/AddMenu";

export default function HomePage() {
  return (
    <Shell active="home">
      <div className="flex flex-col gap-6 sm:gap-8">
        <section className="flex flex-col gap-2 sm:gap-3">
          <span className="label-mono px-1">Today</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
            <div className="flex flex-col gap-4 sm:gap-5">
              <CharacterCard />
              <WizardBrief />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <WhoopCard />
                <WeatherCard />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-end">
                <AddMenu />
              </div>
              <TodayTasks />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2 sm:gap-3">
          <span className="label-mono px-1">Long-term</span>
          <NetWorthChart />
        </section>
      </div>
    </Shell>
  );
}
