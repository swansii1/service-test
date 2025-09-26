export const ageGenderChartOption = {
  maintainAspectRatio: false,
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