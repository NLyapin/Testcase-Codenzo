export const tutors = [
  { name: "Анна", language: "Python", price: 1500 },
  { name: "Игорь", language: "Scratch", price: 1000 },
  { name: "Мария", language: "JavaScript", price: 1800 },
  { name: "Олег", language: "Python", price: 1300 },
];

export function filterTutors(list, language) {
  if (!language) return list;
  return list.filter((tutor) => tutor.language === language);
}

export function uniqueLanguages(list) {
  return [...new Set(list.map((tutor) => tutor.language))].sort();
}
