import Head from 'next/head';
import React from 'react';
import { EventCard } from '../src/components/EventCard';
import { EventHero } from '../src/components/EventHero';
import { Nav } from '../src/components/Layouts/Nav';

const eventList = [
  {
    title: 'GDSC CVR Kickstart Event',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '15 Sept 2021',
    time: '11:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
  {
    title: 'Introduction to 30 days of google cloud',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '02 Nov 2021',
    time: '6:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
  {
    title: 'Introduction to 30 days of google cloud',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '02 Nov 2021',
    time: '6:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
  {
    title: 'Introduction to 30 days of google cloud',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '02 Nov 2021',
    time: '6:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
  {
    title: 'Introduction to 30 days of google cloud',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '02 Nov 2021',
    time: '6:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
  {
    title: 'Introduction to 30 days of google cloud',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '02 Nov 2021',
    time: '6:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
  {
    title: 'Introduction to 30 days of google cloud',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
  temporibus dicta tempore, doloribus incidunt magni repudiandae id
  perferendis. Quas, hic!`,
    date: '02 Nov 2021',
    time: '6:00 pm',
    watchUrl: '',
    registerUrl: '',
  },
];

const events: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>GDSC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-24'>
        <EventHero />
        <EventCard content={eventList} />
      </main>
    </React.Fragment>
  );
};

export default events;
