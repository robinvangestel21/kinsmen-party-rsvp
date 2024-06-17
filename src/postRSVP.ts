"use server";

import { createClient } from "contentful-management";

const postRSVP = async (data: any) => {
  const client = createClient({
    accessToken: "CFPAT-h_vuMCA-qMAIwZWok70KroIRtHtm-eUyuWy1PsN7idk",
  });

  return client
    .getSpace(process.env.CONTENTFUL_SPACE_ID || "")
    .then((space) => space.getEnvironment("master"))
    .then((environment) =>
      environment.createEntry("rsvp", {
        fields: {
          name: {
            "en-US": data.name,
          },
          plusAmount: {
            "en-US": parseInt(data.amount),
          },
        },
      })
    )
    .then((entry) => entry.publish())
    .then(() => true)
    .catch(() => false);
};

export default postRSVP;
