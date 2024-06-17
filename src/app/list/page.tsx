import getRSVPs from "@/getRSVPs";
import React from "react";

export const dynamic = "force-dynamic";

export default async function List() {
  const rsvps = await getRSVPs();

  const totalPeople = rsvps.reduce((acc, rsvp) => acc + rsvp.plusAmount + 1, 0);

  return (
    <main className="py-20 container px-4 space-y-4 text-3xl text-center">
      <div className="text-blue-400">Total people: {totalPeople} </div>
      {rsvps?.map((rsvp) => (
        <div key={rsvp.name}>
          <u>{rsvp.name}</u>{" "}
          {!rsvp.plusAmount || rsvp.plusAmount === 0
            ? "comes alone"
            : `brings +${rsvp.plusAmount} ${
                rsvp.plusAmount === 1 ? "person" : "people"
              }`}
        </div>
      ))}
    </main>
  );
}
