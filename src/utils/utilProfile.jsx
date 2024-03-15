export const setInitials = (fullName) => {
  if (fullName === "User") {
    return "AB";
  }

  const firstLast = fullName.split(" ");
  const initials = firstLast[0].at(0) + firstLast[1].at(0);

  return initials;
}