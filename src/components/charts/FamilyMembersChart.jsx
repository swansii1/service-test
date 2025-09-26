import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { options } from "../../utils/chartData/optionsFamilyMembers";


export function FamilyMembersChart({ users }) {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!users || users.length === 0) return;

    const familyCount = {};
    users.forEach((u) => {
      const count = u.familyMembers?.length || 0;
      familyCount[count] = (familyCount[count] || 0) + 1;
    });

    setChartData({
      labels: Object.keys(familyCount),
      datasets: [
        {
          label: "Количество граждан",
          data: Object.values(familyCount),
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200">
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
