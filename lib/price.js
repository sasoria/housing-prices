import { convertToNorwegianPrice } from "./text.js";
import { removeTextFromExpenses } from "./text.js";
import { removeTextFromTotal } from "./text.js";
import { removeWhitespaces } from "./text.js";

const splitPrices = (string) => {
  const prices = string.split("•");
  const total = removeTextFromTotal(prices[0]);
  const expenses = removeTextFromExpenses(prices[1]) || "0";

  return {
    total,
    expenses,
  };
};

export const toInteger = (price) => {
  return {
    total: parseInt(removeWhitespaces(price.total)),
    expenses: parseInt(removeWhitespaces(price.expenses)),
  };
};

export const toReadableFormat = (price) => {
  return {
    total: convertToNorwegianPrice(price.total),
    expenses: convertToNorwegianPrice(price.expenses),
  };
};

export const byPrice = (node) => {
  return node.childNodes[0].rawText.includes("Totalpris:");
};

export const byAscendingPrice = (a, b) => {
  return a.total - b.total;
};

export const toPrice = (node) => {
  const price = splitPrices(node.rawText);
  return price;
};

export const toConsole = (price) => {
  console.log("🏡 " + price.total);
  console.log("🏘️ " + price.expenses + "\n");
};
