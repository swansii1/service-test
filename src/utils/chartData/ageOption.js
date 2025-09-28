const ageOption = {
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

export default ageOption;
