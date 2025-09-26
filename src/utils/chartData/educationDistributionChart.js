export const educationDistributionChart = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Распределение по уровню образования" },
  },
  scales: {
    y: { beginAtZero: true, title: { display: true, text: "Количество" } },
    x: { title: { display: true, text: "Уровень образования" } },
  },
};
