import fetch from "node-fetch";

const fetchPrices = async (url) => {
  const response = await fetch(url);
  return response.text();
};

export default fetchPrices;
