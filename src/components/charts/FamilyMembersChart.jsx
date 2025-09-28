import { options } from "../../utils/chartData/optionsFamilyMembers";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import { CHART_COLORS } from "../../utils/chartData/utilsChart/chartColors";

export function FamilyMembersChart({ users }) {
  const chartData = useMemo(() => {
    if (!users?.length) return null;

    const counts = {};
    users.forEach((u) => {
      const count = u.familyMembers?.length || 0;
      counts[count] = (counts[count] || 0) + 1;
    });

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          label: "Количество граждан",
          data: Object.values(counts),
          backgroundColor: CHART_COLORS.purple,
          borderColor: CHART_COLORS.purpleBorder,
          borderWidth: 1,
        },
      ],
    };
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200">
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
