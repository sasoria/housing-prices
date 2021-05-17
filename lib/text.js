export const removeWhitespaces = (string) => {
  const whitespaces = /\s/g;
  return string.replace(whitespaces, "");
};

const removeText = (string, text) => {
  return string.replace(text, "").replace("kr", "");
};

export const removeTextFromTotal = (string) => {
  return removeText(string, "Totalpris:");
};

export const removeTextFromExpenses = (string) => {
  if (!string) return null;
  return removeText(string, "Fellesutg.:");
};

export const convertToNorwegianPrice = (number) => {
  return number.toLocaleString("no-NO", {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
  });
};
