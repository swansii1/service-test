import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";


export function AgeDistributionChart({ users }) {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!users || users.length === 0) return;

    const ageGroups = {
      "18–25": 0,
      "26–35": 0,
      "36–45": 0,
      "46+": 0,
    };

    users.forEach((user) => {
      const { dateOfBirth } = user;

      const birthDate = new Date(dateOfBirth);
      const ageMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      if (age >= 18 && age <= 25) ageGroups["18–25"]++;
      else if (age >= 26 && age <= 35) ageGroups["26–35"]++;
      else if (age >= 36 && age <= 45) ageGroups["36–45"]++;
      else if (age >= 46) ageGroups["46+"]++;
    });

    setChartData({
      labels: Object.keys(ageGroups),
      datasets: [
        {
          label: "Количество граждан",
          data: Object.values(ageGroups),
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [users]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "📊 Распределение по возрасту" },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Количество" } },
      x: { title: { display: true, text: "Возрастные группы" } },
    },
  };

  return (
    <div style={{ height: "300px", width: "33%" }}>
      {chartData.labels.length > 0 ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <p>Нет данных для отображения</p>
      )}
    </div>
  );
}
