import React, { FC } from "react"
import styles from "@styles/Heading.module.scss"

type Props = {
  title: string
  subtitle: string
}

const Heading: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.heading}>
      <h1>{title}</h1>
      <p style={{ textAlign: 'center' }}>{subtitle}</p>
    </div>
  )
}

export { Heading }
