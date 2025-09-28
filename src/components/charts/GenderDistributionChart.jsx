import { ageGenderChartOption } from "../../utils/chartData/ageGenderageChartOptions";
import { Pie } from "react-chartjs-2";
import { useMemo } from "react";
import { CHART_COLORS } from "../../utils/chartData/utilsChart/chartColors";
import { GENDER_MAP } from "../../utils/chartData/utilsChart/chartHelpers";

export function GenderDistributionChart({ users }) {
  const chartData = useMemo(() => {
    if (!users?.length) return null;

    let male = 0;
    let female = 0;

    users.forEach((u) => {
      const gender = u.gender?.toLowerCase().trim();
      if (GENDER_MAP.male.includes(gender)) male++;
      if (GENDER_MAP.female.includes(gender)) female++;
    });

    const labels = [];
    const values = [];
    const colors = [];
    const borders = [];

    if (male > 0) {
      labels.push("Мужчины");
      values.push(male);
      colors.push(CHART_COLORS.blue);
      borders.push(CHART_COLORS.blueBorder);
    }
    if (female > 0) {
      labels.push("Женщины");
      values.push(female);
      colors.push(CHART_COLORS.red);
      borders.push(CHART_COLORS.redBorder);
    }

    return {
      labels,
      datasets: [
        {
          label: "Количество граждан",
          data: values,
          backgroundColor: colors,
          borderColor: borders,
          borderWidth: 1,
        },
      ],
    };
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200 flex items-center justify-center">
      {chartData ? (
        <Pie data={chartData} options={ageGenderChartOption} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
