import parser from "node-html-parser";
import fetchPrices from "./lib/api.js";
import locations from "./lib/locations.js";
import { byAscendingPrice, parseToIntegers } from "./lib/price.js";
import { toConsole, toReadableFormat } from "./lib/price.js";

const app = async (flags) => {
  const locationCode = locations.get(flags.location);
  const url = `https://www.finn.no/realestate/homes/search.html?location=${locationCode}&sort=PUBLISHED_DESC`;
  const root = parser.parse(await fetchPrices(url));

  const details = root
    .querySelectorAll(".ads__unit__content")
    .map((content) => {
      const address = content.querySelector(
        ".ads__unit__content__details"
      ).textContent;
      const price = content.querySelector(
        ".ads__unit__content__list"
      ).textContent;

      return {
        address: address,
        price: parseToIntegers(price),
      };
    });

  details.sort(byAscendingPrice).map(toReadableFormat).map(toConsole);
};

export default app;
