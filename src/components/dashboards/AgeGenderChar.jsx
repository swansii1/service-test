import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

export function AgeGenderChart({ users }) {
  const [chartData, setChartData] = useState(null);

  const ageGroups = ["18–25", "26–35", "36–45", "46+"];

  useEffect(() => {
    if (!users || users.length === 0) return;

    const grouped = {
      male: [0, 0, 0, 0],
      female: [0, 0, 0, 0],
    };

    users.forEach((user) => {
      const birthDate = new Date(user.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      let idx;
      if (age <= 25) idx = 0;
      else if (age <= 35) idx = 1;
      else if (age <= 45) idx = 2;
      else idx = 3;

      const normalizedGender = user.gender?.toLowerCase().trim();
      if (
        normalizedGender === "male" ||
        normalizedGender === "мужской" ||
        normalizedGender === "м"
      ) {
        grouped.male[idx]++;
      } else if (
        normalizedGender === "female" ||
        normalizedGender === "женский" ||
        normalizedGender === "ж"
      ) {
        grouped.female[idx]++;
      }
    });

    setChartData({
      labels: ageGroups,
      datasets: [
        {
          label: "Мужчины",
          data: grouped.male,
          backgroundColor: "rgba(54, 162, 235, 0.7)",
        },
        {
          label: "Женщины",
          data: grouped.female,
          backgroundColor: "rgba(255, 99, 132, 0.7)",
        },
      ],
    });
  }, [users]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Распределение по возрастным группам и полу",
      },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
  };

  return chartData ? (
    <div style={{ height: "300px", width: "33%" }}>
      <Bar data={chartData} options={options} />
    </div>
  ) : null;
}
