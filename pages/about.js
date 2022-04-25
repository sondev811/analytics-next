// @flow
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';

function About() {
  return (
    <div>
      <Head>
        <title>About page</title>
      </Head>
      <h1>About page</h1>
      <Link href="/about">Home</Link>
    </div>
  );
};

export default About;
