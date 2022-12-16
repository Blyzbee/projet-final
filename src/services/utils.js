export const birthdateParsing = (birthdate) => {
  const today = new Date();
  const birth = birthdate.split("-");
  const years = today.getFullYear() - Number(birth[0]);
  if (
    today.getMonth() + 1 <= Number(birth[1]) &&
    today.getDate() < Number(birth[2])
  )
    return years - 1;
  return years;
};
