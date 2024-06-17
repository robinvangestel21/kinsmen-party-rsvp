"use server";
import { createClient } from "contentful";

type RSVP = { name: string; plusAmount: number };

const getRSVPs = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_API_TOKEN || "",
  });

  return client
    .getEntries()
    .then((response) => response.items.map((item) => item.fields as RSVP));
};

export default getRSVPs;
