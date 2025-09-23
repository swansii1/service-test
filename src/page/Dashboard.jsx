import { useSelector } from "react-redux";
import { AgeDistributionChart } from "../components/dashboards/AgeDistributionChart";
import { AgeGenderChart } from "../components/dashboards/AgeGenderChar";
import { GenderDistributionChart } from "../components/dashboards/GenderDistributionChart";
import Spiner from "../components/UI/Spin";

export function Dashboard() {
  const { data: users, loading, error } = useSelector((state) => state.users);

  if (loading) return <Spiner />;
  if (error) return <p>Ошибка: {error}</p>;
  if (!users || users.length === 0) return <p>Нет данных</p>;

  return (
    <div className="w-full bg-white pt-10 pb-10 flex">
      <AgeDistributionChart users={users} />
      <GenderDistributionChart users={users} />
      <AgeGenderChart users={users} />
    </div>
  );
}
