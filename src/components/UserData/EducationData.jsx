export function EducationData({ user }) {
  const education = user.education;
  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-2">Образование:</h2>
      <div>
        {education.map((edu, idx) => {
          return (
            <div
              key={idx}
              className="rounded-lg border border-gray-300 p-4 shadow-sm bg-gray-50"
            >
              <p>Институт: {edu.institution}</p>
              <p>Уровень образования: {edu.level}</p>
              <p>Год поступления: {edu.year}</p>
              <p>Специальность: {edu.speciality}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
