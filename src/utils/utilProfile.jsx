import moment from "moment";

export const setInitials = (fullName) => {
  if (fullName === "User") {
    return "AB";
  }

  const firstLast = fullName.split(" ");
  const initials = firstLast[0].at(0) + firstLast[1].at(0);

  return initials;
}

const timeDiff = (lastActive) => {
  const userLastActive = moment(lastActive);
  const currentTime = moment();

  const difference = currentTime.diff(userLastActive, 'hour');
  return difference;
}

export const lastActiveString = (lastActive) => {
  const difference = timeDiff(lastActive);
  let lastLogin = '';

  if (difference < 1) {
    lastLogin = `Last login <1h ago.`;
  } else if (difference > 24) {
    lastLogin = `Last login >24h ago.`;
  } else {
    lastLogin = `Last login ${difference}h ago.`;
  }

  return lastLogin;
}