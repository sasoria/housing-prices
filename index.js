import parser from "node-html-parser";
import fetchPrices from "./lib/api.js";
import locations from "./lib/locations.js";
import { CONTENT_SELECTOR, DETAILS_SELECTOR } from "./lib/constants.js";
import { PRICE_SELECTOR } from "./lib/constants.js";
import { byAscendingPrice, parseToIntegers } from "./lib/price.js";
import { toConsole, toReadableFormat } from "./lib/price.js";

const app = async (flags) => {
  const locationCode = locations.get(flags.location);
  const url = `https://www.finn.no/realestate/homes/search.html?location=${locationCode}&sort=PUBLISHED_DESC`;
  const root = parser.parse(await fetchPrices(url));

  const details = root.querySelectorAll(CONTENT_SELECTOR).map((content) => {
    const address = content.querySelector(DETAILS_SELECTOR).textContent;
    const price = content.querySelector(PRICE_SELECTOR).textContent;

    return {
      address: address,
      price: parseToIntegers(price),
    };
  });

  details.sort(byAscendingPrice).map(toReadableFormat).map(toConsole);
};

export default app;
