import Head from 'next/head';
import React from 'react';
import { Footer } from '../src/components/Layouts/Footer';
import { Nav } from '../src/components/Layouts/Nav';
import { TeamCard } from '../src/components/TeamCard';

const team = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC : Team</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-24'>
        <TeamCard />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default team;
