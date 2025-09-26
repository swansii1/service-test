export function FamilyData({ user }) {
  const { familyMembers } = user;
  console.log("familyMembers: ", familyMembers);

  if (!familyMembers || familyMembers.length === 0) {
    return <p>Нет данных о семье</p>;
  }

  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl mb-6 text-gray-800">Семья</h2>
      <ul className="space-y-4">
        {familyMembers.map((member, idx) => (
          <li
            key={idx}
            className="rounded-lg border border-gray-300 p-4 shadow-sm bg-gray-50"
          >
            <p>
              <span className="font-semibold">ФИО:</span> {member.fio}
            </p>
            <p>
              <span className="font-semibold">Родство:</span> {member.relation}
            </p>
            <p>
              <span className="font-semibold">Дата рождения:</span>{" "}
              {member.dateOfBirth}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
