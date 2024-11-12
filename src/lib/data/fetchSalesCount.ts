import EleventyFetch from "@11ty/eleventy-fetch";
import { GUMROAD_PRODUCT_ID } from "../../consts";

const DEFAULT_COUNT_FOR_DEVELOPMENT = 100;

export default async function fetchSalesCount() {
  const GUMROAD_API_KEY = process.env.GUMROAD_API_KEY;
  if (!GUMROAD_API_KEY) {
    console.warn(
      "GUMROAD_API_KEY is not defined. Using a default value for the number of sales for development purposes."
    );
    return DEFAULT_COUNT_FOR_DEVELOPMENT;
  }

  const url = `https://api.gumroad.com/v2/products/${GUMROAD_PRODUCT_ID}?access_token=${GUMROAD_API_KEY}`;
  try {
    const data = await EleventyFetch(url, {
      type: "json",
    });
    return data.product.sales_count;
  } catch (error) {
    console.error(
      "Error fetching sales count from Gumroad API. Using a default value for the number of sales for development purposes.",
      error
    );
    return DEFAULT_COUNT_FOR_DEVELOPMENT;
  }
}
