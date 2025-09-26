export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Количество членов семьи на человека" },
  },
  scales: {
    y: { beginAtZero: true, title: { display: true, text: "Количество" } },
    x: { title: { display: true, text: "Число членов семьи" } },
  },
};
