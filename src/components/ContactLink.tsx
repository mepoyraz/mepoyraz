import React, { FC } from "react"
import styles from "@styles/ContactLink.module.scss"

import Image from "next/image"
import Link from "next/link"

type Props = {
  icon: string
  title: string
  value: string
  url?: string
}

const ContactLink: FC<Props> = ({ icon, title, value, url }) => {
  return (
    <Link href={url || ''}>
      <a className={styles.link}>
        <div className={styles.contact}>
          <div className={styles.icon}>
            <Image
              src={icon}
              alt={title}
              layout="fixed"
              width={24}
              height={24}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <p className={styles.value}>{value}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export { ContactLink }
