import Head from "next/head";
import React from "react";
import { EventCard } from "../src/components/EventCard";
import { EventHero } from "../src/components/EventHero";
import { Nav } from "../src/components/Layouts/Nav";

const eventList = [];

const events = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="pt-24">
        <EventHero />
        <EventCard />
      </main>
    </React.Fragment>
  );
};

export default events;
