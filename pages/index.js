import Head from "next/head";
import "../styles/index.scss";
import styled from 'styled-components'


import LandingPage from './Landing'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CHAPTR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
    </div>
  );
}
