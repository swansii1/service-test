import { useGetAllUsersQuery } from "../redux/slices/apiSlice";
import { AgeDistributionChart } from "../components/charts/AgeDistributionChart";
import { AgeGenderChart } from "../components/charts/AgeGenderChar";
import { GenderDistributionChart } from "../components/charts/GenderDistributionChart";
import Spiner from "../components/UI/Spin";

export function Dashboard() {
  const { data, isLoading, isError } = useGetAllUsersQuery();

  const users = data?.users || [];

  if (isLoading) return <Spiner />;
  if (isError) return <p>Ошибка: {isError}</p>;
  if (!data || users.length === 0) return <p>Нет данных</p>;

  return (
    <div className="w-full bg-white pt-5 pb-5 flex flex-wrap gap-6 justify-center">
      <AgeDistributionChart users={users} />
      <GenderDistributionChart users={users} />
      <AgeGenderChart users={users} />
    </div>
  );
}
