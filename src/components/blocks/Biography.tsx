import React from "react"
import styles from "@styles/Biography.module.scss"

import { Heading } from "@components/Heading"
import { Bio } from "@components/Bio"
import { BioCharacteristics } from "@components/BioCharacteristics"

const Biography = () => {
  return (
    <div className={styles.biography} id="biography">
      <Heading title="Hakkımda" subtitle="ben ve sektördekİ yerİm 😇" />
      <div className={styles.container}>
        <div className={styles.bio}>
          <Bio />
          <BioCharacteristics />
        </div>
      </div>
    </div>
  )
}

export { Biography }
