import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import styles from "@styles/Home.module.scss"

import { Header } from "@components/Header"
import { Intro } from "@blocks/Intro"
import { Separator } from "@components/Separator"
import { Biography } from "@components/blocks/Biography"
import { Projects } from "@components/blocks/Projects"
import { HardSkills } from "@components/blocks/HardSkills"
import { Contacts } from "@components/blocks/Contacts"
import { Footer } from "@components/Footer"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polat Poyraz</title>
        <meta name="description" content="Personal Website — Portfolio 😎" />
        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* Intro */}
        <Intro />
        <Separator />
        {/* Biography */}
        <Biography />
        <Separator />
        {/* Projects */}
        {/* <Projects /> */}
        {/* <Separator /> */}
        {/* HardSkills */}
        <HardSkills />
        <Separator />
        {/* Contacts */}
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default Home
