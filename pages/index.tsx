// Nav
// Hero
// Motto
// Faq
// Footer

import Head from 'next/head';
import { FAQ } from '../src/components/FAQ';
import { Footer } from '../src/components/Layouts/Footer';
import { Nav } from '../src/components/Layouts/Nav';
import { Motto } from '../src/components/Motto';
import { Testimonial } from '../src/components/Testimonial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className='pt-32'>
        <Motto />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
