// Nav
// Hero
// Motto
// Faq
// Footer

import Head from 'next/head';
import { FAQ } from '../src/components/FAQ';
import { Footer } from '../src/components/Layouts/Footer';
import { Nav } from '../src/components/Layouts/Nav';
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
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
