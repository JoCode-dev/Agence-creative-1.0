import Sanity from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = Sanity({
  projectId: "i4ccj3tf",
  dataset: "production",
  apiVersion: "2022-10-29",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
