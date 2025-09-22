export function PassportData({ user }) {
  const passport = user.passportData;

  if (!passport) return <p>Нет паспортных данных</p>;
  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">
        Паспортные данные
      </h2>
      <div className="rounded-lg border border-gray-300 p-4 shadow-sm bg-gray-50">
        <p>
          <span className="font-semibold">Серия:</span>{" "}
          {passport.passportSeries}
        </p>
        <p>
          <span className="font-semibold">Номер:</span>{" "}
          {passport.passportNumber}
        </p>
        <p>
          <span className="font-semibold">Выдан:</span>{" "}
          {passport.passportIssuedBy}
        </p>
        <p>
          <span className="font-semibold">Дата выдачи:</span>{" "}
          {passport.passportIssueDate}
        </p>
      </div>
    </div>
  );
}
