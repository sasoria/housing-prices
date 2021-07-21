import { convertToNorwegianPrice } from "./text.js";
import { removeTextFromExpenses } from "./text.js";
import { removeTextFromTotal } from "./text.js";
import { removeWhitespaces } from "./text.js";

const parseToInteger = (price) => {
  return parseInt(removeWhitespaces(price));
};

export const parseToIntegers = (string) => {
  const prices = string.split("•");
  const total = removeTextFromTotal(prices[0]);
  const expenses = removeTextFromExpenses(prices[1]) || "0";

  return {
    total: parseToInteger(total),
    expenses: parseToInteger(expenses),
  };
};

export const toReadableFormat = ({ address, price }) => {
  return {
    address: address,
    price: {
      total: convertToNorwegianPrice(price.total),
      expenses: convertToNorwegianPrice(price.expenses),
    },
  };
};

export const byAscendingPrice = (a, b) => {
  return a.price.total - b.price.total;
};

export const toConsole = ({ address, price }) => {
  if (price.total === "kr NaN") {
    return;
  }
  console.log(address);
  console.log("🏡 " + price.total);
  console.log("🏘️ " + price.expenses + "\n");
};
