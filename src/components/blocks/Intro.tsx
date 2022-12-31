import React from "react"
import styles from "@styles/Intro.module.scss"

import { Socials } from "@components/Socials"
import { Title } from "@components/Title"
import { Abstractions } from "@components/Abstractions"

const Intro = () => {
  return (
    <div className={styles.intro} id="intro">
      <Abstractions />
      <div className={styles.container}>
        <Title />
        <div className={styles.socials}>
          <Socials size={36} />
        </div>
      </div>
    </div>
  )
}

export { Intro }
