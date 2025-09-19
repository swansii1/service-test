import { AgeDistributionChart } from "../components/dashboards/AgeDistributionChart";
import { GenderDistributionChart } from "../components/dashboards/GenderDistributionChart";

export function Dashboard() {
  return (
    <div className="w-full bg-white pt-10 pb-10 flex">
      <GenderDistributionChart />
      <AgeDistributionChart />
    </div>
  );
}
