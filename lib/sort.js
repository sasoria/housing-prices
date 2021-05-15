const trimWhitespaces = (string) => {
  const whitespaces = /\s/g;
  return string.replace(whitespaces, "");
};

export const toInteger = (string) => {
  return parseInt(trimWhitespaces(string));
};

export const toReadableFormat = (number) => {
  return number.toLocaleString("no-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
  });
};

export const byAscending = (a, b) => {
  return a - b;
};
