import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { ageGenderChartOption } from "../../utils/chartData/ageGenderageChartOptions";

export function GenderDistributionChart({ users }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (!users || users.length === 0) return;

    let maleCount = 0;
    let femaleCount = 0;

    users.forEach((citizen) => {
      if (citizen.gender) {
        const normalizedGender = citizen.gender.toLowerCase().trim();
        if (normalizedGender === "мужской" || normalizedGender === "м") {
          maleCount++;
        } else if (normalizedGender === "женский" || normalizedGender === "ж") {
          femaleCount++;
        }
      }
    });

    const labels = [];
    const dataValues = [];
    const backgroundColors = [];
    const borderColors = [];

    if (maleCount > 0) {
      labels.push("Мужчины");
      dataValues.push(maleCount);
      backgroundColors.push("rgba(54, 162, 235, 0.8)");
      borderColors.push("rgba(54, 162, 235, 1)");
    }
    if (femaleCount > 0) {
      labels.push("Женщины");
      dataValues.push(femaleCount);
      backgroundColors.push("rgba(255, 99, 132, 0.8)");
      borderColors.push("rgba(255, 99, 132, 1)");
    }

    setChartData({
      labels,
      datasets: [
        {
          label: "Количество граждан",
          data: dataValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    });
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200">
      {chartData.labels.length > 0 && chartData.datasets[0]?.data.length > 0 ? (
        <Pie data={chartData} options={ageGenderChartOption} />
      ) : (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Нет данных для отображения кругового графика.
        </div>
      )}
    </div>
  );
}
