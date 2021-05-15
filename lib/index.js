import fetch from "node-fetch";
import parser from "node-html-parser";
import locations from "./locations.js";

const toPrices = (node) => {
  return node.childNodes[1].childNodes[0].rawText;
};

const toConsole = (price) => {
  console.log("🏡 " + price);
};

const fetchPrices = async (url) => {
  const response = await fetch(url);
  return response.text();
};

const app = async (flags) => {
  const code = locations.get(flags.location);
  const url = `https://www.finn.no/realestate/homes/search.html?location=${code}&sort=PUBLISHED_DESC`;
  const root = parser.parse(await fetchPrices(url));

  root
    .querySelectorAll(".ads__unit__content__keys")
    .map(toPrices)
    .map(toConsole);
};

export default app;
