import parser from "node-html-parser";
import fetchPrices from "./lib/api.js";
import locations from "./lib/locations.js";
import { byPrice, toIntegers, byAscendingPrice } from "./lib/price.js";
import { toReadableFormat, toPrices, toConsole } from "./lib/price.js";

const app = async (flags) => {
  const locationCode = locations.get(flags.location);
  const url = `https://www.finn.no/realestate/homes/search.html?location=${locationCode}&sort=PUBLISHED_DESC`;
  const root = parser.parse(await fetchPrices(url));

  const prices = root
    .querySelectorAll(".ads__unit__content__list")
    .filter(byPrice)
    .map(toPrices)
    .map(toIntegers);

  prices.sort(byAscendingPrice).map(toReadableFormat).map(toConsole);
};

export default app;
