import parser from "node-html-parser";
import fetchPrices from "./lib/api.js";
import locations from "./lib/locations.js";
import {
  byPrice,
  toIntegers,
  byAscendingPrice,
  splitPrices,
  parse,
  parseToReadableFormat,
} from "./lib/price.js";
import { toReadableFormat, toPrices, toConsole } from "./lib/price.js";

const app = async (flags) => {
  const locationCode = locations.get(flags.location);
  const url = `https://www.finn.no/realestate/homes/search.html?location=${locationCode}&sort=PUBLISHED_DESC`;
  const root = parser.parse(await fetchPrices(url));

  const details = root
    .querySelectorAll(".ads__unit__content")
    .map((content) => {
      const adress = content.querySelector(
        ".ads__unit__content__details"
      ).textContent;
      const price = content.querySelector(
        ".ads__unit__content__list"
      ).textContent;

      return {
        adress: adress,
        price: parse(price),
      };
    });

  details.map((detail) => {
    return {
      adress: detail.adress,
      price: parseToReadableFormat(detail.price),
    };
  });

  details.map((detail) => {
    console.log(detail.adress);
    console.log(parseToReadableFormat(detail.price));
  });

  // console.log(details);

  // console.log(details.map(splitPrices).map(toIntegers));
  // prices.sort(byAscendingPrice).map(toReadableFormat).map(toConsole);
};

export default app;
