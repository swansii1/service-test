import { useGetAllUsersQuery } from "../redux/slices/apiSlice";
import { AgeDistributionChart } from "../components/charts/AgeDistributionChart";
import { AgeGenderChart } from "../components/charts/AgeGenderChar";
import { GenderDistributionChart } from "../components/charts/GenderDistributionChart";
import Spiner from "../components/UI/Spin";
import { EducationDistributionChart } from "../components/charts/EducationDistributionChart";
import { FamilyMembersChart } from "../components/charts/FamilyMembersChart";

let charts = [
  AgeDistributionChart,
  GenderDistributionChart,
  AgeGenderChart,
  EducationDistributionChart,
  FamilyMembersChart,
];

export function Dashboard() {
  const { data, isLoading, isError } = useGetAllUsersQuery();
  const users = data?.users || [];

  if (isLoading) return <Spiner />;
  if (isError) return <p>Ошибка: {isError}</p>;
  if (!data || users.length === 0) return <p>Нет данных</p>;

  return (
    <div className="rounded-lg w-full bg-white pt-5 pb-5 flex flex-wrap gap-9 justify-center">
      {charts.map((Chart, index) => {
        return (
          <div key={index} className="w-full sm:w-[48%] lg:w-[32%] h-80">
            <Chart users={users} />
          </div>
        );
      })}
    </div>
  );
}
