import { Bar } from "react-chartjs-2";
import { useMemo } from "react";
import {
  AGE_GROUPS,
  calcAge,
  getAgeGroup,
} from "../../utils/chartData/utilsChart/chartHelpers";
import { CHART_COLORS } from "../../utils/chartData/utilsChart/chartColors";
import ageOption from "../../utils/chartData/ageOption";

export function AgeDistributionChart({ users }) {
  const chartData = useMemo(() => {
    if (!users?.length) return null;

    const counts = [0, 0, 0, 0];
    users.forEach((u) => {
      const age = calcAge(u.dateOfBirth);
      const idx = getAgeGroup(age);
      if (idx !== null) counts[idx]++;
    });

    return {
      labels: AGE_GROUPS,
      datasets: [
        {
          label: "Количество граждан",
          data: counts,
          backgroundColor: CHART_COLORS.blue,
          borderColor: CHART_COLORS.blueBorder,
          borderWidth: 1,
        },
      ],
    };
  }, [users]);

  return (
    <div className="w-full h-80 border border-blue-200">
      {chartData ? (
        <Bar data={chartData} options={ageOption} />
      ) : (
        <p>Нет данных</p>
      )}
    </div>
  );
}
