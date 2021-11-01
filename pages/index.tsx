// Nav
// Hero
// Motto
// Faq
// Footer

import Head from 'next/head';
import Nav from '../src/components/Layouts/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GDSC</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Hello</h1>
      </main>
    </div>
  );
}
