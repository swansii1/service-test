import { ageGenderChartOption } from "../../utils/chartData/ageGenderageChartOptions";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import {
  AGE_GROUPS,
  calcAge,
  getAgeGroup,
  GENDER_MAP,
} from "../../utils/chartData/utilsChart/chartHelpers";
import { CHART_COLORS } from "../../utils/chartData/utilsChart/chartColors";

export function AgeGenderChart({ users }) {
  const chartData = useMemo(() => {
    if (!users?.length) return null;

    const grouped = { male: [0, 0, 0, 0], female: [0, 0, 0, 0] };

    users.forEach((u) => {
      const age = calcAge(u.dateOfBirth);
      const idx = getAgeGroup(age);
      if (idx === null) return;

      const gender = u.gender?.toLowerCase().trim();
      if (GENDER_MAP.male.includes(gender)) grouped.male[idx]++;
      if (GENDER_MAP.female.includes(gender)) grouped.female[idx]++;
    });

    return {
      labels: AGE_GROUPS,
      datasets: [
        {
          label: "Мужчины",
          data: grouped.male,
          backgroundColor: CHART_COLORS.blue,
        },
        {
          label: "Женщины",
          data: grouped.female,
          backgroundColor: CHART_COLORS.red,
        },
      ],
    };
  }, [users]);

  return (
    <div className="h-full w-full border border-blue-200">
      {chartData ? (
        <Bar data={chartData} options={ageGenderChartOption} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
