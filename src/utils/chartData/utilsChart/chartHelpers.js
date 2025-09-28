export const AGE_GROUPS = ["18–25", "26–35", "36–45", "46+"];

export const GENDER_MAP = {
  male: ["male", "мужской", "м"],
  female: ["female", "женский", "ж"],
};

export function calcAge(dateOfBirth) {
  if (!dateOfBirth) return null;
  const birthDate = new Date(dateOfBirth);
  if (isNaN(birthDate)) return null;

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

export function getAgeGroup(age) {
  if (age === null) return null;
  if (age <= 25) return 0;
  if (age <= 35) return 1;
  if (age <= 45) return 2;
  return 3;
}
