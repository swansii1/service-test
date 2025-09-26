import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { educationDistributionChart } from "../../utils/chartData/educationDistributionChart";

export function EducationDistributionChart({ users }) {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!users || users.length === 0) return;

    const educationCounts = {};
    users.forEach((u) => {
      const level = u.education?.[0]?.level || "Не указано";
      educationCounts[level] = (educationCounts[level] || 0) + 1;
    });

    setChartData({
      labels: Object.keys(educationCounts),
      datasets: [
        {
          label: "Количество граждан",
          data: Object.values(educationCounts),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200">
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} options={educationDistributionChart} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
