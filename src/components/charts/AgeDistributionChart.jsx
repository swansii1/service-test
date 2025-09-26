import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

const AgeDistributionOption = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Распределение граждан по возрастным группам ",
    },
    tooltip: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const datasetLabel = context.dataset.label || "";
            const value = context.parsed?.y ?? context.parsed;
            const label = context.chart.data.labels[context.dataIndex];

            return `${datasetLabel} (${label}): ${value} чел.`;
          },
        },
      },
    },
  },
};

export function AgeDistributionChart({ users }) {
  const [chartData, setChartData] = useState({
    labels: ["18–25", "26–35", "36–45", "46+"],
    datasets: [
      {
        label: "Количество граждан",
        data: [0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (!users || users.length === 0) return;

    const ageGroups = { "18–25": 0, "26–35": 0, "36–45": 0, "46+": 0 };

    users.forEach((user) => {
      const birthDate = new Date(user.dateOfBirth); // проверь имя поля
      const ageMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      if (age >= 18 && age <= 25) ageGroups["18–25"]++;
      else if (age >= 26 && age <= 35) ageGroups["26–35"]++;
      else if (age >= 36 && age <= 45) ageGroups["36–45"]++;
      else if (age >= 46) ageGroups["46+"]++;
    });

    setChartData((prev) => ({
      ...prev,
      datasets: [{ ...prev.datasets[0], data: Object.values(ageGroups) }],
    }));
  }, [users]);

  return (
    <div className="w-full h-80 border border-blue-200">
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} options={AgeDistributionOption} />
      ) : (
        <p>Нет данных для отображения</p>
      )}
    </div>
  );
}
