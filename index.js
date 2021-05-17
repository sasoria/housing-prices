import parser from "node-html-parser";
import fetchPrices from "./lib/api.js";
import locations from "./lib/locations.js";
import { byAscending } from "./lib/sort.js";
import { byPrice, toInteger } from "./lib/price.js";
import { toReadableFormat, toPrice, toConsole } from "./lib/price.js";

const app = async (flags) => {
  const code = locations.get(flags.location.toLowerCase());
  const url = `https://www.finn.no/realestate/homes/search.html?location=${code}&sort=PUBLISHED_DESC`;
  const root = parser.parse(await fetchPrices(url));

  const prices = root
    .querySelectorAll(".ads__unit__content__list")
    .filter(byPrice)
    .map(toPrice)
    .map(toInteger);

  prices.sort(byAscending).map(toReadableFormat).map(toConsole);
};

export default app;
