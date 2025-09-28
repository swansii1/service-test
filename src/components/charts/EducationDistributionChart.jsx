import { educationDistributionChart } from "../../utils/chartData/educationDistributionChart";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import { CHART_COLORS } from "../../utils/chartData/utilsChart/chartColors";

export function EducationDistributionChart({ users }) {
  const chartData = useMemo(() => {
    if (!users?.length) return null;

    const counts = {};
    users.forEach((u) => {
      const level = u.education?.[0]?.level || "Не указано";
      counts[level] = (counts[level] || 0) + 1;
    });

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          label: "Количество граждан",
          data: Object.values(counts),
          backgroundColor: CHART_COLORS.green,
          borderColor: CHART_COLORS.greenBorder,
          borderWidth: 1,
        },
      ],
    };
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200">
      {chartData ? (
        <Bar data={chartData} options={educationDistributionChart} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
