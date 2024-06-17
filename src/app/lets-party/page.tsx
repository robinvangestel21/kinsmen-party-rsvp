import React from "react";

export default async function Thanks() {
  return (
    <main className="py-16 container px-4 flex flex-col max-w-[400px] text-xl text-center">
      <div className="text-3xl">{`Let's party 😎`}</div>
      <div className="text-3xl mb-16">See you the 13th!</div>
      <div className="mb-8">{`You're welcome from 17:00 hr at`}</div>
      <div>Nieuwe Beemdsteeg 9</div>
      <div>5076 SG Haaren</div>
      <div className="mt-8">Room for tents</div>
    </main>
  );
}
