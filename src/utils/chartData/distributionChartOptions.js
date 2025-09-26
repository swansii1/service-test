export const chartOptions = {
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