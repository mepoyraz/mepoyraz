import React, { FC } from "react"
import styles from "@styles/BioItemLine.module.scss"

type Props = {
  isLast?: boolean
}

const BioItemLine: FC<Props> = ({ isLast }) => {
  return (
    <div className={styles.line}>
      <div className={styles.left}></div>
      <div className={isLast ? styles.last : styles.right}>
        <div className={styles.center}></div>
      </div>
    </div>
  )
}

export { BioItemLine }
